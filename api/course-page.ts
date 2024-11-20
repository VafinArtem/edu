import {API} from "@/api/constants";
import {CoursePageModel} from "@/interfaces/course";

export async function getCoursePage(alias: string): Promise<{data: CoursePageModel, code: number} | null> {
  const res = await fetch(`${API.course.byAlias}${alias}`, {
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
