import Paragraph from "@/components/_tags/paragraph/paragraph";
import Image from "next/image";
import React, {ReactElement} from "react";
import styles from "./review.module.css";
import {ReviewProps} from "./review.props";

const Review = ({review}: ReviewProps): ReactElement | null => {
  const {name, position, avatar, text} = review;

  return (
    <article className={styles.wrapper}>
      <div className={styles.head}>
        <Paragraph className={styles.name} fontWeight={"medium"} fontSize={"none"}>{name}</Paragraph>
        <Paragraph className={styles.position} fontSize={"none"}>{position}</Paragraph>
        <Image src={avatar} alt={``} width={50} height={50} className={styles.avatar} />
      </div>
      <Paragraph className={styles.text} fontSize={"none"} dangerouslySetInnerHTML={{__html: text}} />
    </article>
  );
};

export default Review;
