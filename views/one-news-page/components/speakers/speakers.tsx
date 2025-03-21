import ButtonArrow from "@/components/_buttons/button-arrow/button-arrow";
import SectionHead from "@/components/_section/section-head/section-head";
import SectionItem from "@/components/_section/section-item/section-item";
import Heading from "@/components/_tags/heading/heading";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import {Route} from "@/helpers/route";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React, {ReactElement} from "react";
import IconPlay from "./play.svg";
import styles from "./speakers.module.css";
import {SpeakersProps} from "./speakers.props";

const Speakers = ({speakers, courseTypeName}: SpeakersProps): ReactElement | null => {
  const style = styles;

  return (
    <SectionItem id={"speakers"}>
      <SectionHead>
        <Heading
          tag={"h2"}
          fontSize={"mini"}
          className={styles.title}
        >{speakers.length > 1 ? "Преподаватели" : "Преподаватель"} {courseTypeName}</Heading>
      </SectionHead>
      <div className={styles.list}>
        {speakers.map((speaker) => (<article className={styles.card} key={speaker.id}>
          <div className={clsx(styles.imageWrapper)}>
            <div
              className={clsx(styles.image, {
                [styles.withPT]: !speaker.video,
              })}
              style={{backgroundColor: speaker.photoBackground}}
            >
              <Image
                src={speaker.video ? speaker.video.poster : speaker.photo}
                alt={""}
                width={200}
                height={200}
                className={style.avatar}
              />
            </div>
            {speaker.video && <button type={"button"} className={styles.play}>
              <span className="visually-hidden">Включить видео</span>
              <IconPlay width={40} height={40} />
            </button>}
          </div>
          <div className={styles.content}>
            <Paragraph
              fontSize={"large"}>{speaker.surname.nominative} {speaker.name.nominative} {speaker.patronymic.nominative}</Paragraph>
            <Paragraph fontWeight={"light"}>
              {speaker.specialization}{". "}
              {speaker.position}
            </Paragraph>
            <ButtonArrow component={Link} href={`${Route.SPEAKER}/${speaker.alias}`}
              iconDirection={"top-right"} color={"primary"}>Страница преподавателя</ButtonArrow>
          </div>
        </article>))}
      </div>
    </SectionItem>
  );
};

export default Speakers;
