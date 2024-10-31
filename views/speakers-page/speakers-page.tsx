import React, {ReactElement} from "react";
import {SpeakersPageProps} from "./speakers-page.props";
import styles from "./speakers-page.module.css";
import Pagination from "@/components/_common/pagination/pagination";
import Link from "next/link";
import {Route} from "@/helpers/route";
import SectionItem from "@/components/_section/section-item/section-item";
import Heading from "@/components/_tags/heading/heading";
import Directions from "@/views/courses-page/components/directions/directions";
import {directions} from "@/mocs/courses";
import ListingPagination from "@/components/_listings/pagination/pagination";
import Search from "@/components/_filters/search/search";

const SpeakersPage = ({}: SpeakersPageProps): ReactElement | null => {
  return (
    <>
      <Pagination className={`container`} pagination={[{name: `Преподаватели`}]} />

      <SectionItem className={`container`}>
        <Heading tag={`h1`} className={styles.title}>Преподаватели центра</Heading>
        <div className={styles.content}>
          <div className={styles.head}>
            <Directions directions={directions} />
            <Search className={styles.search} placeholder={`Имя или фамилия`} labelName={`Поиск по преподавателям`} />
          </div>
          <div className={styles.list}>
          </div>

          <ListingPagination className={styles.pagination} />
        </div>
      </SectionItem>

      <ul className={`container`}>
        <li>
          <Link href={`${Route.SPEAKERS}/preview`} style={{textDecoration: `underline`}}>Преподаватель - превью</Link>
        </li>
        <li>
          <Link href={`${Route.SPEAKERS}/volkova-yulia-valerievna`}
            style={{textDecoration: `underline`}}>Преподаватель (Только локально)</Link>
        </li>
      </ul>
    </>
  );
};

export default SpeakersPage;
