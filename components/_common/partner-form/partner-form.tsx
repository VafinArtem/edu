"use client";

import {sendBecomePartner} from "@/actions";
import Button from "@/components/_buttons/button/button";
import CustomSelect from "@/components/_form/custom-select/custom-select";
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
import styles from "./partner-form.module.css";
import {PartnerFormProps} from "./partner-form.props";
import IconSuccess from "./success.svg";

const PartnerForm = ({className}: PartnerFormProps): ReactElement | null => {
  const [answerType, setAnswerType] = useState<"success" | "error" | null>(null);
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    setValue,
    reset,
    formState: {errors, isValid, validatingFields},
  } = useForm<{comment: string; contact: string, city: string, partnershipType: string}>({
    defaultValues: {
      comment: ``,
      contact: ``,
      city: ``,
      partnershipType: ``,
    },
  });

  const onSubmit: SubmitHandler<{
    comment: string;
    contact: string,
    city: string,
    partnershipType: string
  }> = async (data) => {
    console.log(data);

    const res = await sendBecomePartner({
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
            <Heading tag={`h2`} className={styles.title}>Давайте работать вместе с&nbsp;Amrita</Heading>
            <Paragraph fontSize={"small"} className={styles.text}>Мы&nbsp;открыты к&nbsp;новым идеям
              и&nbsp;сотрудничеству. Чтобы обратиться в&nbsp;центр, заполните форму.</Paragraph>
          </div>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <CustomSelect
              className={styles.select}
              labelName={"Выберите вариант сотрудничества"}
              initialAllValueText={"Выберите вариант сотрудничества"}
              {...register("partnershipType", {required: {value: true, message: "Тип партнёрства обязателен"}})}
              error={errors.partnershipType}
              clickCb={(values) => {
                const value = values.toString();
                setValue(`partnershipType`, value, {shouldValidate: true});
              }}
              options={[
                {
                  name: "Ученик или участник",
                  value: "1",
                },
                {
                  name: "Компания",
                  value: "2",
                },
                {
                  name: "Преподаватель",
                  value: "3",
                },
                {
                  name: "Организация-партнёр",
                  value: "4",
                },
              ]}
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
            <Input
              placeholder={`Город*`}
              labelName={`Город`}
              {...register("city", {required: {value: true, message: "Город обязателен"}})}
              error={errors.city}
              isValid={validatingFields.city}
            />
            <Textarea
              labelName={`Предложение по сотрудничеству`}
              placeholder={`Опишите ваше предложение по сотрудничеству`}
              {...register("comment")}
              className={styles.textarea}
            />
            <div className={styles.footer}>
              <Button type={"submit"} color={"primary-2"} className={styles.submit}
                isDisabled={!isValid}>Оставить заявку</Button>
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

export default PartnerForm;
