import React, {ReactElement} from "react";
import {PaymentProps} from "./payment.props";
import styles from "./payment.module.css";
import clsx from "clsx";
import Heading from "@/components/_tags/heading/heading";
import IconMir from "./mir.svg";
import IconVisa from "./visa.svg";
import IconMasterCard from "./mastercard.svg";
import IconDolyamy from "./dolyame.svg";
import Paragraph from "@/components/_tags/paragraph/paragraph";

const Payment = ({className}: PaymentProps): ReactElement | null => {

  return (
    <section className={clsx(className, styles.wrapper)}>
      <Heading tag={`h2`} className={`visually-hidden`}>Способы оплаты</Heading>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Paragraph className={`visually-hidden`}>Мир</Paragraph>
          <IconMir className={styles.icon} width={55} height={32} />
        </li>
        <li className={styles.item}>
          <Paragraph className={`visually-hidden`}>Visa</Paragraph>
          <IconVisa className={styles.icon} width={55} height={32} />
        </li>
        <li className={styles.item}>
          <Paragraph className={`visually-hidden`}>Master Card</Paragraph>
          <IconMasterCard className={styles.icon} width={55} height={32} />
        </li>
        <li className={styles.item}>
          <Paragraph className={`visually-hidden`}>Долями</Paragraph>
          <IconDolyamy className={styles.icon} width={108} height={32} />
        </li>
      </ul>
    </section>
  );
};

export default Payment;
