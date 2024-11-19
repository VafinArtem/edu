"use client";

import BecomeSpeaker from "@/components/_common/become-speaker/become-speaker";
import Pagination from "@/components/_common/pagination/pagination";
import SpeakerShortItem from "@/components/_common/speaker-short-item/speaker-short-item";
import SectionItem from "@/components/_section/section-item/section-item";
import Heading from "@/components/_tags/heading/heading";
import React, {ReactElement} from "react";
import styles from "./speakers-page.module.css";
import {SpeakersPageProps} from "./speakers-page.props";

const SpeakersPage = ({speakers}: SpeakersPageProps): ReactElement | null => {
  return (
    <>
      <Pagination className={`container`} pagination={[{name: `Преподаватели`}]} />

      <SectionItem className={`container`}>
        <Heading tag={`h1`} className={styles.title}>Преподаватели центра</Heading>
        <div className={styles.content}>
          {/*<div className={styles.head}>*/}
          {/*  <Directions directions={directions} />*/}
          {/*  <Search*/}
          {/*    className={styles.search}*/}
          {/*    placeholder={`Имя или фамилия`}*/}
          {/*    labelName={`Поиск по преподавателям`}*/}
          {/*    resetCB={() => {*/}
          {/*      const params = new URLSearchParams(searchParams);*/}

          {/*      params.delete("query");*/}

          {/*      push(`${pathname}?${params.toString()}`, {*/}
          {/*        scroll: false,*/}
          {/*      });*/}
          {/*    }}*/}
          {/*    onChange={(e) => {*/}
          {/*      const term = e.target.value;*/}

          {/*      const params = new URLSearchParams(searchParams);*/}

          {/*      if (term) {*/}
          {/*        params.set("query", term);*/}
          {/*      } else {*/}
          {/*        params.delete("query");*/}
          {/*      }*/}

          {/*      push(`${pathname}?${params.toString()}`, {*/}
          {/*        scroll: false,*/}
          {/*      });*/}
          {/*    }}*/}
          {/*  />*/}
          {/*</div>*/}
          <div className={styles.list}>
            {speakers.map((speaker) => (<SpeakerShortItem key={speaker.id} speaker={speaker} />))}
          </div>

          {/*<ListingPagination className={styles.pagination} pages={pages} currentPage={currentPage} />*/}
        </div>
      </SectionItem>

      <BecomeSpeaker />

      {/*{similarCourses && <SimilarCourses*/}
      {/*  className={`container`}*/}
      {/*  title={`Может заинтересовать`}*/}
      {/*  cardColor={`white`}*/}
      {/*  courses={similarCourses} />}*/}
    </>
  );
};

export default SpeakersPage;
