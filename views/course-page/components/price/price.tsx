"use client";

import React, {ReactElement, useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import dynamic from "next/dynamic";
import {PriceProps} from "./price.props";
import styles from "./price.module.css";
import Heading from "@/components/_tags/heading/heading";
import clsx from "clsx";
import TariffInfo from "@/components/_course/tariff-info/tariff-info";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import {Input} from "@/components/_form/input/input";
import Button from "@/components/_buttons/button/button";
import useOpenModal from "@/hooks/useOpenModal";
import {formatPhoneNumber} from "@/helpers/helpers";
import {RegularExp} from "@/helpers/contants";
import {orderWithTariff} from "@/actions";
import IconFire from "./fire.svg";
import IconSuccess from "./success.svg";
import IconError from "./error.svg";

const Timer = dynamic(() => import("@/components/_common/timer/timer"), {
  ssr: false,
});

const Price = ({tariffs, courseTypeName, saleTimestamp, courseId, ...props}: PriceProps): ReactElement | null => {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    reset,
    formState: {errors, isValid, validatingFields},
  } = useForm<{
    name: string
    contact: string
  }>({
    defaultValues: {
      name: ``,
      contact: ``,
    },
  });

  const onSubmit: SubmitHandler<{
    name: string
    contact: string
  }> = async (data) => {
    const res = await orderWithTariff({
      data: {...data, tariff: currentTariff, courseId},
    });

    setAnswerType(res);

    if (res === "success") {
      reset();
    }
  };

  const {ref, showModal, changeModalActivityStatus} = useOpenModal<HTMLDivElement>(() => {
    if (answerType) {
      setAnswerType(null);
    }
  });

  const [currentTariff, setCurrentTariff] = useState<number | null>(null);
  const [contactType, setContactType] = useState<"phone" | "email" | null>(null);
  const [answerType, setAnswerType] = useState<"success" | "error" | null>(null);

  return (
    <section className={styles.wrapper} {...props}>
      <div className={clsx(styles.container, `container`)}>
        <div className={styles.head}>
          <Heading tag={`h2`} className={styles.title}>Стоимость {courseTypeName.genitive}</Heading>
          {saleTimestamp && <div className={styles.timer}>
            <Paragraph fontWeight={"medium"} fontSize={"none"} className={styles.hotText}><IconFire
              className={styles.hotIcon} width={40}
              heigth={40} />Успейте купить {courseTypeName.nominative}<br /> до&nbsp;повышения цены</Paragraph>
            <Timer timestampToEnd={saleTimestamp} />
          </div>}
        </div>
        {(tariffs && tariffs.length > 0) && <div className={styles.list}>
          {tariffs.map((tariff) => <TariffInfo setCurrentTariff={setCurrentTariff}
            setShowFormStatus={changeModalActivityStatus} tariff={tariff}
            key={tariff.id} />)}
        </div>}
      </div>
      <div className={clsx(styles.modal, {
        [styles.show]: showModal,
      })} ref={ref}>
        <form action="#" className={clsx(styles.form, `container`)} onSubmit={handleSubmit(onSubmit)}>
          <Heading tag={`h3`} fontSize={"none"} className={styles.formTitle}>2. Укажите ваши данные для регистрации на
            курс</Heading>
          <div className={styles.inner}>
            <Input
              className={styles.input}
              labelName={`Ваше имя`}
              placeholder={`Ваше имя*`}
              color={"gray"}
              {...register("name", {required: {value: true, message: "Имя обязательно"}})}
              error={errors.name}
              isValid={validatingFields.name}
            />
            <Input
              className={styles.input}
              labelName={`Номер телефона или email`}
              placeholder={`Номер телефона или email*`} {...register("contact", {
                pattern: {
                  value: contactType === "phone" ? RegularExp.PHONE_REG : RegularExp.EMAIL,
                  message: `Номер телефона или email обязателен`,
                },
                required: true,
              },
            )}
              error={errors.contact}
              isValid={validatingFields.contact}
              color={"gray"}
              onChange={(evt) => {
                const self = evt.currentTarget;

                if (self.value.match(RegularExp.EMAIL) !== null) {
                  setContactType("email");
                  clearErrors("contact");
                  return;
                }

                const phone = formatPhoneNumber(self.value);

                if (phone.match(RegularExp.PHONE_REG) !== null) {
                  self.value = phone;
                  setContactType("phone");
                  clearErrors("contact");
                  return;
                }

                setContactType(null);
                setError("contact", {
                  type: "pattern",
                  message: "Проверьте правильность ввода контакта",
                });
              }}
            />
            <Button type={"submit"} className={styles.submit} disabled={!isValid}>Записаться</Button>
            <Paragraph fontSize={"small"} className={styles.footNote}>Нажимая на&nbsp;кнопку, вы&nbsp;соглашаетесь
              на&nbsp;обработку <a href={`#`} target={"_blank"}>персональных данных</a></Paragraph>
          </div>
        </form>
        {answerType && <div className={clsx(styles.answer, `container`)}>
          <Heading tag={`h3`} fontSize={"none"} className={clsx(styles.formTitle)}>{answerType === "error" ? <>Заявка не
            отправлена <IconError className={styles.icon} width="40" height="40" /></> : <>Заявка
            отправлена <IconSuccess className={styles.icon} width="40" height="40" /></>}</Heading>
          <div className={styles.answerContent}>
            {answerType === "error" && <>
              <p>Проверьте, подключены&nbsp;ли вы&nbsp;к&nbsp;интернету. Если всё работает исправно, подождите минут
                20&nbsp;и&nbsp;попробуйте снова. Возможно, на&nbsp;сайте случилась поломка и&nbsp;прямо сейчас
                мы&nbsp;её&nbsp;исправляем.</p>
              <p>Или можете не&nbsp;дожидаться починки и&nbsp;позвонить нам в&nbsp;учебный центр&nbsp;<a
                href={`tel:+79312011400`}>+7 (931) 201-14-00</a></p>
            </>}
            {answerType === "success" &&
              <p>В&nbsp;течении часа с&nbsp;вами свяжется менеджер для подтверждения заявки и&nbsp;оплаты курса.</p>}
          </div>
        </div>}
      </div>
    </section>
  );
};

export default Price;
