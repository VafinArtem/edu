import React, {ReactElement} from "react";
import {getTrainingPage} from "@/api/training-page";
import {notFound} from "next/navigation";
import {Metadata} from "next";
import TrainingPage from "@/views/course-page/training-page";

export async function generateMetadata({params}: {params: {alias: string}}): Promise<Metadata> {
  const page = await getTrainingPage(params.alias);

  return {
    title: page?.metaTitle,
  };
}

const ServicePage = async ({params}: {params: {alias: string}}): Promise<ReactElement | null> => {
  const page = await getTrainingPage(params.alias);

  if (!page) {
    notFound();
  }

  return <TrainingPage training={page} />;
};

export default ServicePage;
