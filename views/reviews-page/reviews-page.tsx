"use client";

import Pagination from "@/components/_common/pagination/pagination";
import ReviewForm from "@/components/_common/review-form/review-form";
import ContainerGray from "@/components/_section/container-gray/container-gray";
import SectionItem from "@/components/_section/section-item/section-item";
import Heading from "@/components/_tags/heading/heading";
import Top from "@/views/reviews-page/components/top/top";
import dynamic from "next/dynamic";
import React, {ReactElement} from "react";
import styles from "./reviews-page.module.css";
import {ReviewsPageProps} from "./reviews-page.props";

const List = dynamic(() => import("@/components/_reviews/list/list"), {
  ssr: false,
});

const ReviewsPage = ({}: ReviewsPageProps): ReactElement | null => {
  return (
    <React.Fragment>
      <Pagination className={`container`} pagination={[{name: `Отзывы`}]} />

      <Top />

      <ContainerGray className={styles.gray}>
        <SectionItem className={`container`}>
          <Heading tag={"h1"}>Отзывы</Heading>
          <List />
        </SectionItem>
      </ContainerGray>

      <ReviewForm className={styles.reviewForm} />

    </React.Fragment>
  );
};

export default ReviewsPage;
