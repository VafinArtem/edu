import Head from "@/components/_reviews/head/head";
import SectionItem from "@/components/_section/section-item/section-item";
import ImagesSlider from "@/components/_sliders/images-slider/images-slider";
import React, {ReactElement} from "react";
import {TopProps} from "./top.props";

const Top = ({}: TopProps): ReactElement | null => {
  return (
    <SectionItem style={{overflow: "hidden"}}>
      <div className={`container`}>
        <Head color={"primary"} />
      </div>
      <ImagesSlider className={"container"} images={
        ["/img/reviews-page/img-1.jpg", "/img/reviews-page/img-2.jpg", "/img/reviews-page/img-3.jpg", "/img/reviews-page/img-4.jpg", "/img/reviews-page/img-5.jpg", "/img/reviews-page/img-6.jpg"]
      } />
    </SectionItem>
  );
};

export default Top;
