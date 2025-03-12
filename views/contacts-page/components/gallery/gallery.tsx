"use client";

import GalleryContainer from "@/components/_gallery/gallery-container/gallery-container";
import GallerySlider from "@/components/_gallery/gallery-slider/gallery-slider";
import SectionItem from "@/components/_section/section-item/section-item";
import Heading from "@/components/_tags/heading/heading";
import React, {ReactElement} from "react";
import "swiper/css";
import {GalleryProps} from "./gallery.props";

const photos = [
  `/img/contacts-page/gallery/image-1.png`,
  `/img/contacts-page/gallery/image-2.png`,
  `/img/contacts-page/gallery/image-3.png`,
  `/img/contacts-page/gallery/image-4.png`,
  `/img/contacts-page/gallery/image-5.png`,
  `/img/contacts-page/gallery/image-6.png`,
  `/img/contacts-page/gallery/image-7.png`,
  `/img/contacts-page/gallery/image-8.png`,
  `/img/contacts-page/gallery/image-9.png`,
  `/img/contacts-page/gallery/image-10.png`,
];

const Gallery = ({}: GalleryProps): ReactElement | null => {
  return (
    <SectionItem style={{overflow: "hidden"}}>
      <Heading tag={`h2`} className={"visually-hidden"}>Галерея</Heading>
      <GalleryContainer>
        <GallerySlider photos={photos} />
      </GalleryContainer>
    </SectionItem>
  );
};

export default Gallery;
