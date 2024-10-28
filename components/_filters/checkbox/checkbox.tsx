import React, {ReactElement} from "react";
import {CheckboxProps} from "./checkbox.props";
import styles from "./checkbox.module.css";
import clsx from "clsx";

const Checkbox = ({labelName, name, className, ...props}: CheckboxProps): ReactElement | null => {
  return (
    <label className={clsx(className, styles.label)}>
      <input type="checkbox" name={name} className={styles.input} {...props} />
      <span className={styles.square}></span>
      <span className={styles.name}>{labelName}</span>
    </label>
  );
};

export default Checkbox;
