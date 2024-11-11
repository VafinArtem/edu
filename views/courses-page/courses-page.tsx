"use client";

import React, {ReactElement} from "react";
import {useSearchParams} from "next/navigation";
import {CoursesPageProps} from "./courses-page.props";
import styles from "./courses-page.module.css";
import Pagination from "@/components/_common/pagination/pagination";
import SectionItem from "@/components/_section/section-item/section-item";
import Heading from "@/components/_tags/heading/heading";
import Filters from "@/views/courses-page/components/filters/filters";
import useIsResolution from "@/hooks/useIsResolution";
import useOpenModal from "@/hooks/useOpenModal";
import Directions from "@/views/courses-page/components/directions/directions";
import Sort from "@/components/_listings/sort/sort";
import CourseShortItem from "@/components/_common/course-short-item/course-short-item";
import ListingPagination from "@/components/_listings/pagination/pagination";
import NotFindCourse from "@/components/_common/not-find-course/not-find-course";
import ContainerWhite from "@/components/_course/container-white/container-white";
import FocusInCourse from "@/views/courses-page/components/focus-in-course/focus-in-course";
import PastCourses from "@/views/courses-page/components/past-courses/past-courses";

const CoursesPage = ({courses, pages, filters, courseTypes, directions}: CoursesPageProps): ReactElement | null => {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams?.get(`page`)) || 1;

  const {ref, showModal, changeModalActivityStatus} = useOpenModal<HTMLFormElement>();
  const isMobile = useIsResolution(1099);

  return (
    <>
      <Pagination className={`container`} pagination={[{name: `Курсы`}]} />

      <SectionItem className={`container`}>
        <Heading tag={`h1`} className={styles.title}>Каталог курсов AMRITA<span
          className={styles.count}>&nbsp;40</span></Heading>

        <div className={styles.grid}>
          <Filters setShowMobileFilters={changeModalActivityStatus} showMobileFilters={showModal} ref={ref}
            filters={filters} courseTypes={courseTypes} />
          <div className={styles.content}>
            <div className={styles.head}>
              <Directions
                directions={directions}
              >
                <button className={styles.showFilters} onClick={() => {
                  if (isMobile) {
                    changeModalActivityStatus(true);
                  }
                }}>Все фильтры
                </button>
              </Directions>
              <Sort
                defaultName={`Сначала ближайшие`}
                initialValue={searchParams.get(`sort`) ?? ``}
              />
            </div>
            <div className={styles.list}>
              {courses.map((course) => <CourseShortItem course={course} key={course.id} withPhoto />)}
            </div>

            <ListingPagination
              currentPage={currentPage}
              pages={pages}
              className={styles.pagination}
            />
          </div>
        </div>
      </SectionItem>

      <NotFindCourse />

      <ContainerWhite>
        <FocusInCourse />
        <PastCourses />
      </ContainerWhite>
    </>
  );
};

export default CoursesPage;
