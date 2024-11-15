import SectionItem from "@/components/_section/section-item/section-item";
import Heading from "@/components/_tags/heading/heading";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import clsx from "clsx";
import Image from "next/image";
import React, {ReactElement} from "react";
import styles from "./about.module.css";
import {AboutProps} from "./about.props";

const About = ({className}: AboutProps): ReactElement | null => {
  return (
    <SectionItem className={className}>
      <Heading tag={"h2"} className={`visually-hidden`}>Об учебном центре</Heading>
      <Paragraph className={styles.title} fontSize={"asDefaultTitle"}>AMRITA&nbsp;&mdash; учебный центр дополнительного
        профессионального обучения для специалистов в&nbsp;сфере медицины и&nbsp;косметологии</Paragraph>
      <ul className={styles.advantages}>
        <li className={styles.advantage}>
          <div className={styles.picture}>
            <Image src={`/img/components/about/image-1.png`} alt={`Дипломы государственного образца`} width={865}
              height={265} quality={95} className={styles.image} />
            <a href={`#`} target="_blank" rel="noreferrer" className={styles.link}>
              <span className={styles.border}>&#8470;Л035-01271-78/00637355</span>
            </a>
          </div>
          <Paragraph className={clsx(styles.text, styles.learning)}>
            <span>
            <span className={styles.medium}>Имеем лицензию комитета по&nbsp;образованию:</span> после прохожденния
            курсов, специалисты получат удостоверение государственного образца
            с&nbsp;внесением данных в&nbsp;федеральную информационную систему.
            </span>
          </Paragraph>
        </li>
        <li className={styles.advantage}>
          <div className={styles.picture}>
            <Image src={`/img/components/about/image-2.png`} alt={`Девушка смотрит в микроскоп`} width={865}
              height={265} quality={95} className={styles.image} />
          </div>
          <Paragraph className={clsx(styles.text, styles.practice)}>
            <span>
            <span className={styles.medium}>Делаем упор на&nbsp;практику:</span> практические занятия, тренировки
            на&nbsp;фантомах и&nbsp;биоматериалах помогают принимать верные решения в&nbsp;стоматологической практике.
            </span>
          </Paragraph>
        </li>
      </ul>
    </SectionItem>
  );
};

export default About;
