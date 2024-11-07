import {API} from "@/api/constants";
import {CoursesPageModel} from "@/interfaces/courses";

export async function getCoursesPage(slug?: string, searchParams?: Record<string, string>): Promise<CoursesPageModel | null> {
  console.log(slug, searchParams);

  const res = await fetch(`${API.courses.byType}${slug ?? ``}`, {
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
