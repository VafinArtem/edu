import React, {ReactElement} from "react";
import {getImageProps} from "next/image";
import {SlideProps} from "./slide.props";
import styles from "./slide.module.css";

const Slide = ({speaker}: SlideProps): ReactElement | null => {
  const {name, photos, position} = speaker;

  const common = {alt: "", quality: 95};
  const {
    props: {srcSet: desktop, ...rest},
  } = getImageProps({
    ...common,
    width: 645,
    height: 660,
    priority: true,
    src: photos.desktop,
  });
  const {
    props: {srcSet: laptop},
  } = getImageProps({
    ...common,
    width: 440,
    height: 510,
    src: photos.laptop,
  });
  const {
    props: {srcSet: tablet},
  } = getImageProps({
    ...common,
    width: 708,
    height: 200,
    src: photos.tablet,
  });
  const {
    props: {srcSet: mobile},
  } = getImageProps({
    ...common,
    width: 310,
    height: 150,
    src: photos.mobile,
  });

  return (
    <div className={styles.slide}>
      <picture className={styles.picture}>
        <source media="(min-width: 1500px)" srcSet={desktop} />
        <source media="(max-width: 530px)" srcSet={mobile} />
        <source media="(max-width: 1099px)" srcSet={tablet} />
        <source media="(max-width: 1499px)" srcSet={laptop} />
        <img {...rest} width={440} height={510} alt={``} className={styles.image} />
      </picture>
      <p className={styles.speaker}>
        <span className={styles.name}>{name}</span>
        <span className={styles.position}>{position}</span>
      </p>
    </div>
  );
};

export default Slide;
