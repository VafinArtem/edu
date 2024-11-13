"use client";

import React, {ReactElement, useState} from "react";
import {BecomeSpeakerProps} from "./become-speaker.props";
import styles from "./become-speaker.module.css";
import clsx from "clsx";
import Heading from "@/components/_tags/heading/heading";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import {Input} from "@/components/_form/input/input";
import Button from "@/components/_buttons/button/button";
import {SubmitHandler, useForm} from "react-hook-form";
import {sendBecomeSpeaker} from "@/actions";
import IconError from "./error.svg";
import IconSuccess from "./success.svg";
import {RegularExp} from "@/helpers/contants";
import {formatPhoneNumber} from "@/helpers/helpers";

const BecomeSpeaker = ({className}: BecomeSpeakerProps): ReactElement | null => {
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

  const onSubmit: SubmitHandler<{name: string; contact: string}> = async (data) => {
    const res = await sendBecomeSpeaker({
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

  return (<section className={clsx(className, styles.wrapper, {
    [styles.success]: answerType === "success",
    [styles.error]: answerType === "error",
  })}>
    <div className={clsx(styles.container, `container`)}>
      <div className={clsx(styles.inner, {
        [styles.hidden]: answerType,
      })}>
        <div className={styles.content}>
          <Heading tag={`h2`} className={styles.title}>Стать спикером</Heading>
          <Paragraph fontSize={"small"}>Мы&nbsp;всегда готовы к&nbsp;сотрудничеству со&nbsp;специалистами в&nbsp;сфере
            медицины
            и&nbsp;косметологии.</Paragraph>
          <Paragraph fontSize={"small"}>Если вы&nbsp;хотите стать спикером в&nbsp;нашем учебном центре, оставьте свои
            контакты,
            чтобы мы&nbsp;могли связаться с&nbsp;вами.</Paragraph>
        </div>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <Input
            labelName={`Ваше имя*`}
            className={styles.input}
            placeholder={`Ваше имя`}
            {...register("name", {required: {value: true, message: "Имя обязательно"}})}
            error={errors.name}
            isValid={validatingFields.name}
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
            <Button type={"submit"} disabled={!isValid} className={styles.submit}>Отправить</Button>
            <Paragraph fontSize={"none"} fontWeight={"light"} className={styles.footNote}>Нажимая на&nbsp;кнопку,
              вы&nbsp;соглашаетесь
              на&nbsp;обработку <a href={``} target={"_blank"}>персональных данных</a></Paragraph>
          </div>
        </form>
        {answerType && <div className={styles.answer}>
          <Heading tag={`h3`} className={styles.answerTitle}>{answerType === "error" ? <> Заявка не
            отправлена <IconError
              className={styles.icon} width="60" height="60" /> </> : <> Заявка отправлена <IconSuccess
            className={styles.icon} width="60" height="60" /> </>}</Heading>
          <div className={styles.answerContent}>
            {answerType === "error" && <>
              <p>Проверьте, подключены&nbsp;ли вы&nbsp;к&nbsp;интернету. Если всё работает исправно, подождите минут 20
                и&nbsp;попробуйте снова. Возможно, на&nbsp;сайте случилась поломка и&nbsp;прямо сейчас
                мы&nbsp;её&nbsp;исправляем.</p>
              <p>Или можете не&nbsp;дожидаться починки и&nbsp;позвонить нам в&nbsp;учебный центр&nbsp;<a
                href={`tel:+79312011400`}>+7 (931) 201-14-00</a></p>
            </>}
            {answerType === "success" && <>
              <p>В&nbsp;течении часа с&nbsp;вами свяжется менеджер</p>
            </>}
          </div>
        </div>}
      </div>
    </div>
  </section>);
};

export default BecomeSpeaker;
