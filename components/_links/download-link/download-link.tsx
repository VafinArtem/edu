import React, {ReactElement} from "react";
import {DownloadLinkProps} from "./download-link.props";
import styles from "./download-link.module.css";
import clsx from "clsx";
import DownloadIcon from "./download.svg"

const DownloadLink = ({
  className,
  children,
  ...props
}: DownloadLinkProps): ReactElement | null => {
  return (
    <a href={``}
      target="_blank" rel="noopener noreferrer"
      className={clsx(styles.link, className)}
      {...props}
    >{children}<DownloadIcon /></a>
  );
};

export default DownloadLink;
