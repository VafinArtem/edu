"use client";

import {TextareaProps} from "./textarea.props";
import clsx from "clsx";
import styles from "./textarea.module.css";
import {ForwardedRef, forwardRef, ReactElement} from "react";

const Textarea = forwardRef(({
  className,
  error,
  labelName,
  color = "white",
  isValid,
  ...props
}: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>): ReactElement | null => {
  return (
    <label className={clsx(className, styles.inputWrapper)}>
      <span className="visually-hidden">{labelName}</span>
      <textarea className={clsx(styles.input, {
        [styles.error]: error,
        [styles.white]: color === "white",
        [styles.gray]: color === "gray",
        [styles.valid]: isValid,
      })} ref={ref} {...props} />
      {error && <span className={styles.errorMessage}>{error.message}</span>}
    </label>
  );
});

Textarea.displayName = "Input";

export {Textarea};
