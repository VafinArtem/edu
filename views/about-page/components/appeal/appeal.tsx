import Paragraph from "@/components/_tags/paragraph/paragraph";
import Image from "next/image";
import React, {ReactElement} from "react";
import styles from "./appeal.module.css";
import {AppealProps} from "./appeal.props";

const Appeal = ({}: AppealProps): ReactElement | null => {
  return (
    <section className={styles.wrapper}>
      <Image src={"/img/about-page/appeal/img.jpg"} alt={""} width={207} height={207} className={styles.image}
        quality={95} />
      <div className={styles.content}>
        <blockquote className={styles.quote}>
          <Paragraph fontSize={"none"} fontStyle={"italic"}>Мы&nbsp;стараемся делать учебные программы доступными
            и&nbsp;интересными.
            В&nbsp;нашем арсенале есть&nbsp;&mdash; лекции, семинары, практические курсы, конференции
            и&nbsp;аккредитованные программы.</Paragraph>
        </blockquote>
        <div className={styles.contacts}>
          <Paragraph className={styles.description}><cite className={styles.cite}>Соловьева Елена</cite> <span
            className={styles.gray}>— руководитель
						учебного центра</span></Paragraph>
          <Paragraph className={styles.description}>Связаться: <a className={styles.gray}
            href={"tel:+79312518351"}>+7(931) 251-83-51</a></Paragraph>
        </div>
      </div>
    </section>
  );
};

export default Appeal;
