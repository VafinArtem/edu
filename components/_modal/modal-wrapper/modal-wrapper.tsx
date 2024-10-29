import React, {ForwardedRef, forwardRef, ReactElement} from "react";
import {ModalWrapperProps} from "./modal-wrapper.props";
import styles from "./modal-wrapper.module.css";
import clsx from "clsx";
import CloseButton from "@/components/_buttons/close-button/close-button";

const ModalWrapper = forwardRef(({
  className,
  children,
  showModal,
  setShowModal,
  ...props
}: ModalWrapperProps, ref: ForwardedRef<HTMLDivElement>): ReactElement | null => {
  return (
    <div className={styles.wrapper}>
      <div className={clsx(styles.inner, className)} {...props} ref={ref}>
        <CloseButton className={styles.close} onClick={() => setShowModal(!showModal)} />
        {children}
      </div>
    </div>
  );
});

ModalWrapper.displayName = "ModalWrapper";

export default ModalWrapper;
