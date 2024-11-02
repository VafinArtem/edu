import React, {ReactElement} from "react";
import {Metadata} from "next";
import CoursesPage from "@/views/courses-page/courses-page";
import {getFilters} from "@/api/filters";
import {getDirections} from "@/api/directions";
import {getCourseTypes} from "@/api/course-types";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Курсы - Учебный центра Амрита`,
  };
}

const CoursesLayout = async (props: {
  searchParams?: Promise<Record<string, string>>;
}): Promise<ReactElement | null> => {
  const filters = await getFilters();
  const courseTypes = await getCourseTypes();
  const directions = await getDirections();

  console.log(props.searchParams);

  return <CoursesPage directions={directions ?? []} courseTypes={courseTypes ?? []} filters={filters ?? []} />;
};

export default CoursesLayout;
