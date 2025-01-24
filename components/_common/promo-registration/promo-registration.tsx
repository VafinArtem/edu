"use client";

import {promoRegistration} from "@/actions";
import Button from "@/components/_buttons/button/button";
import {Input} from "@/components/_form/input/input";
import Heading from "@/components/_tags/heading/heading";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import {RegularExp} from "@/helpers/contants";
import {formatPhoneNumber} from "@/helpers/helpers";
import clsx from "clsx";
import React, {ReactElement, useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import IconError from "./error.svg";
import styles from "./promo-registration.module.css";
import {PromoRegistrationProps} from "./promo-registration.props";
import IconSuccess from "./success.svg";

const PromoRegistration = ({className}: PromoRegistrationProps): ReactElement | null => {
  const [answerType, setAnswerType] = useState<"success" | "error" | null>(null);
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    reset,
    formState: {errors, isValid, validatingFields},
  } = useForm<{name: string; contact: string}>({
    defaultValues: {
      name: ``,
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
      <h2 className="visually-hidden">Специальное предложение</h2>
      <div className={clsx(styles.content, {
        [styles.hidden]: answerType,
      })}>
        <Paragraph fontSize={"none"} className={styles.text}>Присоединяйтесь к&nbsp;обучающей платформе
          Amrita и&nbsp;получите
          1000&nbsp;₽ на&nbsp;бонусный
          счёт</Paragraph>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <Input
            labelName={`Телефон`}
            className={styles.inputWrapper}
            inputClassName={styles.input}
            placeholder={`Телефон`}
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
          <Button type={"submit"} isDisabled={!isValid} className={styles.submit}>Зарегистрироваться</Button>
          <Paragraph fontSize={"none"} className={styles.footNote}>Нажимая на&nbsp;кнопку, вы&nbsp;соглашаетесь
            на&nbsp;обработку <a href={`/pdf/personal_data_processing_policy_1.pdf`} target={"_blank"}>персональных
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

export default PromoRegistration;
