import Paragraph from "@/components/_tags/paragraph/paragraph";
import {SlugPart} from "@/helpers/contants";
import {getDeclension} from "@/helpers/helpers";
import {Route} from "@/helpers/route";
import Link from "next/link";
import React, {ReactElement} from "react";
import styles from "./direction.module.css";
import {DirectionProps} from "./direction.props";

const Direction = ({direction}: DirectionProps): ReactElement | null => {
  return (
    <li className={styles.wrapper}
      style={{backgroundColor: direction.color, color: direction.color}}>
      <Link href={`${Route.COURSES}/${SlugPart.CATEGORY}-${direction.alias}`} className={styles.link}>
        <span className={styles.icon} dangerouslySetInnerHTML={{__html: direction.icon}}></span>
        <div className={styles.content}>
          <Paragraph fontSize={"none"} className={styles.name}>{direction.name.dative}</Paragraph>
          {direction.count && <Paragraph fontSize={"small"}
            className={styles.count}>{direction.count} {getDeclension(direction.count, ["курс", "курса", "курсов"])}</Paragraph>}
        </div>
      </Link>
    </li>
  );
};

export default Direction;
