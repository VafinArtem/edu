"use client";

import Button from "@/components/_slider/button/button";
import clsx from "clsx";
import {nanoid} from "nanoid";
import Image from "next/image";
import React, {ReactElement, useRef} from "react";
import {Navigation} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import {Swiper as SwiperCore} from "swiper/types";
import styles from "./images-slider.module.css";
import "swiper/css";
import {ImagesSliderProps} from "./images-slider.props";

const ImagesSlider = ({className, images}: ImagesSliderProps): ReactElement | null => {
  const swiperRef = useRef<SwiperCore>();

  return (
    <div className={clsx(className, styles.wrapper)}>
      <Swiper
        modules={[Navigation]}
        className={styles.slider}
        spaceBetween={10}
        slidesPerView={`auto`}
        loop={true}
        breakpoints={{
          768: {
            spaceBetween: 20,
          },
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {images.map((image) => (<SwiperSlide className={styles.slide} key={nanoid(20)}>
          <Image src={image} alt={``} width={780} height={435}
            quality={95}
            loading={"lazy"}
            className={styles.image} />
        </SwiperSlide>))}
        {images.length < 4 && images.map((image) => (<SwiperSlide className={styles.slide} key={nanoid(20)}>
          <Image src={image} alt={``} width={780} height={435}
            quality={95}
            loading={"lazy"}
            className={styles.image} />
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
  );
};

export default ImagesSlider;
