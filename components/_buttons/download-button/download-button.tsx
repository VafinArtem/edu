import BaseButton, {BaseButtonComponent, BaseButtonProps} from "@/components/_buttons/base-button/base-button";
import clsx from "clsx";
import React, {ReactElement} from "react";
import styles from "./download-button.module.css";
import {DownloadButtonProps} from "./download-button.props";
import DownloadIcon from "./download.svg";

const DownloadButton = <C extends BaseButtonComponent = "button">({
  className,
  children,
  ...props
}: DownloadButtonProps<C>): ReactElement | null => {
  return (
    <BaseButton<C>
      className={clsx(styles.link, className)} {...(props as BaseButtonProps<C>)}>{children}<DownloadIcon /></BaseButton>
  );
};

export default DownloadButton;
