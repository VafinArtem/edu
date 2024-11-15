import ButtonArrow from "@/components/_buttons/button-arrow/button-arrow";
import Heading from "@/components/_tags/heading/heading";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import {getDeclension} from "@/helpers/helpers";
import {Route} from "@/helpers/route";
import Image from "next/image";
import Link from "next/link";
import React, {ReactElement} from "react";
import styles from "./speaker-short-item.module.css";
import {SpeakerShortItemProps} from "./speaker-short-item.props";

const SpeakerShortItem = ({speaker}: SpeakerShortItemProps): ReactElement | null => {
  const {photo, name, specialization, coursesCount, alias, direction, photoBackground} = speaker;

  return (
    <article className={styles.wrapper}>
      <Image src={photo} width={330} height={166} alt={``} loading={"lazy"} className={styles.image} quality={95}
        style={{backgroundColor: `${photoBackground}`}} />
      <div className={styles.content}>
        <Heading tag={`h3`} fontWeight={"medium"} fontSize={"none"} className={styles.name}>{name}</Heading>
        <Paragraph fontSize={"none"} className={styles.specialization}>{specialization}</Paragraph>
        <Paragraph fontSize={"none"}
          className={styles.coursesCount}>{coursesCount} {getDeclension(coursesCount, [`курс`, `курса`, `курсов`])}</Paragraph>
        <Paragraph fontSize={"none"}
          className={styles.direction} style={{color: direction.color}}>
          <span className={`visually-hidden`}>Направление: {direction.name}</span>
          <span className={styles.icon} dangerouslySetInnerHTML={{__html: direction.icon}}></span>
        </Paragraph>
        <ButtonArrow
          component={Link}
          href={`${Route.SPEAKERS}/${alias}`}
          color={"primary"}
          iconDirection={"mid-right"}
          borderRadius={"small"}
          className={styles.link}
          size={"small"}
          withBackground
        >
          О преподавателе
        </ButtonArrow>
      </div>
    </article>
  );
};

export default SpeakerShortItem;
