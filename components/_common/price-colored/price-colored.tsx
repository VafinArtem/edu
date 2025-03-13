import {formatPrice} from "@/helpers/helpers";
import clsx from "clsx";
import React, {ReactElement} from "react";
import styles from "./price-colored.module.css";
import {PriceColoredProps} from "./price-colored.props";

const PriceColored = ({price, oldPrice, className}: PriceColoredProps): ReactElement | null => {
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

export default PriceColored;
