import SectionHead from "@/components/_section/section-head/section-head";
import SectionItem from "@/components/_section/section-item/section-item";
import Heading from "@/components/_tags/heading/heading";
import Content from "@/views/course-page/components/for-whom/components/content/content";
import React, {ReactElement} from "react";
import {ForWhomProps} from "./for-whom.props";

const ForWhom = ({className, content}: ForWhomProps): ReactElement | null => {
  return (
    <SectionItem className={className}>
      <SectionHead>
        <Heading tag={"h2"}>Для кого?</Heading>
      </SectionHead>
      <Content content={content} />
    </SectionItem>
  );
};

export default ForWhom;
