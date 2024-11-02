import React, {ReactElement} from "react";
import {Metadata} from "next";
import CoursesPage from "@/views/courses-page/courses-page";
import {getFilters} from "@/api/filters";
import {getDirections} from "@/api/directions";
import {getCourseTypes} from "@/api/course-types";
import {getCoursesPage} from "@/api/courses-page";
import {notFound} from "next/navigation";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Курсы - Учебный центра Амрита`,
  };
}

const CoursesLayout = async (props: {
  searchParams?: Promise<Record<string, string>>;
}): Promise<ReactElement | null> => {
  const page = await getCoursesPage();

  if (!page) {
    notFound();
  }

  const filters = await getFilters();
  const courseTypes = await getCourseTypes();
  const directions = await getDirections();

  console.log(props.searchParams);

  return <CoursesPage
    courses={page.courses}
    directions={directions ?? []}
    courseTypes={courseTypes ?? []}
    filters={filters ?? []}
    pages={page.pages}
  />;
};

export default CoursesLayout;
