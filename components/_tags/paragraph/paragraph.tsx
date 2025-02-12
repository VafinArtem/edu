import {ParagraphProps} from "@/components/_tags/paragraph/paragraph.props";
import clsx, {ClassValue} from "clsx";
import React, {ReactElement} from "react";
import styles from "./pargraph.module.css";

const Paragraph = ({
  children,
  className,
  fontWeight = "normal",
  fontSize = "default",
  fontStyle = "normal",
  align = "left",
  tag = "p",
  ...props
}: ParagraphProps): ReactElement | null => {
  const classNameOptions: ClassValue[] = [className, styles.paragraph, {
    [styles.fsDefault]: fontSize === "default",
    [styles.fsSmall]: fontSize === "small",
    [styles.fsAsTitle]: fontSize === "asDefaultTitle",
    [styles.fwLight]: fontWeight === "light",
    [styles.fwNormal]: fontWeight === "normal",
    [styles.fwMedium]: fontWeight === "medium",
    [styles.fStyleNormal]: fontStyle === "normal",
    [styles.fStyleItalic]: fontStyle === "italic",
    [styles.alignCenter]: align === "center",
    [styles.alignRight]: align === "right",
  }];

  return (
    <>
      {tag === "p" && <p
        className={clsx(classNameOptions)}
        {...props}
      >
        {children}
      </p>}
      {tag === "span" && <span
        className={clsx(classNameOptions)}
        {...props}
      >
        {children}
      </span>}
    </>

  );
};

export default Paragraph;
