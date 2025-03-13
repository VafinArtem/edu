import Heading from "@/components/_tags/heading/heading";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import clsx from "clsx";
import React, {ReactElement} from "react";
import styles from "./advantages.module.css";
import {AdvantagesProps} from "./advantages.props";
import IconCheck from "./check.svg";

const Advantages = ({className}: AdvantagesProps): ReactElement | null => {

  return (
    <section className={clsx(className, styles.wrapper)}>
      <h2 className="visually-hidden">
        Преимущества
      </h2>
      <ul className={styles.list}>
        <li className={styles.item}>
					<span className={styles.icon}>
          	<IconCheck width={27} heigth={27} />
					</span>
          <Heading tag={"h3"} fontWeight={"medium"} fontSize={"none"} className={styles.title}>Разные форматы
            обучения</Heading>
          <Paragraph>Очные, дистанционные, с&nbsp;выездом учебного центра в&nbsp;вашу клинику или регион.</Paragraph>
        </li>
        <li className={styles.item}>
          <span className={styles.icon}>
          	<IconCheck width={27} heigth={27} />
					</span>
          <Heading tag={"h3"} fontWeight={"medium"} fontSize={"none"} className={styles.title}>Контроль
            качества</Heading>
          <Paragraph>В&nbsp;учебном центре на&nbsp;регулярной основе осуществляется контроль качества образовательных
            услуг.</Paragraph>
        </li>
      </ul>
    </section>
  );
};

export default Advantages;
