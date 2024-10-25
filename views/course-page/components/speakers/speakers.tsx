import React, {ReactElement} from "react";
import {SpeakersProps} from "./speakers.props";
import styles from "./speakers.module.css";
import SectionItem from "@/components/_section/section-item/section-item";
import Heading from "@/components/_tags/heading/heading";
import SectionCenterHead from "@/components/_section/section-center-head/section-center-head";
import SpeakerItem from "@/components/_course/speaker-item/speaker-item";

const Speakers = ({className, courseTypeName, speakers}: SpeakersProps): ReactElement | null => {
  return (
    <SectionItem className={className}>
      <SectionCenterHead>
        <Heading tag={`h2`}>Ведут {courseTypeName}</Heading>
      </SectionCenterHead>
      <ul className={styles.list}>
        {speakers.map((item) => <SpeakerItem key={item.id} {...item} />)}
      </ul>
    </SectionItem>
  );
};

export default Speakers;
