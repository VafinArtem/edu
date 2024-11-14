import React, {ReactElement} from "react";
import {DirectionProps} from "./direction.props";
import styles from "./direction.module.css";
import Heading from "@/components/_tags/heading/heading";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import Link from "next/link";
import {getDeclension} from "@/helpers/helpers";
import {Route} from "@/helpers/route";
import {SlugPart} from "@/helpers/contants";

const Direction = ({direction}: DirectionProps): ReactElement | null => {
  return (
    <div className={styles.wrapper} style={{backgroundColor: direction.color, color: direction.color}}>
      <div className={styles.head}>
        <div className={styles.icon} dangerouslySetInnerHTML={{__html: direction.icon}}></div>
        <Heading tag={`h3`} fontSize={"mini"} className={styles.title}>{direction.name}</Heading>
        <Paragraph className={styles.desc} align={"center"}
          fontSize={"small"}>{direction.count} {getDeclension(direction.count ?? 0, ["курс", "курса", "курсов"])} для
          специалистов разных
          направлений</Paragraph>
      </div>
      <div className={styles.scrollWrapper}>
        <div className={styles.specializations}>
          {direction.specializations.map((specialization) => <Link
            key={specialization.id}
            href={`${Route.COURSES}/${SlugPart.CATEGORY}-${direction.alias}/${SlugPart.GROUP}-${specialization.alias}`}
            className={styles.specialization}>{specialization.name}</Link>)}
        </div>
      </div>
    </div>
  );
};

export default Direction;
