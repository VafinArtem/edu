import Paragraph from "@/components/_tags/paragraph/paragraph";
import {Route} from "@/helpers/route";
import Image from "next/image";
import Link from "next/link";
import React, {ReactElement} from "react";
import styles from "./news-card.module.css";
import {NewsCardProps} from "./news-card.props";

const NewsCard = ({news}: NewsCardProps): ReactElement | null => {
  const {description, image, tag, title, alias} = news;
  return (
    <article className={styles.wrapper}>
      <Link href={`${Route.NEWS}/${alias}`} className={styles.link}>
        <picture className={styles.picture}>
          <Image src={`${process.env.NEXT_PUBLIC_IMAGE_SERVER}${image}`} alt={``} width={553} height={287}
            className={styles.image} />
        </picture>
        <div className={styles.content}>
          <Paragraph fontSize={"none"} fontWeight={"medium"} className={styles.tag}>{tag}</Paragraph>
          <Paragraph fontSize={"large"} fontWeight={"medium"} className={styles.title}>{title}</Paragraph>
          <Paragraph fontSize={"none"} className={styles.description}>{description}</Paragraph>
        </div>
      </Link>
    </article>
  );
};

export default NewsCard;
