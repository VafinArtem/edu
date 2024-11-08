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

const CoursesLayout = async ({params}: {
  params: Promise<{
    slug?: string[],
    searchParams?: Record<string, string>;
  }>
}): Promise<ReactElement | null> => {
  const fetchedParams = await params;
  const slugs = fetchedParams.slug;

  const lastSlug = slugs && (slugs.length > 1 ? slugs[slugs.length - 1] : slugs[0]);

  const page = await getCoursesPage(lastSlug, fetchedParams.searchParams);

  if (!page) {
    notFound();
  }

  const filters = await getFilters();
  const courseTypes = await getCourseTypes();
  const directions = await getDirections();

  return <CoursesPage
    courses={page.courses}
    directions={directions ?? []}
    courseTypes={courseTypes ?? []}
    filters={filters ?? []}
    pages={page.pages}
  />;
};

export default CoursesLayout;
