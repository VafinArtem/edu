import {getCoursePage} from "@/api/course-page";
import {getCourseTypes} from "@/api/course-types";
import {getCoursesPage} from "@/api/courses-page";
import {getDirections} from "@/api/directions";
import {getFilters} from "@/api/filters";
import {SlugPart} from "@/helpers/contants";
import {CoursePageModel} from "@/interfaces/course";
import {CoursesPageModel} from "@/interfaces/courses";
import CoursePage from "@/views/course-page/course-page";
import CoursesPage from "@/views/courses-page/courses-page";
import {Metadata} from "next";
import {notFound} from "next/navigation";
import React, {ReactElement} from "react";

export async function generateMetadata(props: {
  params: Promise<{
    slug?: string[],
  }>,
  searchParams?: Promise<Record<string, string>>;
}): Promise<Metadata> {
  const fetchedParams = await props.params;

  const isCoursePage = fetchedParams.slug && fetchedParams.slug[fetchedParams.slug.length - 1].includes(SlugPart.COURSE);

  if (!isCoursePage) {
    return {
      title: `Курсы - Учебный центра Амрита`,
      description: ``,
    };
  }
  const alias = fetchedParams.slug![fetchedParams.slug!.length - 1].split(`-`).splice(1).join(`-`);

  const page: null | {data: CoursePageModel, code: number} = await getCoursePage(alias ? alias : "");

  if (!page || page.code !== 200) {
    return {
      title: `404`,
    };
  }

  return {
    title: (page as {data: CoursePageModel, code: number}).data.metaTitle ?? ``,
    description: (page as {data: CoursePageModel, code: number}).data.metaTitle ?? ``,
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

  let page: null | {data: CoursePageModel, code: number} | {data: CoursesPageModel, code: number} = null;

  if (isCoursePage) {
    const alias = fetchedParams.slug![fetchedParams.slug!.length - 1].split(`-`).splice(1).join(`-`);

    page = await getCoursePage(alias ? alias : "");
  } else {
    page = await getCoursesPage(fetchedParams.slug, search);
  }

  if (!page || page.code !== 200) {
    notFound();
  }

  if (isCoursePage) {
    // const similarCourses = await getSimilarCourses((page as CoursePageModel)._id, `course`);

    return <CoursePage training={(page as {data: CoursePageModel, code: number}).data} similarCourses={[]} />;
  } else {
    const filters = await getFilters();
    const courseTypes = await getCourseTypes();
    const directions = await getDirections();

    return <CoursesPage
      coursesCount={(page as {data: CoursesPageModel, code: number}).data.coursesCount}
      courses={(page as {data: CoursesPageModel, code: number}).data.courses}
      directions={directions?.answer.data ?? []}
      courseTypes={courseTypes?.answer.data ?? []}
      filters={filters?.answer.data ?? []}
      pages={(page as {data: CoursesPageModel, code: number}).data.pages}
    />;
  }
};

export default CoursesLayout;
