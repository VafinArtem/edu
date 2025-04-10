"use client";

import Head from "@/components/_reviews/head/head";
import SectionItem from "@/components/_section/section-item/section-item";
import Heading from "@/components/_tags/heading/heading";
import dynamic from "next/dynamic";
import React, {ReactElement} from "react";
import {ReviewsProps} from "./reviews.props";

const List = dynamic(() => import("@/components/_reviews/list/list"), {
  ssr: false,
});

const Reviews = ({className}: ReviewsProps): ReactElement | null => {
  return (
    <SectionItem className={className}>
      <Heading tag={`h2`} className={`visually-hidden`}>Отзывы</Heading>
      <Head color={"white"} />
      <List />
    </SectionItem>
  );
};

export default Reviews;
