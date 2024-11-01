import React, {ReactElement} from "react";
import {Metadata} from "next";
import CoursesPage from "@/views/courses-page/courses-page";
import {getFilters} from "@/api/filters";
import {getCourseTypes} from "@/api/courseTypes";
import {getDirections} from "@/api/directions";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Курсы - Учебный центра Амрита`,
  };
}

const CoursesLayout = async (): Promise<ReactElement | null> => {
  const filters = await getFilters();
  const courseTypes = await getCourseTypes();
  const directions = await getDirections();

  return <CoursesPage directions={directions ?? []} courseTypes={courseTypes ?? []} filters={filters ?? []} />;
};

export default CoursesLayout;
