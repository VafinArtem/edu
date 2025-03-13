import BiggestRoundButton from "@/components/_buttons/biggest-round-button/biggest-round-button";
import Heading from "@/components/_tags/heading/heading";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import {Route} from "@/helpers/route";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React, {ReactElement} from "react";
import styles from "./courses.module.css";
import {CoursesProps} from "./courses.props";

const Courses = ({className}: CoursesProps): ReactElement | null => {
  return (
    <div className={clsx(styles.wrapper, className)}>
      <div className={styles.left}>
        <Heading tag={`h2`} fontSize={"none"} className={styles.title}>Разнообразный выбор лекций, мастер-классов
          и&nbsp;вебинаров </Heading>
        <Paragraph>Для опытных и&nbsp;начинающих специалистов в&nbsp;сфере стоматологии.</Paragraph>
      </div>
      <div className={styles.right}>
        <Image src={`/img/about-page/courses/image.png`} alt={``} width={227} height={227} loading={"lazy"}
          quality={95}
          className={styles.image} />
        <BiggestRoundButton component={Link} href={Route.COURSES} className={styles.link}>Смотреть<br /> все
          курсы</BiggestRoundButton>
      </div>
    </div>
  );
};

export default Courses;
