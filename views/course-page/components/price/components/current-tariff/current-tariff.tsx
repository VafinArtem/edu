import PriceColored from "@/components/_common/price-colored/price-colored";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import React, {ReactElement} from "react";

import IconCheck from "./check.svg";
import styles from "./current-tariff.module.css";
import {CurrentTariffProps} from "./current-tariff.props";

const CurrentTariff = ({tariff}: CurrentTariffProps): ReactElement | null => {
  return (
    <div className={styles.card}>
      <IconCheck className={styles.icon} />
      <Paragraph className={styles.title} fontSize={"none"}>{tariff.name}</Paragraph>
      <PriceColored price={tariff.prices.current} oldPrice={tariff.prices.old} />
      <Paragraph className={styles.description} fontSize={"small"}
        dangerouslySetInnerHTML={{__html: tariff.description}} />
    </div>
  );
};

export default CurrentTariff;
