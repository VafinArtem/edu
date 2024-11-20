import {getImageProps} from "next/image";
import React, {ReactElement} from "react";
import styles from "./slide.module.css";
import {SlideProps} from "./slide.props";

const Slide = ({speaker}: SlideProps): ReactElement | null => {
  const {name, photo, specialization, photoBackground} = speaker;

  const common = {alt: "", quality: 95};
  const {
    props: {srcSet: desktop, ...rest},
  } = getImageProps({
    ...common,
    width: 482,
    height: 480,
    priority: true,
    src: `${process.env.NEXT_PUBLIC_IMAGE_SERVER}${photo}`,
  });
  const {
    props: {srcSet: laptop},
  } = getImageProps({
    ...common,
    width: 384,
    height: 433,
    src: `${process.env.NEXT_PUBLIC_IMAGE_SERVER}${photo}`,
  });
  const {
    props: {srcSet: tablet},
  } = getImageProps({
    ...common,
    width: 326,
    height: 200,
    src: `${process.env.NEXT_PUBLIC_IMAGE_SERVER}${photo}`,
  });
  const {
    props: {srcSet: mobile},
  } = getImageProps({
    ...common,
    width: 234,
    height: 150,
    src: `${process.env.NEXT_PUBLIC_IMAGE_SERVER}${photo}`,
  });

  return (
    <div className={styles.slide}>
      <picture className={styles.picture} style={{backgroundColor: photoBackground}}>
        <source media="(min-width: 1500px)" srcSet={desktop} />
        <source media="(max-width: 530px)" srcSet={mobile} />
        <source media="(max-width: 1099px)" srcSet={tablet} />
        <source media="(max-width: 1499px)" srcSet={laptop} />
        <img {...rest} width={440} height={510} alt={``} className={styles.image} />
      </picture>
      <p className={styles.speaker}>
        <span className={styles.name}>{name}</span>
        <span className={styles.position}>{specialization}</span>
      </p>
    </div>
  );
};

export default Slide;
