import {API} from "@/api/constants";
import {SpeakersPageModel} from "@/interfaces/speakers";

export async function getSpeakersPage(slug?: string, searchParams?: Record<string, string>): Promise<SpeakersPageModel | null> {
  console.log(searchParams);

  const res = await fetch(`${API.speakers.byAlias}${slug ?? ``}`, {
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
