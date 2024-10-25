import React, {ReactElement} from "react";
import {getImageProps} from "next/image";
import {SlideProps} from "./slide.props";
import styles from "./slide.module.css";

const Slide = ({speaker}: SlideProps): ReactElement | null => {
  const {name, photos, specialization} = speaker;

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
    <div className={styles.slide}>
      <picture className={styles.picture} style={{backgroundColor: `#DDDAE3`}}>
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
