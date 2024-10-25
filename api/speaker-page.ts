import {API} from "@/api/constants";
import {SpeakerPageModel} from "@/interfaces/speaker";

export async function getSpeakerPage(alias: string): Promise<SpeakerPageModel | null> {
  const res = await fetch(`${API.speakers.byAlias}${alias}`, {
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
