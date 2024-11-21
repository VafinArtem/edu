"use client";

import SocialItem from "@/components/_social/social-item/social-item";
import Social from "@/components/_social/social/social";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import IconVK from "@/layout/footer/vk.svg";
import IconYouTube from "@/layout/footer/youtube.svg";
import clsx from "clsx";
import dynamic from "next/dynamic";
import React, {ReactElement} from "react";
import styles from "./location.module.css";
import {LocationProps} from "./location.props";

const YaMap = dynamic(async () => await import("@/components/_location/ya-map/ya-map"), {
  ssr: false,
});

const Location = ({className}: LocationProps): ReactElement | null => {
  return (
    <section className={clsx(styles.wrapper, className)}>
      <div className={styles.content}>
        <Paragraph fontSize={"asDefaultTitle"} className={styles.title}>Находимся<br />
          в&nbsp;Санкт-Петербурге</Paragraph>
        <address className={styles.address}>Московский проспект, дом 183-185, Учебный центр Амрита, помещение 800-H
        </address>
        <Paragraph className={styles.workHours}>Режим работы: Пн-чт 09:00 — 18:00; Пт 09:00 — 17:00</Paragraph>
        <a href={`https://yandex.ru/maps/?rtext=~59.856994%2C30.317404`} target="_blank"
          rel="noopener noreferrer" className={styles.direction}>Проложить маршрут</a>
        <div className={styles.footer}>
          <div className={styles.contacts}>
            <a href={`mailto:edu@amrita-dent.ru`} className={styles.contact}>edu@amrita-dent.ru</a>
            <a href={`tel:+78005500524`} className={styles.contact}>8-800-550-05-24</a>
          </div>
          <Social className={styles.social}>
            <SocialItem
              href={`https://www.youtube.com/channel/UCsWR0CGP1OLaQTFA0iEg61Q`}
              aria-label={`YouTube`}
              icon={(className: string) => <IconYouTube className={className} width={40} height={40} />}
            />
            <SocialItem
              href={`https://vk.com/amritadent`}
              aria-label={`Вконтакте`}
              icon={(className: string) => <IconVK className={className} width={40} height={40} />}
            />
          </Social>
        </div>
      </div>
      <div className={styles.map}>
        <YaMap coordinates={[30.317404, 59.856994]} />
      </div>
    </section>
  );
};

export default Location;
