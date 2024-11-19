import {AnswerData} from "@/actions/type";
import {API} from "@/api/constants";
import {SpeakersPageModel} from "@/interfaces/speakers";

export async function getSpeakersPage(): Promise<AnswerData<SpeakersPageModel> | null> {
  const res = await fetch(`${API.speakers.byAlias}`, {
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
