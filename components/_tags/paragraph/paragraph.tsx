import React, {ReactElement} from "react";
import clsx from "clsx";
import {ParagraphProps} from "@/components/_tags/paragraph/paragraph.props";
import styles from "./pargraph.module.css";

const Paragraph = ({
  children,
  className,
  fontWeight = 'light',
  fontSize = "default",
  fontStyle = "normal",
  align = "left",
  ...props
}: ParagraphProps): ReactElement | null => {
  return (
    <p
      className={clsx(className, styles.paragraph, {
        [styles.fsDefault]: fontSize === "default",
        [styles.fsSmall]: fontSize === "small",
        [styles.fwLight]: fontWeight === "light",
        [styles.fwNormal]: fontWeight === "normal",
        [styles.fStyleNormal]: fontStyle === "normal",
        [styles.fStyleItalic]: fontStyle === "italic",
        [styles.alignCenter]: align === "center",
        [styles.alignRight]: align === "right",
      })}
      {...props}
    >
      {children}
    </p>
  );
};

export default Paragraph;
