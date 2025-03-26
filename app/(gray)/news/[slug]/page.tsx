import {getCoursesPage} from "@/api/courses-page";
import {getOneNewsPage} from "@/api/one-news-page";
import OneNewsPage from "@/views/one-news-page/one-news-page";
import {Metadata} from "next";
import {notFound} from "next/navigation";
import React, {ReactElement} from "react";

export async function generateMetadata({params}: {params: {slug: string}}): Promise<Metadata> {
  const page = await getOneNewsPage(params.slug);

  if (!page || page.code !== 200) {
    return {
      title: `404`,
    };
  }

  return {
    title: page.answer.data.metaTitle ? page.answer.data.metaTitle : page.answer.data.name,
    description: page.answer.data.metaDescription ?? ``,
  };
}

const OneNewsLayout = async ({params}: {params: {slug: string}}): Promise<ReactElement | null> => {
  const page = await getOneNewsPage(params.slug);
  const courses = await getCoursesPage(undefined, {sort: "DATE_ASC"}, 8);

  if (!page || page.code !== 200) {
    notFound();
  }

  return (
    <OneNewsPage news={page.answer.data} courses={courses?.data.courses ?? []} />
  );
};

export default OneNewsLayout;
