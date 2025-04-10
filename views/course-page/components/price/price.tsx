"use client";

import {orderWithTariff} from "@/actions";
import Button from "@/components/_buttons/button/button";
import CloseButton from "@/components/_buttons/close-button/close-button";
import TariffInfo from "@/components/_course/tariff-info/tariff-info";
import {Input} from "@/components/_form/input/input";
import Heading from "@/components/_tags/heading/heading";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import {RegularExp} from "@/helpers/contants";
import {formatPhoneNumber} from "@/helpers/helpers";
import {sendEcommerce, sendMetric} from "@/helpers/metricks";
import useOpenModal from "@/hooks/useOpenModal";
import {TariffInfo as ITariffInfo} from "@/interfaces/course";
import CurrentTariff from "@/views/course-page/components/price/components/current-tariff/current-tariff";
import clsx from "clsx";
import dynamic from "next/dynamic";
import React, {ReactElement, useEffect, useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import IconError from "./error.svg";
import IconFire from "./fire.svg";
import styles from "./price.module.css";
import {PriceProps} from "./price.props";
import IconSuccess from "./success.svg";

const Timer = dynamic(() => import("@/components/_common/timer/timer"), {
  ssr: false,
});

const Price = ({
  tariffs,
  courseTypeName,
  saleTimestamp,
  courseId,
  ecommerce,
  ...props
}: PriceProps): ReactElement | null => {
  const [isSending, setIsSending] = useState<boolean>(false);
  const [currentTariffId, setCurrentTariffId] = useState<number | null>(null);
  const [currentTariff, setCurrentTariff] = useState<ITariffInfo | null>(null);
  const [answerType, setAnswerType] = useState<"success" | "error" | null>(null);

  const {ref, showModal, changeModalActivityStatus} = useOpenModal<HTMLDivElement>(() => {
    if (answerType) {
      setAnswerType(null);
    }
  });

  useEffect(() => {
    if (!currentTariffId) {
      setCurrentTariff(null);
    }

    setCurrentTariff(tariffs.find((el) => el.id === currentTariffId) ?? null);

  }, [currentTariffId, tariffs]);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "initial";
    }
  }, [showModal]);

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

  const onChange = () => {
    sendMetric(`reachGoal`, {options: `course-record-change`});
  };

  const onSubmit: SubmitHandler<{
    name: string
    contact: string
  }> = async (data) => {
    if (isSending) return;

    setIsSending(true);

    const res = await orderWithTariff({
      data: {...data, tariff: currentTariffId, courseId, orderId: ecommerce.id},
    });

    setAnswerType(res);

    if (res === "success") {
      sendMetric(`reachGoal`, {options: `course-record-send`});
      sendEcommerce({
        actionType: "purchase",
        actionField: {
          id: ecommerce.id,
        },
        products: [
          {
            id: `${courseId}`,
            name: ecommerce.name,
            category: ecommerce.category,
            price: tariffs.find((el) => el.id === currentTariffId)?.prices.current,
            variant: tariffs.find((el) => el.id === currentTariffId)?.name,
          },
        ],
      });
      reset();
    }

    setIsSending(false);
  };

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
          {tariffs.map((tariff) => <TariffInfo
            className={styles.item}
            setCurrentTariff={setCurrentTariffId}
            setShowFormStatus={changeModalActivityStatus}
            tariff={tariff}
            key={tariff.id}
          />)}
        </div>}
      </div>
      {showModal && <div className={clsx(styles.modal, {
        [styles.show]: showModal,
      })}>
        <div className={styles.card} ref={ref}>
          <CloseButton className={styles.close} onClick={() => {
            changeModalActivityStatus(false);
          }} />
          <div className={styles.scroll}>
            <form
              className={clsx(styles.form)}
              onChange={onChange}
              onSubmit={handleSubmit(onSubmit)}
            >
              <Heading tag={`h3`} fontSize={"mini"} className={styles.formTitle}>Укажите ваши данные для регистрации на
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
                  color={"gray"}
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
              </div>
              {currentTariff && <CurrentTariff tariff={currentTariff} />}
              <div className={styles.footer}>
                <Button type={"submit"} className={styles.submit} isDisabled={!isValid}>Записаться</Button>
                <Paragraph fontSize={"small"} className={styles.footNote}>Нажимая на&nbsp;кнопку, вы&nbsp;соглашаетесь
                  на&nbsp;обработку <a href={`/pdf/personal_data_processing_policy_1.pdf`} target={"_blank"}>персональных
                    данных</a></Paragraph>
              </div>
            </form>
            {answerType && <div className={clsx(styles.answer)}>
              <Heading tag={`h3`} fontSize={"mini"} align={"center"}
                className={clsx(styles.formTitle)}>{answerType === "error" ? <>
                <IconError className={styles.icon} width="60" height="60" /> Заявка
                не
                отправлена</> : <><IconSuccess className={styles.icon} width="60" height="60" /> Заявка
                отправлена </>}</Heading>
              <div className={styles.answerContent}>
                {answerType === "error" && <>
                  <p>Проверьте, подключены&nbsp;ли вы&nbsp;к&nbsp;интернету. Если всё работает исправно, отправьте форму
                    ещё
                    раз через 5&nbsp;минут. Или позвоните нам в&nbsp;учебный центр&nbsp;<a href="tel:+79312011400">+7
                      (931)
                      201-14-00</a></p>
                </>}
                {answerType === "success" &&
                  <p>В&nbsp;течении часа с&nbsp;вами свяжется менеджер для подтверждения
                    заявки{currentTariff?.prices.current ? ` и&nbsp;оплаты
                  курса` : ``}.</p>}
              </div>
            </div>}
          </div>
        </div>
      </div>}
    </section>
  );
};

export default Price;
