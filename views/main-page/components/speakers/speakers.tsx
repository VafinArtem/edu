import ButtonArrow from "@/components/_buttons/button-arrow/button-arrow";
import SpeakerShortItem from "@/components/_common/speaker-short-item/speaker-short-item";
import SectionItem from "@/components/_section/section-item/section-item";
import Heading from "@/components/_tags/heading/heading";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import {Route} from "@/helpers/route";
import Link from "next/link";
import React, {ReactElement} from "react";
import styles from "./speakers.module.css";
import {SpeakersProps} from "./speakers.props";

const Speakers = ({speakers}: SpeakersProps): ReactElement | null => {
  return (
    <SectionItem className={`container`}>
      <div className={styles.head}>
        <Heading tag={`h2`} className={styles.title}>Преподаватели центра</Heading>
        <Paragraph>Мы&nbsp;работаем только с&nbsp;практикующими специалистами чьи знания подкреплены дипломами гос.
          образца. Преподаватели центра проводят вебинары и&nbsp;лекции, готовят программы для практических занятий
          курсов и&nbsp;мастер-классов.</Paragraph>
        <ButtonArrow
          component={Link}
          href={Route.COURSES}
          iconDirection={"mid-right"}
          color={"primary"}
          className={styles.link}
          borderRadius={"small"}
          borderColor={"default"}
        >Все преподаватели центра</ButtonArrow>
      </div>
      <div className={styles.list}>
        {speakers.map((speaker) => <SpeakerShortItem speaker={speaker} key={speaker.id} />)}
      </div>
    </SectionItem>
  );
};

export default Speakers;
