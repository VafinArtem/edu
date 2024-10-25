import React, {ReactElement} from "react";
import CoursePage from "@/views/course-page/course-page";
import {course, similarCourses} from "@/mocs/training";

const ServicePage = async (): Promise<ReactElement | null> => {
  return (
    <CoursePage training={course} similarCourses={similarCourses} />
  );
};

export default ServicePage;
