import Paragraph from "@/components/_tags/paragraph/paragraph";
import clsx from "clsx";
import React, {ReactElement} from "react";
import styles from "./head.module.css";
import {HeadProps} from "./head.props";

const Head = ({color}: HeadProps): ReactElement | null => {
  return (
    <div className={clsx(styles.content, {
      [styles.white]: color === "white",
      [styles.primary]: color === "primary",
    })}>
      <Paragraph fontSize={"asDefaultTitle"} className={styles.title}>
        Более 30 000 человек выбрали наш центр
      </Paragraph>
      <dl className={styles.options}>
        <div className={styles.optionItem}>
          <dt className={styles.termin}>92%</dt>
          <dd className={styles.description}>Ценят организацию<br />
            и&nbsp;комфортные условия
          </dd>
        </div>
        <div className={styles.optionItem}>
          <dt className={styles.termin}>84%</dt>
          <dd className={styles.description}>Приходят на&nbsp;лекции<br />
            повторно
          </dd>
        </div>
      </dl>
    </div>
  );
};

export default Head;
