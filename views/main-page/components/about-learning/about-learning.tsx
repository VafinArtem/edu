import BiggestRoundButton from "@/components/_buttons/biggest-round-button/biggest-round-button";
import ContainerWhite from "@/components/_section/container-white/container-white";
import Heading from "@/components/_tags/heading/heading";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React, {ReactElement} from "react";
import {Route} from "../../../../helpers/route";
import styles from "./about-learning.module.css";
import {AboutLearningProps} from "./about-learning.props";

const AboutLearning = ({className}: AboutLearningProps): ReactElement | null => {
  return (
    <ContainerWhite className={className} withoutMobileBorderRadius>
      <section className={clsx(styles.wrapper, `container`)}>
        <div className={styles.content}>
          <Heading tag={`h2`} className={styles.title}>Повышайте квалификацию без отрыва от&nbsp;работы
            и&nbsp;жизни</Heading>
          <Paragraph>У&nbsp;нас вы&nbsp;можете пройти курсы повышения квалификации дистанционно. Обучайтесь независимо
            от&nbsp;местоположения, по&nbsp;свободному графику, в&nbsp;индивидуальном темпе
            и&nbsp;без отрыва от&nbsp;работы.</Paragraph>
          <Image src={"/img/components/about-learning/img.png"} alt={""} width={380} height={161} quality={95}
            className={styles.img} />
          <Paragraph>В&nbsp;курсах вы&nbsp;найдёте уникальные видео с&nbsp;проведеним оперативных вмешательств
            от&nbsp;ведущих преподавателей учебного центра &laquo;Амрита&raquo;.</Paragraph>
        </div>
        <div className={styles.videoContent}>
          <BiggestRoundButton
            component={Link}
            href={Route.COURSES}
            className={styles.link}
          >Выбрать<br />программу</BiggestRoundButton>
          <video className={styles.video} poster={"/img/components/about-learning/poster.png"} loop muted autoPlay>
            <source src={"/video/about-learning.mp4"} type={"video/mp4"} />
          </video>
        </div>
      </section>
    </ContainerWhite>
  );
};

export default AboutLearning;
