import {contentParse} from "@/helpers/content";
import clsx from "clsx";
import React, {ReactElement} from "react";
import styles from "./content.module.css";
import {ContentProps} from "./content.props";

const Content = ({content, fullWidth}: ContentProps): ReactElement | null => {
  return (
    <div className={clsx(styles.content, {
      [styles.fullWidth]: fullWidth,
    })}>
      {contentParse(content)}
    </div>
  );
};

export default Content;
