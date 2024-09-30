import React, {ReactElement} from "react";
import clsx from "clsx";
import {AdvantagesProps} from "./advantages.props";
import styles from "./advantages.module.css";

const Advantages = ({className}: AdvantagesProps): ReactElement | null => {
  return (
    <section className={clsx(className, styles.wrapper)}>
      <h2 className="visually-hidden">
        Преимущества
      </h2>
      <ul className={styles.list}>
        <li className={styles.item}>Узнаете, как предотвратить осложнения при имплантации</li>
        <li className={styles.item}>Научитесь находить нестандартные решения даже в сложных ситуациях</li>
        <li className={styles.item}>Увеличите доход, внедрив в работу новое направление</li>
      </ul>
    </section>
  );
};

export default Advantages;
