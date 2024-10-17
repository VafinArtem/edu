import React, {ReactElement} from "react";
import {ExternalLinkProps} from "./external-link.props";
import styles from "./external-link.module.css";
import clsx from "clsx";
import Link from "next/link";

const ExternalLink = ({
  isExternal,
  href,
  className,
  color = "primary",
  children,
  ...props
}: ExternalLinkProps): ReactElement | null => {
  const classNameOptions = [className, styles.link, {
    [styles.primary]: color === "primary",
    [styles.white]: color === "white",
  }];

  return (
    <>
      {isExternal && <a href={href} className={clsx(classNameOptions)} target="_blank"
        rel="noopener noreferrer" {...props}>{children}</a>}
      {!isExternal && <Link className={clsx(classNameOptions)} href={href ?? ``} {...props}>{children}</Link>}
    </>
  );
};

export default ExternalLink;
