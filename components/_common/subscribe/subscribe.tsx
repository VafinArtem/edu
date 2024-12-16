"use client";

import {promoRegistration} from "@/actions";
import Button from "@/components/_buttons/button/button";
import {Input} from "@/components/_form/input/input";
import Heading from "@/components/_tags/heading/heading";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import {RegularExp} from "@/helpers/contants";
import clsx from "clsx";
import React, {ReactElement, useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import IconError from "./error.svg";
import styles from "./subscribe.module.css";
import {SubscribeProps} from "./subscribe.props";
import IconSuccess from "./success.svg";

const Subscribe = ({className}: SubscribeProps): ReactElement | null => {
  const [answerType, setAnswerType] = useState<"success" | "error" | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: {errors, isValid, validatingFields},
  } = useForm<{contact: string}>({
    defaultValues: {
      contact: ``,
    },
  });

  const onSubmit: SubmitHandler<{
    contact: string
  }> = async (data) => {
    const res = await promoRegistration({
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
      <h2 className="visually-hidden">Подписка на новости</h2>
      <div className={clsx(styles.content, {
        [styles.hidden]: answerType,
      })}>
        <Paragraph fontSize={"none"} className={styles.text}>Подписывайтесь на&nbsp;новостную рассылку
          и&nbsp;узнавайте о&nbsp;предстоящих курсах первым</Paragraph>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <Input
            labelName={`Ваша почта`}
            className={styles.inputWrapper}
            inputClassName={styles.input}
            placeholder={`Ваша почта`}
            {...register("contact", {
                pattern: {
                  value: RegularExp.EMAIL,
                  message: `E-mail обязателен`,
                },
                required: true,
              },
            )}
            error={errors.contact}
            isValid={validatingFields.contact}
          />
          <Button type={"submit"} isDisabled={!isValid} className={styles.submit}>Подписаться</Button>
          <Paragraph fontSize={"none"} className={styles.footNote}>Нажимая на&nbsp;кнопку, вы&nbsp;соглашаетесь
            на&nbsp;обработку <a href={`/pdf/personal_data_processing_policy.pdf`} target={"_blank"}>персональных
              данных</a></Paragraph>
        </form>
      </div>
      {answerType && <div className={styles.answer}>
        <Heading tag={`h3`} fontSize={`none`} className={styles.answerTitle}>{answerType === "error" ? <><IconError
          className={styles.icon} width="50" height="50" /> Что-то пошло не так </> : <><IconSuccess
          className={styles.icon} width="50" height="50" /> Вы подписались на новости
          центра </>}</Heading>
        <div className={styles.answerContent}>
          {answerType === "error" && <>
            <p>Проверьте, подключены&nbsp;ли вы&nbsp;к&nbsp;интернету. Если всё работает исправно, подождите минут 20
              и&nbsp;попробуйте снова. Возможно, на&nbsp;сайте случилась поломка и&nbsp;прямо сейчас
              мы&nbsp;её&nbsp;исправляем.</p>
          </>}
          {answerType === "success" &&
            <p>Будем держать в&nbsp;курсе новый курсов, скидок и&nbsp;интересных мероприятий</p>}
        </div>
      </div>}
    </section>
  );
};

export default Subscribe;
