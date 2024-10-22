"use client";

import React, {ReactElement} from "react";
import {LocationProps} from "./location.props";
import styles from "./location.module.css";
import Heading from "@/components/_tags/heading/heading";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import Image from "next/image";
import {formatPhoneNumber} from "@/helpers/helpers";
import clsx from "clsx";
import dynamic from "next/dynamic";

const YaMap = dynamic(async () => await import("./components/ya-map/ya-map"), {
  ssr: false,
});

const Location = ({className, place}: LocationProps): ReactElement | null => {
  const {city, address, metro, email, phone, desc, photos, position} = place;
  const coordinates = position.toReversed();

  return (
    <>
      <section className={clsx(className, styles.wrapper)}>
        <div className={styles.map}>
          <YaMap coordinates={coordinates as [number, number]} />
        </div>
        <div className={styles.content}>
          <Heading tag={`h2`} className={styles.title}>Место проведения интенсива <span
            className={styles.city}>{city}</span></Heading>
          <address className={styles.address}>{address}</address>
          {metro &&
            <Paragraph fontSize={"small"} className={styles.metro}><Image src={metro.icon} width={24} height={24}
              alt={`Иконка метро ${city}`} /> {metro.station}</Paragraph>}
          <a href={`https://yandex.ru/maps/?rtext=~${position[0]}%2C${position[1]}`} target="_blank"
            rel="noopener noreferrer" className={styles.direction}>Проложить маршрут</a>
          {(email || metro) && <div className={styles.contacts}>
            {email && <a href={`mailto:${email}`} className={styles.contact}>{email}</a>}
            {phone && <a href={`tel:${formatPhoneNumber(phone)}`} className={styles.contact}>{phone}</a>}
          </div>}
        </div>

        {(photos || desc) && <div className={styles.footer}>
          {desc && <Paragraph className={styles.desc}>{desc}</Paragraph>}
          {(photos && photos.length > 0) && <div className={styles.photos}>
            {photos.map((photo, index) => (
              <Image className={styles.photo} key={index} src={photo} alt={``} width={425} height={292} />))}
          </div>}
        </div>}

      </section>
    </>
  );
};

export default Location;
