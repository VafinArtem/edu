import React, {ReactElement} from "react";
import clsx from "clsx";
import {SelectProps} from "./select.props";
import styles from "./select.module.css";
import IconArrow from "./arrow.svg";
import Wrapper from "@/components/_filters/wrapper/wrapper";

const Select = ({name, labelName, className, ...props}: SelectProps): ReactElement | null => {
  return (
    <Wrapper className={clsx(styles.wrapper, className)}>
      <label className={styles.label}>
        <input type="hidden" name={name} {...props} />
        <span className={styles.name}>{labelName}</span>
        <IconArrow className={styles.icon} />
        <span className={styles.value}>Все</span>
      </label>
    </Wrapper>
  );
};

export default Select;
