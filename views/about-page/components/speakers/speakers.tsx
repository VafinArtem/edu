"use client";

import Button from "@/components/_buttons/button/button";
import Heading from "@/components/_tags/heading/heading";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import {Route} from "@/helpers/route";
import Image from "next/image";
import Link from "next/link";
import React, {ReactElement} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import styles from "./speakers.module.css";
import {SpeakersProps} from "./speakers.props";
import "swiper/css";

const Speakers = ({speakers}: SpeakersProps): ReactElement | null => {
  return (
    <section className={styles.wrapper}>
      {speakers.length > 0 && <div className={styles.container}>
        <Swiper
          className={styles.slider}
          slidesPerView={"auto"}
          spaceBetween={10}
          breakpoints={{
            1200: {
              spaceBetween: 20,
            },
            1500: {
              spaceBetween: 40,
            },
          }}
        >
          {speakers.map((speaker) => (
            <SwiperSlide className={styles.item} key={speaker.id} style={{backgroundColor: speaker.photoBackground}}>
              <Image className={styles.image} src={speaker.photo} width={180} height={180}
                alt={speaker.name} />
            </SwiperSlide>))}
        </Swiper>
      </div>}
      <div className={"container"}>
        <div className={styles.content}>
          <Heading tag={"h2"} fontSize={"mini"}>Повышайте квалификацию без отрыва от&nbsp;работы и&nbsp;жизни</Heading>
          <Paragraph>У&nbsp;нас вы&nbsp;можете пройти курсы повышения квалификации дистанционно. Обучайтесь независимо
            от&nbsp;местоположения, по&nbsp;свободному графику, в&nbsp;индивидуальном темпе
            и&nbsp;без отрыва от&nbsp;работы.</Paragraph>
          <Button component={Link} href={Route.SPEAKERS}>Все преподаватели центра</Button>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
