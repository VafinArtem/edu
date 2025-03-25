import {contentParse} from "@/helpers/content";
import React, {ReactElement} from "react";
import styles from "./content.module.css";
import {ContentProps} from "./content.props";

const Content = ({content}: ContentProps): ReactElement | null => {
  return (
    <div className={styles.content}>
      {contentParse(content)}
    </div>
  );
};

export default Content;
