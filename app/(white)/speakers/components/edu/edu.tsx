import React, {ReactElement} from "react";
import {EduProps} from "./edu.props";
import styles from "./edu.module.css";
import Heading from "@/components/_tags/heading/heading";
import EduItem from "@/components/_training/edu-item/edu-item";
import clsx from "clsx";

const Edu = ({edu}: EduProps): ReactElement | null => {
  return (
    <div className={clsx(styles.wrapper)}>
      <Heading tag={`h2`} className={styles.title}>Образование и&nbsp;награды</Heading>
      <ul className={styles.list}>
        {edu.map((item, index) => <EduItem className={styles.item} color={"white"} key={index} {...item} />)}
      </ul>
    </div>
  );
};

export default Edu;
