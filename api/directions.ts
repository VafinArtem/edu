import {AnswerData} from "@/actions/type";
import {API} from "@/api/constants";
import {DirectionWithAudience} from "@/interfaces/courses";

export async function getDirections(): Promise<AnswerData<DirectionWithAudience[]> | null> {
  const res = await fetch(`${API.courses.directions}`, {
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
