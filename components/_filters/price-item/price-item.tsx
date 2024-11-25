"use client";

import clsx from "clsx";
import React, {ReactElement, useRef} from "react";
import styles from "./price-item.module.css";
import {PriceItemProps} from "./price-item.props";
import IconReset from "./reset.svg";

const PriceItem = ({labelName, resetCb, className, ...props}: PriceItemProps): ReactElement | null => {
  const ref = useRef(null!);

  return (
    <div className={clsx(className, styles.wrapper)}>
      <label className={styles.label}>
        <span className={styles.name}>{labelName}</span>
        <input type="text" className={styles.input} {...props} ref={ref} />
      </label>
      {(ref.current && (ref.current as HTMLInputElement).value) &&
        <button className={styles.reset} type={"button"} onClick={() => {
          (ref.current as HTMLInputElement).value = ``;
          
          if (!resetCb) return;

          resetCb();
        }}><IconReset /></button>}
    </div>
  );
};

export default PriceItem;
