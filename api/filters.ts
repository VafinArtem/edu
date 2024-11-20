import {AnswerData} from "@/actions/type";
import {API} from "@/api/constants";
import {FilterItem} from "@/interfaces/courses";

export async function getFilters(): Promise<AnswerData<FilterItem[]> | null> {
  const res = await fetch(`${API.courses.filters}`, {
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
