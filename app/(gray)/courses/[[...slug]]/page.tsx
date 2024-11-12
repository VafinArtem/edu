import React, {ReactElement} from "react";
import {Metadata} from "next";
import CoursesPage from "@/views/courses-page/courses-page";
import {getFilters} from "@/api/filters";
import {getDirections} from "@/api/directions";
import {getCourseTypes} from "@/api/course-types";
import {getCoursesPage} from "@/api/courses-page";
import {notFound} from "next/navigation";
import {SlugPart} from "@/helpers/contants";
import {getCoursePage} from "@/api/course-page";
import {CoursePageModel} from "@/interfaces/course";
import {CoursesPageModel} from "@/interfaces/courses";
import CoursePage from "@/views/course-page/course-page";
import {getSimilarCourses} from "@/api/similar-courses";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Курсы - Учебный центра Амрита`,
  };
}

const CoursesLayout = async (props: {
  params: Promise<{
    slug?: string[],
  }>,
  searchParams?: Promise<Record<string, string>>;
}): Promise<ReactElement | null> => {
  const fetchedParams = await props.params;
  const search = await props.searchParams;

  if (fetchedParams.slug && !fetchedParams.slug.every((slug) => {
    const res = slug.match(/^[^-]*/g);

    if (!res) {
      return false;
    }

    return Object.values(SlugPart).some((part) => part.includes(res[0]));
  })) {
    notFound();
  }

  const isCoursePage = fetchedParams.slug && fetchedParams.slug[fetchedParams.slug.length - 1].includes(SlugPart.COURSE);

  let page: null | CoursePageModel | CoursesPageModel = null;

  if (isCoursePage) {
    const alias = fetchedParams.slug![fetchedParams.slug!.length - 1].split(`-`).splice(1).join(`-`);

    page = await getCoursePage(alias ? alias : "");
  } else {
    page = await getCoursesPage(fetchedParams.slug, search);
  }

  if (!page) {
    notFound();
  }

  if (isCoursePage) {
    const similarCourses = await getSimilarCourses((page as CoursePageModel)._id, `course`);

    return <CoursePage training={page as CoursePageModel} similarCourses={similarCourses} />;
  } else {
    const filters = await getFilters();
    const courseTypes = await getCourseTypes();
    const directions = await getDirections();

    return <CoursesPage
      coursesCount={(page as CoursesPageModel).coursesCount}
      courses={(page as CoursesPageModel).courses}
      directions={directions ?? []}
      courseTypes={courseTypes ?? []}
      filters={filters ?? []}
      pages={(page as CoursesPageModel).pages}
    />;
  }
};

export default CoursesLayout;
