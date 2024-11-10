"use client";

import React, {ReactElement, useState} from "react";
import {PriceProps} from "./price.props";
import styles from "./price.module.css";
import Heading from "@/components/_tags/heading/heading";
import clsx from "clsx";
import TariffInfo from "@/components/_course/tariff-info/tariff-info";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import IconFire from "./fire.svg";
import dynamic from "next/dynamic";
import {Input} from "@/components/_form/input/input";
import Button from "@/components/_buttons/button/button";
import useOpenModal from "@/hooks/useOpenModal";

const Timer = dynamic(() => import("@/components/_common/timer/timer"), {
  ssr: false,
});

const Price = ({tariffs, courseTypeName, saleTimestamp, ...props}: PriceProps): ReactElement | null => {
  const {ref, showModal, changeModalActivityStatus} = useOpenModal<HTMLDivElement>();
  const [currentTariff, setCurrentTariff] = useState<number | null>(null);

  // useEffect(() => {
  //   const onWrapperTransitionend = () => {
  //     innerRef.current.style.transform = `translateY(0)`;
  //   };
  //
  //   const onInnerTransitionend = () => {
  //     setShowModal(false);
  //     wrapperRef.current.style.opacity = `0`;
  //   };
  //
  //   if (!isMobile) return;
  //
  //   if (showMobileFilters) {
  //     setShowModal(true);
  //
  //     document.body.style.overflow = "hidden";
  //     wrapperRef.current.addEventListener(`transitionend`, onWrapperTransitionend, {once: true});
  //
  //     setTimeout(() => {
  //       wrapperRef.current.style.opacity = `1`;
  //     }, 0);
  //   } else {
  //     document.body.style.overflow = "initial";
  //     innerRef.current.addEventListener(`transitionend`, onInnerTransitionend, {once: true});
  //
  //     setTimeout(() => {
  //       innerRef.current.style.transform = `translateY(100%)`;
  //     }, 0);
  //   }
  //
  //   return () => {
  //     wrapperRef.current.removeEventListener(`transitionend`, onWrapperTransitionend);
  //     innerRef.current.removeEventListener(`transitionend`, onInnerTransitionend);
  //   };
  // }, [showMobileFilters]);

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
          {tariffs.map((tariff) => <TariffInfo setShowFormStatus={changeModalActivityStatus} tariff={tariff}
            key={tariff.id} />)}
        </div>}
      </div>
      <div className={clsx(styles.modal, {
        [styles.show]: showModal,
      })} ref={ref}>
        <form action="#" className={clsx(styles.form, `container`)}>
          <Heading tag={`h3`} fontSize={"none"} className={styles.formTitle}>2. Укажите ваши данные для регистрации на
            курс</Heading>
          <div className={styles.inner}>
            <Input className={styles.input} labelName={`Ваше имя`} placeholder={`Ваше имя*`} name={`name`}
              color={"gray"} />
            <Input className={styles.input} labelName={`Номер телефона или email`}
              placeholder={`Номер телефона или email*`} name={`contact`}
              color={"gray"} />
            <Button type={"submit"} className={styles.submit} disabled={true}>Записаться</Button>
            <Paragraph fontSize={"small"} className={styles.footNote}>Нажимая на&nbsp;кнопку, вы&nbsp;соглашаетесь
              на&nbsp;обработку <a href={`#`} target={"_blank"}>персональных данных</a></Paragraph>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Price;
