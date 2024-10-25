import React, {ReactElement} from "react";
import clsx from "clsx";
import {AdvantagesProps} from "./advantages.props";
import styles from "./advantages.module.css";
import IconCheck from "./check.svg";

const Advantages = ({color, advantages, className}: AdvantagesProps): ReactElement | null => {
  return (
    <section className={clsx(className, styles.wrapper)}>
      <h2 className="visually-hidden">
        Преимущества
      </h2>
      <ul className={styles.list}>
        {advantages.map((advantage, index) => <li key={index} className={styles.item}>
          <span className={styles.icon} style={{color}}><IconCheck width={30} heigth={30} /></span>{advantage}</li>)}
      </ul>
    </section>
  );
};

export default Advantages;
