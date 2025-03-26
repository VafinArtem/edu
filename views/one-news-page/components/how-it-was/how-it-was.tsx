import SectionHead from "@/components/_section/section-head/section-head";
import SectionItem from "@/components/_section/section-item/section-item";
import Heading from "@/components/_tags/heading/heading";
import Content from "@/views/course-page/components/for-whom/components/content/content";
import ImagesSlider from "@/views/one-news-page/components/images-slider/images-slider";
import React, {ReactElement} from "react";
import styles from "./how-it-was.module.css";
import {HowItWasProps} from "./how-it-was.props";

const HowItWas = ({content, images}: HowItWasProps): ReactElement | null => {
  return (
    <SectionItem gap={"20"} id={"howItWas"}>
      <SectionHead>
        <Heading tag={`h2`}>Как это было</Heading>
      </SectionHead>
      <div className={styles.inner}>
        <Content
          content={content} />
        {(images && images.length > 0) && <ImagesSlider images={images} />}
      </div>
    </SectionItem>
  );
};

export default HowItWas;
