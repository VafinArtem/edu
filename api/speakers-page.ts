import {AnswerData} from "@/actions/type";
import {API} from "@/api/constants";
import {SpeakersPageModel} from "@/interfaces/speakers";

export async function getSpeakersPage(options?: {
  limit?: number;
  searchParams?: {
    sort?: "RAND"
  }
}): Promise<AnswerData<SpeakersPageModel> | null> {
  const body = process.env.NODE_ENV === "development" ? null : JSON.stringify(options);
  const method = process.env.NODE_ENV === "development" ? "GET" : "POST";

  const res = await fetch(`${API.speakers.byAlias}`, {
    method,
    body,
    next: {
      revalidate: 10,
    },
  });

  if (!res.ok) {
    return null;
  }

  return res.json();
}
