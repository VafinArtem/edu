import SectionItem from "@/components/_section/section-item/section-item";
import Content from "@/views/course-page/components/for-whom/components/content/content";
import React, {ReactElement} from "react";
import {SeoContentProps} from "./seo-content.props";

const SeoContent = ({className, content}: SeoContentProps): ReactElement | null => {
  return (
    <SectionItem className={className}>
      <Content content={content} fullWidth />
    </SectionItem>
  );
};

export default SeoContent;
