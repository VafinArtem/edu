import React, {ReactElement} from "react";
import {notFound} from "next/navigation";
import {Metadata} from "next";
import SpeakerPage from "@/views/speaker-page/speaker-page";
import {getSpeakerPage} from "@/api/speaker-page";
import {getSimilarCourses} from "@/api/similar-courses";

export async function generateMetadata({params}: {params: {alias: string}}): Promise<Metadata> {
  const page = await getSpeakerPage(params.alias);

  return {
    title: page?.metaTitle,
    description: page?.metaDescription,
  };
}

const SpeakerLayout = async ({params}: {params: {alias: string}}): Promise<ReactElement | null> => {
  const page = await getSpeakerPage(params.alias);

  if (!page) {
    notFound();
  }

  const similarCourses = await getSimilarCourses(page._id, `speaker`);

  return <SpeakerPage similarCourses={similarCourses} speaker={page} />;
};

export default SpeakerLayout;
