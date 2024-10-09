import React, {ReactElement} from "react";
import {PriceProps} from "./price.props";
import styles from "./price.module.css";
import Heading from "@/components/_tags/heading/heading";
import Timer from "@/components/_common/timer/timer";
import clsx from "clsx";
import TariffInfo from "@/components/_training/tariff-info/tariff-info";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import IconFire from "./fire.svg";

const Price = ({tariffs, ...props}: PriceProps): ReactElement | null => {
  return (
    <section className={styles.wrapper} {...props}>
      <div className={clsx(styles.container, `container`)}>
        <div className={styles.head}>
          <Heading tag={`h2`} className={styles.title}>Стоимость курса</Heading>
          <div className={styles.timer}>
            <Paragraph fontWeight={"medium"} fontSize={"none"} className={styles.hotText}><IconFire
              className={styles.hotIcon} width={40}
              heigth={40} />Успейте купить курс<br /> до&nbsp;повышения цены</Paragraph>
            <Timer timestampToEnd={1731118486} />
          </div>
        </div>
        {(tariffs && tariffs.length > 0) && <div className={styles.list}>
          {tariffs.map((tariff) => <TariffInfo tariff={tariff} key={tariff.id} />)}
        </div>}
      </div>
    </section>
  );
};

export default Price;
