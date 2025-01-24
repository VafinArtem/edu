import SectionHead from "@/components/_section/section-head/section-head";
import SectionItem from "@/components/_section/section-item/section-item";
import Heading from "@/components/_tags/heading/heading";
import React, {ReactElement} from "react";
import styles from "./for-whom.module.css";
import {ForWhomProps} from "./for-whom.props";

const ForWhom = ({className}: ForWhomProps): ReactElement | null => {
  const style = styles;

  return (
    <SectionItem className={className}>
      <SectionHead>
        <Heading tag={`h2`}>Для кого?</Heading>
      </SectionHead>
    </SectionItem>
  );
};

export default ForWhom;
