"use client";

import React, {ReactElement, useRef, useState} from "react";
import {SpeakerItemProps} from "./speaker-item.props";
import styles from "./speaker-item.module.css";
import Image from "next/image";
import Heading from "@/components/_tags/heading/heading";
import ExternalBgLink from "@/components/_links/external-bg-link/external-bg-link";
import EduItem from "@/components/_course/edu-item/edu-item";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import {Route} from "@/helpers/route";
import {Swiper, SwiperSlide} from "swiper/react";
import {Swiper as SwiperCore} from "swiper/types";
import Button from "@/components/_slider/button/button";
import clsx from "clsx";
import {getWorkExperienceText} from "@/helpers/helpers";

const SpeakerItem = ({
  name,
  position,
  specialization,
  photo,
  video,
  workExperience,
  edu,
  id,
  cite,
  aboutSlides,
  photoBackground,
}: SpeakerItemProps): ReactElement | null => {
  const [isEnd, setIsEnd] = useState<boolean>(false);
  const [isBeginning, setIsBeginning] = useState<boolean>(false);
  const swiperRef = useRef<SwiperCore>();

  return (
    <li className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.preview}>
          {video && <video className={styles.video} poster={photo}>
            <source srcSet={video} type="video/mp4" />
          </video>}
          {!video && <picture className={styles.picture} style={{backgroundColor: photoBackground}}>
            <Image src={photo} alt={``} width={1330} height={648} className={styles.img} quality={95} />
          </picture>}
        </div>
        <div className={styles.content}>
          <div className={styles.head}>
            <Heading tag={`h3`} fontSize={`mini`} fontWeight={`medium`} className={styles.name}>{name}</Heading>
            <Paragraph className={styles.position} fontSize={`small`}>{specialization}. {position}</Paragraph>
          </div>
          <Paragraph className={styles.workExperience} fontWeight={"light"} fontSize={`none`}>Стаж
            работы {getWorkExperienceText(workExperience)}</Paragraph>
          <Swiper
            className={styles.slider}
            spaceBetween={1}
            slidesPerView={1}
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
            {aboutSlides.map((text, index) => <SwiperSlide key={index} className={styles.slide}>
              <div className={styles.slideContent} dangerouslySetInnerHTML={{__html: text}}></div>
            </SwiperSlide>)}
          </Swiper>
          <div className={styles.buttons}>
            <Button disabled={isBeginning} direction={"prev"} background={"primary"} size={"mini"}
              onClick={() => {
                swiperRef.current?.slidePrev();
              }} />
            <div className={styles.pagination}>
              {swiperRef.current?.slides.map((item, index) => (
                <span key={index} className={clsx(styles.paginationItem, {
                  [styles.active]: index === swiperRef.current?.activeIndex,
                })}></span>))}
            </div>
            <Button disabled={isEnd} direction={"next"} background={"primary"} size={"mini"}
              onClick={() => {
                swiperRef.current?.slideNext();
              }} />
          </div>
        </div>
      </div>
      {cite && <blockquote className={styles.cite}>{cite}</blockquote>}
      <div className={styles.edu}>
        <div className={styles.eduHead}>
          <Heading tag={`h4`} fontSize={`mini`}>Образование и&nbsp;награды</Heading>
          <ExternalBgLink href={`${Route.SPEAKERS}/${id}`}>Страница преподавателя</ExternalBgLink>
        </div>
        {(edu && edu.length > 0) && <ul className={styles.eduList}>
          {edu.map((item, index) => <EduItem className={styles.eduItem} key={index} {...item} />)}
        </ul>}
      </div>
    </li>
  );
};

export default SpeakerItem;
