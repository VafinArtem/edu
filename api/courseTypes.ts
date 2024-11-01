import {API} from "@/api/constants";
import {Option} from "@/interfaces/courses";

export async function getCourseTypes(): Promise<Option[] | null> {
  const res = await fetch(`${API.courses.courseTypes}`, {
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
