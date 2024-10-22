"use client";

import React, {ReactElement, useRef} from "react";
import {GalleryProps} from "./gallery.props";
import styles from "./gallery.module.css";
import "swiper/css";
import SectionItem from "@/components/_section/section-item/section-item";
import Heading from "@/components/_tags/heading/heading";
import {Swiper, SwiperSlide} from "swiper/react";
import {Swiper as SwiperCore} from "swiper/types";
import Button from "@/components/_slider/button/button";
import {Navigation} from "swiper/modules";
import Image from "next/image";

const Gallery = ({photos, speakerName, className}: GalleryProps): ReactElement | null => {
  const swiperRef = useRef<SwiperCore>();

  return (
    <SectionItem className={className} style={{overflow: "hidden"}}>
      <Heading tag={`h2`} className={`container`}>Фото с {speakerName}</Heading>
      <div className={styles.container}>
        <Swiper
          modules={[Navigation]}
          className={styles.slider}
          loop={true}
          spaceBetween={10}
          slidesPerView={`auto`}
          breakpoints={{
            768: {
              spaceBetween: 20,
            },
          }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {photos.map((photo) => (<SwiperSlide className={styles.slide} key={photo.id}>
            <figure className={styles.picture}>
              <Image src={photo.img} alt={``} width={780} height={435} quality={95} loading={"lazy"}
                className={styles.image} />
              {photo.description && <figcaption className={styles.description}>{photo.description}</figcaption>}
            </figure>
          </SwiperSlide>))}
          {photos.length < 4 && photos.map((photo, index) => (
            <SwiperSlide className={styles.slide} key={`${photo.id}-${index}`}>
              <figure className={styles.picture}>
                <Image src={photo.img} alt={``} width={780} height={435} quality={95} loading={"lazy"}
                  className={styles.image} />
                {photo.description && <figcaption className={styles.description}>{photo.description}</figcaption>}
              </figure>
            </SwiperSlide>))}
          <div className={styles.buttons}>
            <Button direction={"prev"} background={"white"} size={"default"}
              onClick={() => {
                swiperRef.current?.slidePrev();
              }} />
            <Button direction={"next"} background={"white"} size={"default"}
              onClick={() => {
                swiperRef.current?.slideNext();
              }} />
          </div>
        </Swiper>
      </div>
    </SectionItem>
  );
};

export default Gallery;
