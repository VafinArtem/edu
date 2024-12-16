"use client";

import {sendComment} from "@/actions";
import Button from "@/components/_buttons/button/button";
import {Input} from "@/components/_form/input/input";
import {Textarea} from "@/components/_form/textarea/textarea";
import Heading from "@/components/_tags/heading/heading";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import {RegularExp} from "@/helpers/contants";
import {formatPhoneNumber} from "@/helpers/helpers";
import clsx from "clsx";
import React, {ReactElement, useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import IconError from "./error.svg";
import styles from "./not-find-course.module.css";
import {NotFindCourseProps} from "./not-find-course.props";
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
            <Paragraph fontSize={"small"} fontWeight={"light"}>Расскажите, какие&nbsp;бы курсы вы&nbsp;хотели видеть
              на&nbsp;нашей платформе.
              Мы&nbsp;учитываем
              все запросы при формировании новых учебных программ.</Paragraph>
            <Paragraph fontSize={"small"} fontWeight={"light"}>Возможно уже в&nbsp;следующем месяце вы&nbsp;найдёте тот
              курс, о&nbsp;котором нам писали.</Paragraph>
          </div>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <Textarea
              labelName={`Какой курс вы ищите`}
              placeholder={`Какой курс вы ищите*`}
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
                на&nbsp;обработку <a href={`/pdf/personal_data_processing_policy.pdf`} target={"_blank"}>персональных
                  данных</a></Paragraph>
            </div>
          </form>
        </div>
        {answerType && <div className={styles.answer}>
          <Heading tag={`h3`} className={styles.answerTitle}>{answerType === "error" ? <><IconError
            className={styles.icon} width="70" height="70" /> Что-то пошло не так </> : <><IconSuccess
            className={styles.icon} width="70" height="70" /> Сообщение отправлено </>}</Heading>
          <div className={styles.answerContent}>
            {answerType === "error" && <>
              <p>Проверьте, подключены&nbsp;ли вы&nbsp;к&nbsp;интернету. Если всё работает исправно, отправьте форму ещё
                раз через 5&nbsp;минут. Или позвоните нам в&nbsp;учебный центр&nbsp;<a href="tel:+79312011400">+7 (931)
                  201-14-00</a></p>
            </>}
          </div>
        </div>}
      </div>
    </section>
  );
};

export default NotFindCourse;
