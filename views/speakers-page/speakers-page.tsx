import React, {ReactElement} from "react";
import {SpeakersPageProps} from "./speakers-page.props";
import styles from "./speakers-page.module.css";
import Pagination from "@/components/_common/pagination/pagination";
import SectionItem from "@/components/_section/section-item/section-item";
import Heading from "@/components/_tags/heading/heading";
import Directions from "@/views/courses-page/components/directions/directions";
import {directions} from "@/mocs/courses";
import ListingPagination from "@/components/_listings/pagination/pagination";
import Search from "@/components/_filters/search/search";
import {speakers} from "@/mocs/speakers";
import SpeakerShortItem from "@/components/_common/speaker-short-item/speaker-short-item";
import BecomeSpeaker from "@/components/_common/become-speaker/become-speaker";
import SimilarCourses from "@/components/_common/similar-courses/similar-courses";
import {similarCourses} from "@/mocs/training";

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
            {speakers.map((speaker) => (<SpeakerShortItem key={speaker.id} speaker={speaker} />))}
          </div>

          <ListingPagination className={styles.pagination} />
        </div>
      </SectionItem>

      <BecomeSpeaker />

      {similarCourses && <SimilarCourses
        className={`container`}
        title={`Может заинтересовать`}
        cardColor={`white`}
        courses={similarCourses} />}
    </>
  );
};

export default SpeakersPage;
