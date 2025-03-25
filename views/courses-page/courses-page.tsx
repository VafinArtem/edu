"use client";

import Button from "@/components/_buttons/button/button";
import CourseShortItem from "@/components/_common/course-short-item/course-short-item";
import NotFindCourse from "@/components/_common/not-find-course/not-find-course";
import Pagination from "@/components/_common/pagination/pagination";
import Sort from "@/components/_listings/sort/sort";
import ContainerWhite from "@/components/_section/container-white/container-white";
import SectionItem from "@/components/_section/section-item/section-item";
import Heading from "@/components/_tags/heading/heading";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import {storePathValues} from "@/helpers/helpers";
import useIsResolution from "@/hooks/useIsResolution";
import useOpenModal from "@/hooks/useOpenModal";
import Directions from "@/views/courses-page/components/directions/directions";
import Filters from "@/views/courses-page/components/filters/filters";
import FocusInCourse from "@/views/courses-page/components/focus-in-course/focus-in-course";
import {usePathname, useSearchParams} from "next/navigation";
import React, {ReactElement, useEffect} from "react";
import styles from "./courses-page.module.css";
import {CoursesPageProps} from "./courses-page.props";

const CoursesPage = ({
  courses,
  // pages,
  filters,
  courseTypes,
  directions,
  coursesCount,
  enableAdvancedTraining,
}: CoursesPageProps): ReactElement | null => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  // const currentPage = Number(searchParams?.get(`page`)) || 1;

  const {ref, showModal, changeModalActivityStatus} = useOpenModal<HTMLFormElement>();
  const isMobile = useIsResolution(1099);

  useEffect(() => {
    storePathValues();
  }, [pathname]);

  return (
    <>
      <Pagination className={`container`} pagination={[{name: `Курсы`}]} />

      <SectionItem className={`container`}>
        <Heading tag={`h1`} className={styles.title}>Каталог курсов AMRITA{coursesCount > 0 && <span
          className={styles.count}>&nbsp;{coursesCount}</span>}</Heading>

        <div className={styles.grid}>
          <Filters enableAdvancedTraining={enableAdvancedTraining} setShowMobileFilters={changeModalActivityStatus}
            showMobileFilters={showModal} ref={ref}
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
                }}>
                  Все фильтры
                </button>
              </Directions>
              <Sort
                defaultName={`Сначала ближайшие`}
                initialValue={searchParams.get(`sort`) ?? ``}
              />
            </div>
            {
              courses.length === 0 && <div className={styles.notCourses}>
                <Paragraph align={"center"} fontSize={"none"}>По&nbsp;выставленным фильтрам, курсов
                  не&nbsp;найдено</Paragraph>
                {searchParams.size > 0 && <Button onClick={() => {
                  ref.current.reset();
                }}>Очистить фильтр</Button>}
              </div>
            }
            {courses.length > 0 && <div className={styles.list}>
              {courses.map((course) => <CourseShortItem course={course} key={course.id} withPhoto />)}
            </div>}

            {/*{pages > 0 && <ListingPagination*/}
            {/*  pages={pages}*/}
            {/*  className={styles.pagination}*/}
            {/*/>}*/}
          </div>
        </div>
      </SectionItem>

      <NotFindCourse className={styles.notFindCourse} />

      <ContainerWhite>
        <FocusInCourse />
        {/*<PastCourses />*/}
      </ContainerWhite>
    </>
  );
};

export default CoursesPage;
