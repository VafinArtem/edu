"use client";

import {orderWithTariff} from "@/actions";
import Button from "@/components/_buttons/button/button";
import Price from "@/components/_common/price/price";
import {Input} from "@/components/_form/input/input";
import Heading from "@/components/_tags/heading/heading";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import {RegularExp} from "@/helpers/contants";
import {formatPhoneNumber} from "@/helpers/helpers";
import clsx from "clsx";
import dynamic from "next/dynamic";
import React, {ReactElement, useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import IconError from "./error.svg";
import styles from "./record-form.module.css";
import {RecordFormProps} from "./record-form.props";
import IconSuccess from "./success.svg";

const Timer = dynamic(() => import("@/components/_common/timer/timer"), {
  ssr: false,
});

const RecordForm = ({tariffInfo, saleTimestamp, courseId, courseTypeName}: RecordFormProps): ReactElement | null => {
  const [contactType, setContactType] = useState<"phone" | "email" | null>(null);
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
    name: string
    contact: string
  }> = async (data) => {
    const res = await orderWithTariff({
      data: {...data, tariff: tariffInfo.id, courseId},
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
    <section className={clsx(styles.wrapper, {
      [styles.success]: answerType === "success",
      [styles.error]: answerType === "error",
    })} id={`registration`}>
      <div className={clsx(styles.textContent, {
        [styles.hidden]: answerType,
      })}>
        <Heading tag={`h2`} fontSize={`mid`} className={styles.title}>Успейте записаться по&nbsp;минимальной
          стоимости</Heading>
        <Paragraph className={styles.text} fontWeight={`light`}>По&nbsp;мере приближения обучения, стоимость будет
          увеличиваться.</Paragraph>
        <div className={styles.footer}>
          <Price oldPrice={tariffInfo.old} price={tariffInfo.current} />
          {saleTimestamp && <Timer timestampToEnd={saleTimestamp} text={`До повышения стоимости`}
            withoutTextOptions={{laptop: true, tablet: true, mobile: true}} />}
        </div>
      </div>
      <form className={clsx(styles.form, {
        [styles.hidden]: answerType,
      })} onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder={`Ваше имя*`}
          labelName={`Ваше имя`}
          {...register("name", {required: {value: true, message: "Имя обязательно"}})}
          error={errors.name}
          isValid={validatingFields.name}
        />
        <Input
          placeholder={`Номер телефона или email*`}
          labelName={`Номер телефона или email`}
          {...register("contact", {
              pattern: {
                value: contactType === "phone" ? RegularExp.PHONE_REG : RegularExp.EMAIL,
                message: `Номер телефона или email обязателен`,
              },
              required: true,
            },
          )}
          error={errors.contact}
          isValid={validatingFields.contact}
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
        <div className={styles.formFooter}>
          <Button className={styles.submit} disabled={!isValid}>
            Записаться <span className="only-mobile">на {courseTypeName}</span>
          </Button>
          <p className={styles.footNote}>Нажимая на&nbsp;кнопку, вы&nbsp;соглашаетесь на&nbsp;обработку <a
            target={`_blank`} href={`#`}>персональных данных</a></p>
        </div>
      </form>
      {answerType && <div className={styles.answer}>
        <Heading tag={`h3`} fontSize={`mid`} className={styles.answerTitle}>{answerType === "error" ? <>Заявка не
          отправлена <IconError className={styles.icon} width="50" height="50" /></> : <>Заявка
          отправлена <IconSuccess className={styles.icon} width="50" height="50" /></>}</Heading>
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
    </section>
  );
};

export default RecordForm;
