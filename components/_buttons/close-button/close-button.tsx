import React, {ReactElement} from "react";
import {CloseButtonProps} from "./close-button.props";
import styles from "./close-button.module.css";
import IconClose from "./close.svg";
import clsx from "clsx";

const CloseButton = ({className, ...props}: CloseButtonProps): ReactElement | null => {

  return (
    <button className={clsx(styles.close, className)} type={`button`} {...props}>
      <IconClose width={24} height={24} />
      <span className={`visually-hidden`}>Закрыть модальное окно</span>
    </button>
  );
};

export default CloseButton;
