import {getSpeakerPage} from "@/api/speaker-page";
import SpeakerPage from "@/views/speaker-page/speaker-page";
import {Metadata} from "next";
import {notFound} from "next/navigation";
import React, {ReactElement} from "react";

export async function generateMetadata({params}: {params: {alias: string}}): Promise<Metadata> {
  const page = await getSpeakerPage(params.alias);

  return {
    title: page?.data.metaTitle,
    description: page?.data.metaDescription,
  };
}

const SpeakerLayout = async ({params}: {params: {alias: string}}): Promise<ReactElement | null> => {
  const page = await getSpeakerPage(params.alias);

  if (!page || page.code !== 200) {
    notFound();
  }

  // const similarCourses = await getSimilarCourses(+page.data.id, `speaker`);

  return <SpeakerPage similarCourses={[]} speaker={page.data} />;
};

export default SpeakerLayout;
