import {getCoursesPage} from "@/api/courses-page";
import {getDirections} from "@/api/directions";
import NotFoundPage from "@/views/not-found-page/not-found-page";
import React, {ReactElement} from "react";

const NotFoundLayout = async (): Promise<ReactElement | null> => {
  const directions = await getDirections();
  const courses = await getCoursesPage(undefined, {sort: "DATE_ASC"}, 8);

  return (
    <NotFoundPage directions={directions?.answer.data ?? []} courses={courses?.data.courses ?? []} color={"white"} />
  );
};

export default NotFoundLayout;
