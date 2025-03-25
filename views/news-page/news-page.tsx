"use client";

import FilterButton from "@/components/_buttons/filter-button/filter-button";
import NewsCard from "@/components/_common/news-card/news-card";
import Pagination from "@/components/_common/pagination/pagination";
import ListingPagination from "@/components/_listings/pagination/pagination";
import SectionItem from "@/components/_section/section-item/section-item";
import Heading from "@/components/_tags/heading/heading";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import React, {ReactElement, useEffect, useState} from "react";
import styles from "./news-page.module.css";
import {NewsPageProps} from "./news-page.props";

const NewsPage = ({cards, pages, types}: NewsPageProps): ReactElement | null => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const {push} = useRouter();

  const [type, setType] = useState<string>(`all`);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    if (type !== `all`) {
      params.set(`type`, `${type}`);
    } else {
      params.delete(`type`);
    }

    push(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  }, [type]);

  return (
    <React.Fragment>
      <Pagination className={`container`} pagination={[{name: `Новости`}]} />

      <SectionItem className={`container`}>
        <Heading tag={`h1`} fontSize={"large"} align={"center"}>Новости учебного центра</Heading>
        <div className={styles.content}>
          {types.length > 0 && <div className={styles.filters}>
            <FilterButton
              onClick={() => {
                setType(`all`);
              }}
              isActive={type === "all"}
              option={{
                name: `Все новости`,
                value: `all`,
                alias: `all`,
              }} />
            {types.map(({name, value, alias}) => (<FilterButton
              key={value}
              onClick={() => {
                setType(value);
              }}
              isActive={type === value}
              option={{
                name,
                value,
                alias,
              }} />))}
          </div>}
          <div className={styles.list}>
            {cards.map((item) => <NewsCard news={item} key={item.id} />)}
          </div>
          <ListingPagination
            pages={pages}
            className={styles.pagination}
          />
        </div>
      </SectionItem>
      {/*<div className="container">*/}
      {/*  <Subscribe />*/}
      {/*</div>*/}
    </React.Fragment>
  );
};

export default NewsPage;
