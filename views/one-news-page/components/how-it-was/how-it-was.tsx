import SectionHead from "@/components/_section/section-head/section-head";
import SectionItem from "@/components/_section/section-item/section-item";
import Heading from "@/components/_tags/heading/heading";
import {content} from "@/mocs/one-news";
import Content from "@/views/course-page/components/for-whom/components/content/content";
import ImagesSlider from "@/views/one-news-page/components/images-slider/images-slider";
import React, {ReactElement} from "react";
import styles from "./how-it-was.module.css";
import {HowItWasProps} from "./how-it-was.props";

const HowItWas = ({}: HowItWasProps): ReactElement | null => {
  return (
    <SectionItem gap={"20"}>
      <SectionHead>
        <Heading tag={`h2`}>Как это было</Heading>
      </SectionHead>
      <div className={styles.inner}>
        <Content
          content={content} />
        <ImagesSlider images={["/img/one-news-page/img-1.png", "/img/one-news-page/img-2.png"]} />
      </div>
    </SectionItem>
  );
};

export default HowItWas;
