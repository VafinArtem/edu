import React, {ReactElement} from "react";
import {PromoProps} from "./promo.props";
import styles from "./promo.module.css";
import clsx from "clsx";
import Heading from "@/components/_tags/heading/heading";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import Button from "@/components/_buttons/button/button";
import {getImageProps} from "next/image";
import {getWorkExperienceText} from "@/helpers/dates-helpers";

const Promo = ({
  className,
  name,
  specialization,
  specializationFull,
  workExperience,
  photos,
  photoBackground,
}: PromoProps): ReactElement | null => {
  const common = {alt: "", quality: 95};

  const {
    props: {srcSet: desktop, ...rest},
  } = getImageProps({
    ...common,
    width: 482,
    height: 480,
    priority: true,
    src: photos.desktop,
  });
  const {
    props: {srcSet: laptop},
  } = getImageProps({
    ...common,
    width: 384,
    height: 433,
    src: photos.desktop,
  });
  const {
    props: {srcSet: tablet},
  } = getImageProps({
    ...common,
    width: 326,
    height: 200,
    src: photos.mobile,
  });
  const {
    props: {srcSet: mobile},
  } = getImageProps({
    ...common,
    width: 234,
    height: 150,
    src: photos.mobile,
  });

  return (
    <section className={clsx(className, styles.wrapper)}>
      <div className={styles.textContent}>
        <Heading tag={`h1`} className={styles.title}>{name}</Heading>
        <ul className={styles.positions}>
          {specialization.split(`, `).map((item, index) => <li key={index} className={styles.position}>{item}</li>)}
        </ul>
        <Paragraph>Стаж работы {getWorkExperienceText(workExperience)}</Paragraph>
        <div className={styles.speciality}>
          <Paragraph className={styles.specialityTitle}>Специализация</Paragraph>
          <Paragraph>{specializationFull}</Paragraph>
        </div>
        <Button component={`a`} href={`#courses`} className={styles.button}>Посмотреть курсы</Button>
      </div>
      <picture className={styles.picture} style={{backgroundColor: photoBackground}}>
        <source media="(min-width: 1500px)" srcSet={desktop} />
        <source media="(max-width: 530px)" srcSet={mobile} />
        <source media="(max-width: 1099px)" srcSet={tablet} />
        <source media="(max-width: 1499px)" srcSet={laptop} />
        <img {...rest} width={440} height={510} alt={``} className={styles.image} />
      </picture>
    </section>
  );
};

export default Promo;
