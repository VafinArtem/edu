"use client";

import SectionItem from "@/components/_section/section-item/section-item";
import RoundButton from "@/components/_slider/round-button/round-button";
import Heading from "@/components/_tags/heading/heading";
import clsx from "clsx";
import Image from "next/image";
import React, {ReactElement, useRef} from "react";
import {Navigation} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import {Swiper as SwiperCore} from "swiper/types";
import styles from "./gallery.module.css";
import "swiper/css";
import {GalleryProps} from "./gallery.props";

const Gallery = ({}: GalleryProps): ReactElement | null => {
  const swiperRef = useRef<SwiperCore>();

  return (
    <SectionItem style={{overflow: "hidden"}}>
      <Heading tag={`h2`} className={"visually-hidden"}>Галерея</Heading>
      <div className={styles.container}>
        <Swiper
          modules={[Navigation]}
          className={styles.slider}
          loop={true}
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            767: {
              slidesPerView: 2,
            },
            1024: {
              spaceBetween: 20,
              slidesPerView: 3,
            },
            1499: {
              spaceBetween: 20,
              slidesPerView: 4,
            },
          }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          <SwiperSlide className={styles.slide}>
            <Image src={`/img/contacts-page/gallery/image-1.png`} alt={``} width={440} height={302}
              quality={95}
              loading={"lazy"}
              className={styles.image} />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <Image src={`/img/contacts-page/gallery/image-2.png`} alt={``} width={440} height={302}
              quality={95}
              loading={"lazy"}
              className={styles.image} />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <Image src={`/img/contacts-page/gallery/image-3.png`} alt={``} width={440} height={302}
              quality={95}
              loading={"lazy"}
              className={styles.image} />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <Image src={`/img/contacts-page/gallery/image-4.png`} alt={``} width={440} height={302}
              quality={95}
              loading={"lazy"}
              className={styles.image} />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <Image src={`/img/contacts-page/gallery/image-5.png`} alt={``} width={440} height={302}
              quality={95}
              loading={"lazy"}
              className={styles.image} />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <Image src={`/img/contacts-page/gallery/image-6.png`} alt={``} width={440} height={302}
              quality={95}
              loading={"lazy"}
              className={styles.image} />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <Image src={`/img/contacts-page/gallery/image-7.png`} alt={``} width={440} height={302}
              quality={95}
              loading={"lazy"}
              className={styles.image} />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <Image src={`/img/contacts-page/gallery/image-8.png`} alt={``} width={440} height={302}
              quality={95}
              loading={"lazy"}
              className={styles.image} />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <Image src={`/img/contacts-page/gallery/image-9.png`} alt={``} width={440} height={302}
              quality={95}
              loading={"lazy"}
              className={styles.image} />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <Image src={`/img/contacts-page/gallery/image-10.png`} alt={``} width={440} height={302}
              quality={95}
              loading={"lazy"}
              className={styles.image} />
          </SwiperSlide>
          <div className={clsx(styles.buttons)}>
            <RoundButton direction={"prev"}
              onClick={() => {
                swiperRef.current?.slidePrev();
              }} />
            <RoundButton direction={"next"}
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
