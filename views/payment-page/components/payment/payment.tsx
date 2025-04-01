import SectionItem from "@/components/_section/section-item/section-item";
import Heading from "@/components/_tags/heading/heading";
import Item from "@/views/payment-page/components/item/item";
import React, {ReactElement} from "react";
import styles from "./payment.module.css";
import {PaymentProps} from "./payment.props";
import IconSuitcase from "./suitcase.svg";
import IconUser from "./user.svg";

const Payment = ({}: PaymentProps): ReactElement | null => {
  return (
    <SectionItem className={"container"} id={`payment`}>
      <Heading tag={"h2"} className={styles.title}>Способы оплаты</Heading>

      <div className={styles.inner}>
        <Item title={"Для физических лиц"} icon={<IconUser />}>
          <ul className={styles.list}>
            <li className={styles.item}>Наличными</li>
            <li className={styles.item}>С&nbsp;помощью банковского перевода по&nbsp;счёту, выставленному компанией</li>
          </ul>
        </Item>
        <Item title={"Для юридических лиц"} icon={<IconSuitcase />}>
          <ul className={styles.list}>
            <li className={styles.item}>С&nbsp;помощью банковского перевода по&nbsp;счёту, выставленному компанией</li>
          </ul>
        </Item>
      </div>
    </SectionItem>
  );
};

export default Payment;
