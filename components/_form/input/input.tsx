"use client";

import {InputProps} from "./input.props";
import clsx from "clsx";
import styles from "./input.module.css";
import {ForwardedRef, forwardRef, ReactElement} from "react";

const Input = forwardRef(({
  className,
  error,
  labelName,
  color = "white",
  ...props
}: InputProps, ref: ForwardedRef<HTMLInputElement>): ReactElement | null => {
  return (
    <label className={clsx(className, styles.inputWrapper, {
      [styles.white]: color === "white",
      [styles.gray]: color === "gray",
    })}>
      <span className="visually-hidden">{labelName}</span>
      <input className={clsx(styles.input, {
        [styles.error]: error,
      })} ref={ref} {...props} />
      {error && <span className={styles.errorMessage}>{error}</span>}
    </label>
  );
});

Input.displayName = "Input";

export {Input};
