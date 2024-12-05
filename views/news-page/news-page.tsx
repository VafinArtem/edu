"use client";

import FilterButton from "@/components/_buttons/filter-button/filter-button";
import NewsCard from "@/components/_common/news-card/news-card";
import Pagination from "@/components/_common/pagination/pagination";
import Subscribe from "@/components/_common/subscribe/subscribe";
import ListingPagination from "@/components/_listings/pagination/pagination";
import SectionItem from "@/components/_section/section-item/section-item";
import Heading from "@/components/_tags/heading/heading";
import {news} from "@/mocs/news";
import React, {ReactElement} from "react";
import styles from "./news-page.module.css";
import {NewsPageProps} from "./news-page.props";

const NewsPage = ({}: NewsPageProps): ReactElement | null => {
  return (
    <React.Fragment>
      <Pagination className={`container`} pagination={[{name: `Новости`}]} />

      <SectionItem className={`container`}>
        <Heading tag={`h1`} fontSize={"large"} align={"center"}>Новости учебного центра</Heading>
        <div className={styles.content}>
          <div className={styles.filters}>
            <FilterButton option={{
              name: `Все новости`,
              value: `Все новости`,
              alias: `all`,
            }} />
            <FilterButton option={{
              name: `События`,
              value: `События`,
              alias: `events`,
            }} />
            <FilterButton option={{
              name: `Курсы, лекции, семинары`,
              value: `Курсы, лекции, семинары`,
              alias: `courses`,
            }} />
          </div>
          <div className={styles.list}>
            {news.map((item) => <NewsCard news={item} key={item.id} />)}
          </div>
          <ListingPagination
            currentPage={1}
            pages={3}
            className={styles.pagination}
          />
        </div>
      </SectionItem>
      <div className="container">
        <Subscribe />
      </div>
    </React.Fragment>
  );
};

export default NewsPage;
