import Paragraph from "@/components/_tags/paragraph/paragraph";
import React, {ReactElement} from "react";
import styles from "./file.module.css";
import {FileProps} from "./file.props";
import IconFile from "./file.svg";
import IconRemove from "./remove.svg";

const File = ({name, onRemove}: FileProps): ReactElement | null => {
  return (
    <div className={styles.wrapper}>
      <Paragraph fontSize={"small"} className={styles.name}><IconFile /> {name}</Paragraph>
      <button className={styles.remove} onClick={onRemove}>
        <span className="visually-hidden">Удалить файл</span>
        <IconRemove />
      </button>
    </div>
  );
};

export default File;
