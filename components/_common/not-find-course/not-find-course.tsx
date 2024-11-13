"use client";

import React, {ReactElement, useState} from "react";
import {NotFindCourseProps} from "./not-find-course.props";
import styles from "./not-find-course.module.css";
import clsx from "clsx";
import Heading from "@/components/_tags/heading/heading";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import {Input} from "@/components/_form/input/input";
import Button from "@/components/_buttons/button/button";
import {Textarea} from "@/components/_form/textarea/textarea";
import {SubmitHandler, useForm} from "react-hook-form";
import {sendComment} from "@/actions";
import {RegularExp} from "@/helpers/contants";
import {formatPhoneNumber} from "@/helpers/helpers";
import IconError from "./error.svg";
import IconSuccess from "./success.svg";

const NotFindCourse = ({className}: NotFindCourseProps): ReactElement | null => {
  const [answerType, setAnswerType] = useState<"success" | "error" | null>(null);
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    reset,
    formState: {errors, isValid, validatingFields},
  } = useForm<{comment: string; contact: string}>({
    defaultValues: {
      comment: ``,
      contact: ``,
    },
  });

  const onSubmit: SubmitHandler<{comment: string; contact: string}> = async (data) => {
    const res = await sendComment({
      data,
    });

    setAnswerType(res);

    if (res === "success") {
      reset();
    }

    if (res === "error") {
      setTimeout(() => {
        setAnswerType(null);
      }, 2000);
    }
  };

  return (
    <section className={clsx(className, styles.wrapper, {
      [styles.success]: answerType === "success",
      [styles.error]: answerType === "error",
    })}>
      <div className={clsx(styles.container, `container`)}>
        <div className={clsx(styles.inner, {
          [styles.hidden]: answerType,
        })}>
          <div className={styles.content}>
            <Heading tag={`h2`} className={styles.title}>Не нашли нужный курс?</Heading>
            <Paragraph fontSize={"small"}>Расскажите, какие&nbsp;бы курсы вы&nbsp;хотели видеть на&nbsp;нашей платформе.
              Мы&nbsp;учитываем
              все запросы при формировании новых учебных программ.</Paragraph>
            <Paragraph fontSize={"small"}>Возможно уже в&nbsp;следующем месяце вы&nbsp;найдёте тот курс, о&nbsp;котором
              нам
              писали.</Paragraph>
          </div>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <Textarea
              labelName={`Ваш комментарий`}
              placeholder={`Ваш комментарий*`}
              {...register("comment", {required: {value: true, message: "Комментарий обязателен"}})}
              className={styles.textarea}
              error={errors.comment}
              isValid={validatingFields.comment}
            />
            <Input
              labelName={`Номер телефона`}
              className={styles.input}
              placeholder={`Номер телефона*`}
              {...register("contact", {
                  pattern: {
                    value: RegularExp.PHONE_REG,
                    message: `Номер телефона обязателен`,
                  },
                  required: true,
                },
              )}
              error={errors.contact}
              isValid={validatingFields.contact}
              onChange={(evt) => {
                const self = evt.currentTarget;

                const phone = formatPhoneNumber(self.value);

                if (phone.match(RegularExp.PHONE_REG) !== null) {
                  self.value = phone;
                  clearErrors("contact");
                  return;
                }

                setError("contact", {
                  type: "pattern",
                  message: "Проверьте правильность ввода телефона",
                });
              }}
            />
            <div className={styles.footer}>
              <Button type={"submit"} className={styles.submit} disabled={!isValid}>Отправить</Button>
              <Paragraph fontSize={"none"} fontWeight={"light"} className={styles.footNote}>Нажимая на&nbsp;кнопку,
                вы&nbsp;соглашаетесь
                на&nbsp;обработку <a href={`#`} target={"_blank"}>персональных данных</a></Paragraph>
            </div>
          </form>
        </div>
        {answerType && <div className={styles.answer}>
          <Heading tag={`h3`} className={styles.answerTitle}>{answerType === "error" ? <><IconError
            className={styles.icon} width="70" height="70" /> Что-то пошло не так </> : <><IconSuccess
            className={styles.icon} width="70" height="70" /> Сообщение отправлено </>}</Heading>
          <div className={styles.answerContent}>
            {answerType === "error" && <>
              <p>Проверьте, подключены&nbsp;ли вы&nbsp;к&nbsp;интернету. Если всё работает исправно, подождите минут 20
                и&nbsp;попробуйте снова. Возможно, на&nbsp;сайте случилась поломка и&nbsp;прямо сейчас
                мы&nbsp;её&nbsp;исправляем.</p>
            </>}
          </div>
        </div>}
      </div>
    </section>
  );
};

export default NotFindCourse;
