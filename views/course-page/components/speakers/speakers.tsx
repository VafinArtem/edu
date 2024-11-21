import SpeakerItem from "@/components/_course/speaker-item/speaker-item";
import SectionCenterHead from "@/components/_section/section-center-head/section-center-head";
import SectionItem from "@/components/_section/section-item/section-item";
import Heading from "@/components/_tags/heading/heading";
import React, {ReactElement} from "react";
import styles from "./speakers.module.css";
import {SpeakersProps} from "./speakers.props";

const Speakers = ({className, courseTypeName, speakers}: SpeakersProps): ReactElement | null => {
  return (
    <SectionItem className={className}>
      <SectionCenterHead>
        <Heading tag={`h2`}>{speakers.length > 1 ? `Ведут` : `Ведёт`} {courseTypeName}</Heading>
      </SectionCenterHead>
      <ul className={styles.list}>
        {speakers.map((item) => <SpeakerItem key={item.id} {...item} />)}
      </ul>
    </SectionItem>
  );
};

export default Speakers;
