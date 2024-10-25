"use client";

import React, {ReactElement, useRef, useState} from "react";
import {Navigation} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import {Swiper as SwiperCore} from "swiper/types";
import {GalleryProps} from "./gallery.props";
import "swiper/css";
import styles from "./gallery.module.css";
import SectionItem from "@/components/_section/section-item/section-item";
import Heading from "@/components/_tags/heading/heading";
import Image from "next/image";
import clsx from "clsx";
import Button from "@/components/_slider/button/button";

const Gallery = ({photos}: GalleryProps): ReactElement | null => {
  const [isEnd, setIsEnd] = useState<boolean>(false);
  const [isBeginning, setIsBeginning] = useState<boolean>(false);
  const swiperRef = useRef<SwiperCore>();

  return (
    <SectionItem style={{overflow: "hidden"}}>
      <div className={clsx(styles.head, `container`)}>
        <Heading tag={`h2`} fontSize={"mini"} className={styles.title}>Как это было в&nbsp;прошлый раз</Heading>
        <div className={styles.buttons}>
          <Button disabled={isBeginning} direction={"prev"} background={"white"} size={"default"}
            onClick={() => {
              swiperRef.current?.slidePrev();
            }} />
          <Button disabled={isEnd} direction={"next"} background={"white"} size={"default"}
            onClick={() => {
              swiperRef.current?.slideNext();
            }} />
        </div>
      </div>
      <div className={styles.container}>
        <Swiper
          modules={[Navigation]}
          className={styles.slider}
          spaceBetween={10}
          slidesPerView={1}
          centeredSlides={true}
          breakpoints={{
            768: {
              slidesPerView: 3,
              centeredSlides: false,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 20,
              centeredSlides: false,
            },
            1500: {
              slidesPerView: 4,
              spaceBetween: 20,
              centeredSlides: false,
            },
          }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onInit={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
        >
          {photos.map((item, index) => <SwiperSlide key={index}>
            <Image src={item} alt={``} width={440} height={302} className={styles.image} priority={true} />
          </SwiperSlide>)}
        </Swiper>
      </div>
    </SectionItem>
  );
};

export default Gallery;
