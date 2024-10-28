import React, {ReactElement} from "react";
import {Metadata} from "next";
import CoursesPage from "@/views/courses-page/courses-page";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Курсы - Учебный центра Амрита`,
  };
}

const CoursesLayout = async (): Promise<ReactElement | null> => {
  return <CoursesPage />;
};

export default CoursesLayout;
