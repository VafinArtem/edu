import React, {ReactElement} from "react";
import {PriceItemProps} from "./price-item.props";
import styles from "./price-item.module.css";
import clsx from "clsx";
import IconReset from "./reset.svg";

const PriceItem = ({labelName, className, ...props}: PriceItemProps): ReactElement | null => {
  return (
    <div className={clsx(className, styles.wrapper)}>
      <label className={styles.label}>
        <span className={styles.name}>{labelName}</span>
        <input type="text" className={styles.input} {...props} />
      </label>
      <button className={styles.reset} type={"button"}><IconReset /></button>
    </div>
  );
};

export default PriceItem;
