"use client";

import Button from "@/components/_buttons/button/button";
import {FileInput} from "@/components/_form/file-input/file-input";
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
import styles from "./review-form.module.css";
import {ReviewFormProps} from "./review-form.props";
import IconSuccess from "./success.svg";

const ReviewForm = ({className}: ReviewFormProps): ReactElement | null => {
  const [answerType, setAnswerType] = useState<"success" | "error" | null>(null);
  const [isSending, setIsSending] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    setValue,
    reset,
    formState: {errors, isValid, validatingFields},
  } = useForm<{
    review: string;
    contact: string;
    name: string;
    specialization: string;
    avatar: File | null;
  }>({
    defaultValues: {
      review: ``,
      contact: ``,
      name: ``,
      specialization: ``,
      avatar: null,
    },
  });

  const onSubmit: SubmitHandler<{
    review: string;
    contact: string,
    name: string;
    specialization: string;
    avatar: File | null;
  }> = async (data) => {
    console.log(data);
    // if (isSending) return;
    //
    // setIsSending(true);
    //
    // const res = await sendBecomePartner({
    //   data,
    // });
    //
    // setAnswerType(res);
    //
    // if (res === "success") {
    //   reset();
    // }
    //
    // if (res === "error") {
    //   setTimeout(() => {
    //     setAnswerType(null);
    //   }, 2000);
    // }
    //
    // setIsSending(false);
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
            <Heading tag={`h2`} className={styles.title}>Поделитесь своим отзывом</Heading>
            <Paragraph fontSize={"small"} className={styles.text}>Нам важно ваше мнение. Поделитесь своими впечатлениями
              о&nbsp;нашем обучении&nbsp;&mdash; это поможет нам становиться лучше.</Paragraph>
          </div>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <Input
              placeholder={`Ваше имя*`}
              labelName={`Ваше имя`}
              {...register("name", {required: {value: true, message: "Имя обязательно"}})}
              error={errors.name}
              isValid={validatingFields.name}
            />
            <Input
              labelName={`Номер телефона`}
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
            <Input
              className={styles.input}
              placeholder={`Специализация`}
              labelName={`Ваша специализация`}
              {...register("specialization")}
              error={errors.specialization}
              isValid={validatingFields.specialization}
            />
            <Textarea
              labelName={`Ваш отзыв`}
              placeholder={`Опишите, что вам понравилось и что можно улучшить*`}
              {...register("review", {required: {value: true, message: "Отзыв обязателен"}})}
              className={styles.textarea}
              error={errors.review}
              isValid={validatingFields.review}
            />
            <FileInput
              className={styles.input}
              labelName={`Вы можете прикрепить к отзыву свою фотографию`}
              {...register("avatar")}
            />
            <div className={styles.footer}>
              <Button type={"submit"} color={"primary"} className={styles.submit}
                isDisabled={!isValid}>Оставить отзыв</Button>
              <Paragraph fontSize={"none"} fontWeight={"light"} className={styles.footNote}>Нажимая на&nbsp;кнопку,
                вы&nbsp;соглашаетесь
                на&nbsp;обработку <a href={`/pdf/personal_data_processing_policy_1.pdf`} target={"_blank"}>персональных
                  данных</a></Paragraph>
            </div>
          </form>
        </div>
        {answerType && <div className={styles.answer}>
          <Heading tag={`h3`} className={styles.answerTitle}>{answerType === "error" ? <><IconError
            className={styles.icon} width="70" height="70" /> Что-то пошло не так </> : <><IconSuccess
            className={styles.icon} width="70" height="70" /> Сообщение отправлено </>}</Heading>
          <div className={styles.answerContent}>
            {answerType === "success" && <>
              <p>В&nbsp;ближайшее время, наш менеджер свяжется с&nbsp;вами по&nbsp;указанному телефону.</p>
            </>}
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

export default ReviewForm;
