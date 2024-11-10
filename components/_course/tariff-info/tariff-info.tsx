import React, {ReactElement} from "react";
import {TariffInfoProps} from "./tariff-info.props";
import styles from "./tariff-info.module.css";
import Heading from "@/components/_tags/heading/heading";
import PriceColored from "@/components/_common/price-colored/price-colored";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import Button from "@/components/_buttons/button/button";

const TariffInfo = ({tariff, setShowFormStatus, setCurrentTariff}: TariffInfoProps): ReactElement | null => {
  const {name, prices, description, includes, id} = tariff;

  return (
    <article className={styles.wrapper}>
      <div className={styles.inner}>
        <Heading tag={`h3`} fontSize={"none"} className={styles.title}>{name}</Heading>
        <PriceColored className={styles.price} price={prices.current} oldPrice={prices.old} />
        <Paragraph fontSize={"none"} className={styles.desc}
          dangerouslySetInnerHTML={{__html: description}}></Paragraph>
        <Button type={"button"} className={styles.record} onClick={() => {
          if (setShowFormStatus) {
            setShowFormStatus(true);
          }

          if (setCurrentTariff) {
            setCurrentTariff(id);
          }
        }}>Записаться</Button>
      </div>
      {includes && <ul className={styles.list}>
        {includes.map((item, index) => (<li className={styles.include} key={index}>{item}</li>))}
      </ul>}
    </article>
  );
};

export default TariffInfo;
