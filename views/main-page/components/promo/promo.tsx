import React, {ReactElement} from "react";
import {PromoProps} from "./promo.props";
import styles from "./promo.module.css";
import clsx from "clsx";
import Heading from "@/components/_tags/heading/heading";
import Direction from "@/views/main-page/components/promo/direction/direction";

const Promo = ({directions, className}: PromoProps): ReactElement | null => {
  return (
    <div className={clsx(styles.wrapper, className)}>
      <video className={styles.video} autoPlay muted playsInline loop>
        <source src={"/video/main.mp4"} type="video/mp4" />
      </video>
      <div className={styles.inner}>
        <div className={clsx(styles.container, "container")}>
          <Heading tag={`h1`} fontSize={"large"} className={styles.title}>Учебный центр AMRITA &mdash;&nbsp;помогаем
            становиться
            специалистами</Heading>
          <Heading tag={`h2`} className={"visually-hidden"}>Категории</Heading>
          {directions.length > 0 && <ul className={styles.directionList}>
            {directions.map((direction) => <Direction key={direction.id} direction={direction} />)}
          </ul>}
        </div>
      </div>
    </div>
  );
};

export default Promo;
