import ButtonArrow from "@/components/_buttons/button-arrow/button-arrow";
import Heading from "@/components/_tags/heading/heading";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import {convertShortCourseDate} from "@/helpers/dates-helpers";
import {formatPrice, getDeclension} from "@/helpers/helpers";
import {Route} from "@/helpers/route";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React, {ReactElement} from "react";
import styles from "./course-short-item.module.css";
import {CourseShortItemProps} from "./course-short-item.props";

const CourseShortItem = ({
  course,
  withPhoto,
  background = "gray",
  isPastCourse,
  className,
}: CourseShortItemProps): ReactElement | null => {
  const {icon, courseType, name, dates, days, location, price, photo, photoBackground, speakers, alias} = course;

  return (
    <article className={clsx(styles.wrapper, className, {
      [styles.withPhoto]: withPhoto && photo,
      [styles.whiteBg]: background === "white",
      [styles.past]: isPastCourse,
    })}>
      {(withPhoto && photo) &&
        <div className={styles.head} style={{backgroundColor: photoBackground}}>
          {(speakers && speakers.length > 0) && <p className={styles.speakers}>
            {speakers.map((item, index) => <span key={`${item}-${index}`}>{item}</span>)}
          </p>}
          <Image src={`${process.env.NEXT_PUBLIC_IMAGE_SERVER}${photo}`} alt="" width={426} height={204}
            className={styles.image} quality={95} />
        </div>
      }
      <div className={styles.inner}>
        <p className={styles.type} style={{color: courseType.color, backgroundColor: courseType.background}}>
          {icon && <span className={styles.iconType} dangerouslySetInnerHTML={{__html: icon}}></span>}
          {courseType.name}
        </p>
        <div className={styles.content}>
          <Heading tag={`h3`} fontWeight={"medium"} fontSize={"none"} className={styles.name}>{name}</Heading>
          {dates && <Paragraph fontSize={"none"} className={styles.date}>
            {convertShortCourseDate(dates.start)}
            {dates.end && ` — ${convertShortCourseDate(dates.end)}`}
          </Paragraph>}
          {location && <Paragraph fontSize={"none"} className={styles.location}>{location}</Paragraph>}
        </div>
        <div className={styles.footer}>
          {isPastCourse && <Paragraph fontWeight={"medium"} fontSize={"none"}
            className={styles.complete}>Завершён</Paragraph>}

          {(Boolean(price) && !isPastCourse) && <div className={styles.priceWrapper}>
            <Paragraph fontWeight={"medium"} fontSize={"none"}
              className={styles.price}>от {formatPrice(price)} ₽
            </Paragraph>
            {days && <Paragraph fontSize={"none"}
              className={styles.duration}>{days} {getDeclension(days, ["день", "дня", "дней"])}
            </Paragraph>}
          </div>}
          <ButtonArrow
            component={Link}
            href={`${Route.COURSES}/course-${alias}`}
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
