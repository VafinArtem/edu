import Button from "@/components/_buttons/button/button";
import SectionItem from "@/components/_section/section-item/section-item";
import Heading from "@/components/_tags/heading/heading";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import {Route} from "@/helpers/route";
import Direction from "@/views/main-page/components/promo/direction/direction";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React, {ReactElement} from "react";
import styles from "./not-found-page.module.css";
import {NotFoundPageProps} from "./not-found-page.props";

const NotFoundPage = ({directions, color = "gray"}: NotFoundPageProps): ReactElement | null => {
  return (
    <React.Fragment>
      <div className="container">
        <section className={clsx(styles.wrapper, {
          [styles.white]: color === "white",
        })}>
          <Image src={`/img/not-found-page/404.svg`} alt={`Ошибка 404`} width={495} height={215} priority={true} />
          <div className={styles.content}>
            <Heading tag={`h1`} className={styles.title}>Такой страницы не&nbsp;существует</Heading>
            <Paragraph>Вероятно вы&nbsp;ввели неверный адрес или страница была удалена.</Paragraph>
            <Paragraph>В&nbsp;нашем каталоге вы&nbsp;можете найти множество курсов, лекций и&nbsp;вебинаров для
              медицинских специалистов и&nbsp;косметологов.</Paragraph>
            <div className={styles.footer}>
              <Button component={Link} href={Route.COURSES}>Перейти в каталог курсов</Button>
            </div>
          </div>
        </section>
      </div>
      {directions.length > 0 && <SectionItem className={`container`}>
        <Heading tag={`h2`}>Направления</Heading>
        <ul className={styles.directionList}>
          {directions.map((direction) => <Direction key={direction.id} direction={direction} />)}
        </ul>
      </SectionItem>}
    </React.Fragment>
  );
};

export default NotFoundPage;
