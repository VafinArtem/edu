import FilterButton from "@/components/_buttons/filter-button/filter-button";
import Heading from "@/components/_tags/heading/heading";
import clsx from "clsx";
import React, {ReactElement} from "react";
import styles from "./head.module.css";
import {HeadProps} from "./head.props";

const Head = ({}: HeadProps): ReactElement | null => {
  return (
    <div className={clsx(styles.wrapper, "container")}>
      <Heading tag={`h1`} className={styles.title}>Оплата и спецпредложения</Heading>
      <div className={styles.links}>
        <FilterButton component={"a"} enableHover href={"#payment"}>Способы оплаты</FilterButton>
        <FilterButton component={"a"} enableHover href={"#promotions"}>Акции и скидки</FilterButton>
        <FilterButton component={"a"} enableHover href={"#certificates"}>Подарочные сертификаты</FilterButton>
      </div>
    </div>
  );
};

export default Head;
