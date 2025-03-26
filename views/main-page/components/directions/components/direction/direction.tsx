import Heading from "@/components/_tags/heading/heading";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import {SlugPart} from "@/helpers/contants";
import {getDeclension} from "@/helpers/helpers";
import {Route} from "@/helpers/route";
import clsx from "clsx";
import Link from "next/link";
import React, {ReactElement} from "react";
import styles from "./direction.module.css";
import {DirectionProps} from "./direction.props";

const Direction = ({className, direction}: DirectionProps): ReactElement | null => {
  return (
    <div className={clsx(styles.wrapper, className)} style={{backgroundColor: direction.color, color: direction.color}}>
      <div className={styles.head}>
        <div className={styles.icon} dangerouslySetInnerHTML={{__html: direction.icon}}></div>
        <Heading tag={`h3`} fontSize={"mini"} className={styles.title}>{direction.name.nominative}</Heading>
        <Paragraph className={styles.desc} align={"center"}
          fontSize={"small"}>{direction.count} {getDeclension(direction.count ?? 0, ["курс", "курса", "курсов"])} для
          специалистов разных
          направлений</Paragraph>
      </div>
      <div className={styles.scrollWrapper}>
        <div className={styles.specializations}>
          {direction.audience.map((item) => <Link
            key={item.id}
            href={`${Route.COURSES}/${SlugPart.AUDIENCE}-${item.alias}`}
            className={styles.specialization}>{item.name}</Link>)}
        </div>
      </div>
    </div>
  );
};

export default Direction;
