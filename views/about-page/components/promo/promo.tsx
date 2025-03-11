import Paragraph from "@/components/_tags/paragraph/paragraph";
import clsx from "clsx";
import Image from "next/image";
import React, {ReactElement} from "react";
import styles from "./promo.module.css";
import {PromoProps} from "./promo.props";

const Promo = ({className}: PromoProps): ReactElement | null => {
  return (
    <section className={clsx(styles.promo, className)}>
      <Image className={styles.image} src={"/img/about-page/promo/promo.jpg"} width={768} height={730} alt={""}
        quality={98} priority />
      <div className={styles.inner}>
        <div className={clsx(styles.container, "container")}>
          <div className={styles.content}>
            <Paragraph fontSize={"asDefaultTitle"}>
              Amrita&nbsp;&mdash; учебный центр для дополнительного профессионального обучения врачей-стоматологов
            </Paragraph>
            <Paragraph>
              Практика&nbsp;&mdash; основа наших мероприятий, а&nbsp;индивидуальный подход способствует формированию
              актуальных компетенций.
            </Paragraph>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo;
