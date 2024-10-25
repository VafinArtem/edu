import React, {ReactElement} from "react";
import {notFound} from "next/navigation";
import {Metadata} from "next";
import CoursePage from "@/views/course-page/course-page";
import {getCoursePage} from "@/api/course-page";
import {getSimilarCourses} from "@/api/similar-courses";

export async function generateMetadata({params}: {params: {alias: string}}): Promise<Metadata> {
  const page = await getCoursePage(params.alias);

  return {
    title: page?.metaTitle,
    description: page?.metaDescription,
  };
}

const CourseLayout = async ({params}: {params: {alias: string}}): Promise<ReactElement | null> => {
  const page = await getCoursePage(params.alias);

  if (!page) {
    notFound();
  }

  const similarCourses = await getSimilarCourses(page._id);

  return <CoursePage training={page} similarCourses={similarCourses} />;
};

export default CourseLayout;
