import {API} from "@/api/constants";
import {CoursePageModel} from "@/interfaces/course";

export async function getCoursePage(alias: string): Promise<{data: CoursePageModel, code: number} | null> {
  const body = process.env.NODE_ENV === "development" ? null : JSON.stringify({alias});
  const method = process.env.NODE_ENV === "development" ? "GET" : "POST";

  const res = await fetch(`${API.course.byAlias}${process.env.NODE_ENV === "development" ? alias : ``}`, {
    method,
    body,
    next: {
      revalidate: 10,
    },
  });

  if (!res.ok) {
    return null;
  }
  return res.json();
}
