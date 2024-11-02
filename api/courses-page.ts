import {API} from "@/api/constants";
import {CoursesPageModel} from "@/interfaces/courses";

export async function getCoursesPage(type?: string, searchParams?: string): Promise<CoursesPageModel | null> {
  console.log(searchParams);
  const res = await fetch(`${API.courses.byType}${type ?? ``}`, {
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
