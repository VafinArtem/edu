import React, {ReactElement} from "react";
import {CoursesPageProps} from "./courses-page.props";
import styles from "./courses-page.module.css";
import Pagination from "@/components/_common/pagination/pagination";
import SectionItem from "@/components/_section/section-item/section-item";
import Heading from "@/components/_tags/heading/heading";
import Link from "next/link";
import {Route} from "@/helpers/route";
import Filters from "@/views/courses-page/components/filters/filters";

const CoursesPage = ({}: CoursesPageProps): ReactElement | null => {
  return (
    <>
      <Pagination className={`container`} pagination={[{name: `Курсы`}]} />

      <SectionItem className={`container`}>
        <Heading tag={`h1`} className={styles.title}>Каталог курсов AMRITA<span
          className={styles.count}>&nbsp;40</span></Heading>

        <div className={styles.grid}>
          <div className={styles.filters}>
            <Filters />
          </div>
          <div className={styles.content}></div>
        </div>
      </SectionItem>

      <ul className={`container`}>
        <li>
          <Link href={`${Route.COURSES}/preview`} style={{textDecoration: `underline`}}>Один курс - превью</Link>
        </li>
        <li>
          <Link href={`${Route.COURSES}/klinicheskaya-paradantalogya`} style={{textDecoration: `underline`}}>Карточка
            1</Link>
        </li>
        <li>
          <Link href={`${Route.COURSES}/bazovyi-kurs-po-implantologii-ortopedicheskii-etap`}
            style={{textDecoration: `underline`}}>Карточка 2</Link>
        </li>
      </ul>
    </>
  );
};

export default CoursesPage;
