"use client";

import clsx from "clsx";
import {ForwardedRef, forwardRef, ReactElement} from "react";
import styles from "./input.module.css";
import {InputProps} from "./input.props";

const Input = forwardRef(({
  className,
  inputClassName,
  error,
  isValid,
  labelName,
  color = "white",
  ...props
}: InputProps, ref: ForwardedRef<HTMLInputElement>): ReactElement | null => {
  return (
    <label className={clsx(className, styles.inputWrapper)}>
      <span className="visually-hidden">{labelName}</span>
      <input className={clsx(styles.input, inputClassName, {
        [styles.error]: error,
        [styles.white]: color === "white",
        [styles.gray]: color === "gray",
        [styles.valid]: isValid,
      })} ref={ref} {...props} />
      {error && <span className={styles.errorMessage}>{error.message}</span>}
    </label>
  );
});

Input.displayName = "Input";

export {Input};
