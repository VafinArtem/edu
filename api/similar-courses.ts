import {CourseShort} from "@/interfaces/course";
import {API} from "@/api/constants";

export async function getSimilarCourses(id: number): Promise<CourseShort[] | null> {
  const res = await fetch(process.env.NODE_ENV === "development" ? `${API.courses.similar}` : `${API.courses.similar}${id}`, {
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
