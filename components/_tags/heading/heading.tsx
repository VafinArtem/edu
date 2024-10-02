import React, {ReactElement} from "react";
import {HeadingProps} from "@/components/_tags/heading/heading.props";
import styles from "./heading.module.css";
import clsx from "clsx";

const Heading = ({
  className,
  tag,
  fontSize = "default",
  fontWeight = "normal",
  align = "left",
  children,
}: HeadingProps): ReactElement | null => {
  const classNameOptions = [
    styles.heading,
    className,
    {
      [styles.fsDefault]: fontSize === "default",
      [styles.fsMini]: fontSize === "mini",
      [styles.fsMid]: fontSize === "mid",
      [styles.fsAsText]: fontSize === "asText",
      [styles.undefined]: fontSize === "undefined",
      [styles.fwNormal]: fontWeight === "normal",
      [styles.fwMedium]: fontWeight === "medium",
      [styles.alignCenter]: align === "center",
      [styles.alignRight]: align === "right",
    },
  ];

  switch (tag) {
    case "h1":
      return <h1 className={clsx(classNameOptions)}>{children}</h1>;
    case "h2":
      return <h2 className={clsx(classNameOptions)}>{children}</h2>;
    case "h3":
      return <h3 className={clsx(classNameOptions)}>{children}</h3>;
    case "h4":
      return <h3 className={clsx(classNameOptions)}>{children}</h3>;
    case "h5":
      return <h3 className={clsx(classNameOptions)}>{children}</h3>;
    case "h6":
      return <h3 className={clsx(classNameOptions)}>{children}</h3>;
    default:
      return <></>;
  }
};

export default Heading;
