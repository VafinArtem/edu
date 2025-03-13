import {formatPrice} from "@/helpers/helpers";
import clsx from "clsx";
import React, {ReactElement} from "react";
import styles from "./price.module.css";
import {PriceProps} from "./price.props";

const Price = ({price, oldPrice, className}: PriceProps): ReactElement | null => {
  return (
    <p className={clsx(styles.wrapper, className)}>
      <span className="visually-hidden">Текущая цена</span>
      {Boolean(price) && <>{formatPrice(price)}&nbsp;₽</>}
      {price === 0 && <>Бесплатно</>}
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
