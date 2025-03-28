import {orderPromoCertificate} from "@/actions";
import Button from "@/components/_buttons/button/button";
import {Input} from "@/components/_form/input/input";
import ModalWrapper from "@/components/_modal/modal-wrapper/modal-wrapper";
import Heading from "@/components/_tags/heading/heading";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import {RegularExp} from "@/helpers/contants";
import {formatPhoneNumber} from "@/helpers/helpers";
import {sendEcommerce, sendMetric} from "@/helpers/metricks";
import {Route} from "@/helpers/route";
import useOpenModal from "@/hooks/useOpenModal";
import clsx from "clsx";
import Link from "next/link";
import React, {ReactElement, useEffect, useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import IconError from "./error.svg";
import styles from "./order-modal.module.css";
import {OrderModalProps} from "./order-modal.props";
import IconSuccess from "./success.svg";

const OrderModal = ({setCurrentCertificate, currentCertificate}: OrderModalProps): ReactElement | null => {
  const {ref, changeModalActivityStatus, showModal} = useOpenModal<HTMLDivElement>(() => {
    if (answerType) {
      setAnswerType(null);
      setCurrentCertificate(null);
    }
  });

  const [isSending, setIsSending] = useState<boolean>(false);
  const [answerType, setAnswerType] = useState<"success" | "error" | null>(null);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "initial";
    }
  }, [showModal]);

  useEffect(() => {
    if (!currentCertificate) return;

    changeModalActivityStatus(true);
  }, [currentCertificate]);

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    reset,
    formState: {errors, isValid, validatingFields},
  } = useForm<{
    name: string;
    email: string;
    phone: string;
    promoCode: string;
  }>({
    defaultValues: {
      name: ``,
      email: ``,
      phone: ``,
      promoCode: ``,
    },
  });

  const onSubmit: SubmitHandler<{
    name: string;
    email: string;
    phone: string;
    promoCode: string;
  }> = async (data) => {
    if (isSending) return;

    setIsSending(true);

    const res = await orderPromoCertificate({
      data: {...data, certificate: currentCertificate},
    });

    setAnswerType(res);

    if (res === "success") {
      sendMetric(`reachGoal`, {options: `certificate-record-send`});
      sendEcommerce({
        actionType: "purchase",
        actionField: {
          id: `${currentCertificate?.id}`,
        },
        products: [
          {
            id: `${currentCertificate?.id}`,
            name: currentCertificate?.name ?? ``,
            price: currentCertificate?.price,
          },
        ],
      });

      reset();
    }

    setIsSending(false);
  };

  return (
    <>
      {showModal && <ModalWrapper showModal={showModal} setShowModal={changeModalActivityStatus} ref={ref}>
        <div className={styles.wrapper}>
          {!answerType && <form
            className={clsx(styles.form)}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Heading tag={`h3`} fontSize={"mini"} className={styles.formTitle}>Оформление заказа</Heading>
            <div className={styles.inner}>
              <Input
                inputSize={"small"}
                className={styles.input}
                labelName={`Ваше имя`}
                placeholder={`Имя`}
                color={"gray"}
                {...register("name", {required: {value: true, message: "Имя обязательно"}})}
                error={errors.name}
                isValid={validatingFields.name}
              />
              <Input
                inputSize={"small"}
                className={styles.input}
                labelName={`Ваш email`}
                placeholder={`Email`}
                color={"gray"}
                {...register("email", {
                  pattern: {
                    value: RegularExp.EMAIL,
                    message: `Email обязателен`,
                  },
                  required: true,
                })}
                error={errors.email}
                isValid={validatingFields.email}
              />
              <Input
                inputSize={"small"}
                className={styles.input}
                labelName={`Номер телефона`}
                placeholder={`Номер телефона*`}
                {...register("phone", {
                    pattern: {
                      value: RegularExp.PHONE_REG,
                      message: `Номер телефона обязателен`,
                    },
                    required: true,
                  },
                )}
                error={errors.phone}
                isValid={validatingFields.phone}
                color={"gray"}
                onInput={(evt) => {
                  const self = evt.currentTarget;

                  const phone = formatPhoneNumber(self.value);

                  if (phone.match(RegularExp.PHONE_REG) !== null) {
                    self.value = phone;
                    clearErrors("phone");
                    return;
                  }

                  setError("phone", {
                    type: "pattern",
                    message: "Проверьте правильность ввода телефона",
                  });
                }}
              />
              <Input
                inputSize={"small"}
                className={styles.input}
                labelName={`Промокод`}
                placeholder={`Промокод`}
                color={"gray"}
                {...register("promoCode")}
              />
            </div>
            <div className={styles.footer}>
              <Button
                type={"submit"}
                className={styles.submit}
                isDisabled={!isValid}
                size={"small"}
              >
                Оформить заказ
              </Button>
              <Paragraph fontSize={"small"} className={styles.footNote}>Нажимая на&nbsp;кнопку, вы&nbsp;соглашаетесь
                на&nbsp;обработку <a href={`/pdf/personal_data_processing_policy_1.pdf`} target={"_blank"}>персональных
                  данных</a></Paragraph>
            </div>
          </form>}
          {answerType && <div className={clsx(styles.answer)}>
            <Heading tag={`h3`} fontSize={"mini"} align={"center"}
              className={clsx(styles.formTitle)}>{answerType === "error" ? <>
              <IconError className={styles.icon} width="30" height="30" /> Проблема с заказом</> : <><IconSuccess
              className={styles.icon} width="30" height="30" /> Заказ оформлен </>}</Heading>
            <div className={styles.answerContent}>
              {answerType === "error" && <>
                <p>Проверьте, подключены&nbsp;ли вы&nbsp;к&nbsp;интернету. Если всё работает исправно, отправьте форму
                  ещё
                  раз через 5&nbsp;минут. Или позвоните нам в&nbsp;учебный центр&nbsp;<a href="tel:+79312011400">+7
                    (931) 201-14-00</a></p>
              </>}
              {answerType === "success" &&
                <p>Менеджер учебного центра свяжется с&nbsp;вами в&nbsp;ближайшее время.</p>}
            </div>
            {answerType === "success" &&
              <Button component={Link} className={styles.submit} size={"small"} href={Route.MAIN}>На главную</Button>}
          </div>}
        </div>
      </ModalWrapper>}
    </>
  );
};

export default OrderModal;
