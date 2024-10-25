import React, {ReactElement} from "react";
import {notFound} from "next/navigation";
import {Metadata} from "next";
import CoursePage from "@/views/course-page/course-page";
import {getCoursePage} from "@/api/course-page";

export async function generateMetadata({params}: {params: {alias: string}}): Promise<Metadata> {
  const page = await getCoursePage(params.alias);

  return {
    title: page?.metaTitle,
  };
}

const ServicePage = async ({params}: {params: {alias: string}}): Promise<ReactElement | null> => {
  const page = await getCoursePage(params.alias);

  if (!page) {
    notFound();
  }

  return <CoursePage training={page} />;
};

export default ServicePage;
