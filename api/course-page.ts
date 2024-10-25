import {API} from "@/api/constants";
import {CoursePageModel} from "@/interfaces/course";

export async function getCoursePage(alias: string): Promise<CoursePageModel | null> {
  const res = await fetch(`${API.courses.byAlias}${alias}`, {
    method: "GET",
    next: {
      revalidate: 10,
    },
  });

  if (!res.ok) {
    return null;
  }
  return res.json();
}
