import Button from "@/components/_buttons/button/button";
import PriceColored from "@/components/_common/price-colored/price-colored";
import Heading from "@/components/_tags/heading/heading";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import {sendMetric} from "@/helpers/metricks";
import clsx from "clsx";
import React, {ReactElement} from "react";
import styles from "./tariff-info.module.css";
import {TariffInfoProps} from "./tariff-info.props";

const TariffInfo = ({tariff, setShowFormStatus, setCurrentTariff, className}: TariffInfoProps): ReactElement | null => {
  const {name, prices, description, includes, id} = tariff;

  return (
    <article className={clsx(styles.wrapper, className)}>
      <div className={styles.inner}>
        <Heading tag={`h3`} fontSize={"none"} className={styles.title}>{name}</Heading>
        <PriceColored className={styles.price} price={prices.current} oldPrice={prices.old} />
        <Paragraph fontSize={"none"} className={styles.desc}
          dangerouslySetInnerHTML={{__html: description}}></Paragraph>
        <Button type={"button"} className={styles.record} onClick={() => {
          sendMetric(`reachGoal`, {options: `course-record-click`});

          if (setShowFormStatus) {
            setShowFormStatus(true);
          }

          if (setCurrentTariff) {
            setCurrentTariff(id);
          }
        }}>Записаться</Button>
      </div>
      {(includes && includes.length > 0) && <ul className={styles.list}>
        {includes.map((item, index) => (<li className={styles.include} key={index}>{item}</li>))}
      </ul>}
    </article>
  );
};

export default TariffInfo;
