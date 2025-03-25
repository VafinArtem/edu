import {AnswerData} from "@/actions/type";
import {API} from "@/api/constants";
import {Option} from "@/interfaces/courses";

export async function getTypes(): Promise<AnswerData<Option[]> | null> {
  const res = await fetch(`${API.news.types}`, {
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
