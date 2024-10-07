import React, {ReactElement} from "react";
import {CourseShortItemProps} from "./course-short-item.props";
import styles from "./course-short-item.module.css";
import Heading from "@/components/_tags/heading/heading";
import {formatPrice} from "@/helpers/helpers";
import {Route} from "@/helpers/route";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import LinkArrow from "@/components/_links/link-arrow/link-arrow";
import clsx from "clsx";

const CourseShortItem = ({course, className}: CourseShortItemProps): ReactElement | null => {
  const {icon, courseTypeName, name, date, location, price, id} = course;

  return (
    <article className={clsx(styles.wrapper, className)}>
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
    </article>
  );
};

export default CourseShortItem;
