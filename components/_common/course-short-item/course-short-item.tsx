import React, {ReactElement} from "react";
import {CourseShortItemProps} from "./course-short-item.props";
import styles from "./course-short-item.module.css";
import Heading from "@/components/_tags/heading/heading";
import {convertShortCourseDate, formatPrice} from "@/helpers/helpers";
import {Route} from "@/helpers/route";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import clsx from "clsx";
import {getImageProps} from "next/image";
import ButtonArrow from "@/components/_buttons/button-arrow/button-arrow";
import Link from "next/link";

const CourseShortItem = ({
  course,
  withPhoto,
  positionPhoto = "top",
  background = "gray",
  isPastCourse,
  className,
}: CourseShortItemProps): ReactElement | null => {
  const {icon, courseType, name, date, location, price, photo, photoMobile, speakers, alias} = course;

  const common = {alt: "", quality: 95};
  const {
    props: {srcSet: desktop, ...rest},
  } = getImageProps({
    ...common,
    width: 645,
    height: 660,
    priority: true,
    src: photo ?? ``,
  });

  const {
    props: {srcSet: mobile},
  } = getImageProps({
    ...common,
    width: 310,
    height: 150,
    src: photoMobile ?? ``,
  });

  return (
    <article className={clsx(styles.wrapper, className, {
      [styles.withPhoto]: withPhoto && photo,
      [styles.photoLeft]: withPhoto && photo && positionPhoto === "left",
      [styles.whiteBg]: background === "white",
      [styles.past]: isPastCourse,
    })}>
      {(withPhoto && photo) &&
        <div className={styles.head}>
          {(speakers && speakers.length > 0) && <p className={styles.speakers}>
            {speakers.map((item, index) => <span key={`${item}-${index}`}>{item}</span>)}
          </p>}
          <picture className={styles.picture}>
            <source media="(min-width: 768px)" srcSet={desktop} />
            {positionPhoto === `left` && <source media="(max-width: 767px)" srcSet={mobile} />}
            <img {...rest} width={positionPhoto !== "left" ? 426 : 175} alt={``}
              height={positionPhoto !== "left" ? 204 : 208} className={styles.image} />
          </picture>
        </div>
      }
      <div className={styles.inner}>
        <p className={styles.type} style={{color: courseType.color, backgroundColor: courseType.background}}>
          {icon && <span className={styles.iconType} dangerouslySetInnerHTML={{__html: icon}}></span>}
          {courseType.name}
        </p>
        <div className={styles.content}>
          <Heading tag={`h3`} fontWeight={"medium"} fontSize={"none"} className={styles.name}>{name}</Heading>
          {date && <Paragraph fontSize={"none"} className={styles.date}>{convertShortCourseDate(date)}</Paragraph>}
          {location && <Paragraph fontSize={"none"} className={styles.location}>{location}</Paragraph>}
        </div>
        <div className={styles.footer}>
          {isPastCourse && <Paragraph fontWeight={"medium"} fontSize={"none"}
            className={styles.complete}>Завершён</Paragraph>}
          {!isPastCourse && <Paragraph fontWeight={"medium"} fontSize={"none"}
            className={styles.price}>{formatPrice(price)} ₽</Paragraph>}
          <ButtonArrow
            component={Link}
            href={`${Route.COURSES}/${alias}`}
            color={"primary"}
            iconDirection={"mid-right"}
            borderRadius={"small"}
            className={styles.link}
            size={"small"}
            withBackground
          >
            Содержание курса
          </ButtonArrow>
        </div>
      </div>
    </article>
  );
};

export default CourseShortItem;
