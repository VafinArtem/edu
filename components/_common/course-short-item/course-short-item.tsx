import React, {ReactElement} from "react";
import {CourseShortItemProps} from "./course-short-item.props";
import styles from "./course-short-item.module.css";
import Heading from "@/components/_tags/heading/heading";
import {formatPrice} from "@/helpers/helpers";
import {Route} from "@/helpers/route";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import LinkArrow from "@/components/_links/link-arrow/link-arrow";
import clsx from "clsx";
import Image from "next/image";

const CourseShortItem = ({
  course,
  withPhoto,
  background = "gray",
  className,
}: CourseShortItemProps): ReactElement | null => {
  const {icon, courseTypeName, name, date, location, price, id, photo, speakers} = course;

  return (
    <article className={clsx(styles.wrapper, className, {
      [styles.withPhoto]: withPhoto && photo,
      [styles.whiteBg]: background === "white",
    })}>
      {(withPhoto && photo) &&
        <div className={styles.head}>
          {(speakers && speakers.length > 0) && <p className={styles.speakers}>
            {speakers.map((item, index) => <span key={`${item}-${index}`}>{item}</span>)}
          </p>}
          <Image src={photo} alt={``} quality={95} width={426} height={204} />
        </div>
      }
      <div className={styles.inner}>
        <p className={styles.type}>
          {icon && <span className={styles.iconType} dangerouslySetInnerHTML={{__html: icon}}></span>}
          {courseTypeName}
        </p>
        <div className={styles.content}>
          <Heading tag={`h3`} fontWeight={"medium"} fontSize={"none"} className={styles.name}>{name}</Heading>
          {date && <Paragraph fontSize={"none"} className={styles.date}>{date}</Paragraph>}
          {location && <Paragraph fontSize={"none"} className={styles.location}>{location}</Paragraph>}
        </div>
        <div className={styles.footer}>
          <Paragraph fontWeight={"medium"} fontSize={"none"} className={styles.price}>{formatPrice(price)} ₽</Paragraph>
          <LinkArrow
            href={`${Route.TRAINING}/${id}`}
            color={"primary"}
            iconDirection={"mid-right"}
            borderRadius={"small"}
            className={styles.link}
            size={"small"}
            withBackground
          >
            Содержание курса
          </LinkArrow>
        </div>
      </div>
    </article>
  );
};

export default CourseShortItem;
