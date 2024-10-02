import React, {ReactElement} from "react";
import {PriceProps} from "./price.props";
import styles from "./price.module.css";
import clsx from "clsx";
import {formatPrice} from "@/helpers/helpers";

const Price = ({price, oldPrice, className}: PriceProps): ReactElement | null => {
  return (
    <p className={clsx(styles.wrapper, className)}>
      <span className="visually-hidden">Текущая цена</span>
      {formatPrice(price)}&nbsp;₽
      {oldPrice && <>
        <span className="visually-hidden">Цена без скидки</span>
        <span className={styles.old}>
          {formatPrice(oldPrice)}&nbsp;₽
        </span>
      </>}
    </p>
  );
};

export default Price;
