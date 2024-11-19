import {API} from "@/api/constants";
import {SpeakerPageModel} from "@/interfaces/speaker";

export async function getSpeakerPage(alias: string): Promise<{code: number, data: SpeakerPageModel} | null> {
  console.log(`${API.speaker.byAlias}${process.env.NODE_ENV === "development" ? alias : ``}`);
  const res = await fetch(`${API.speaker.byAlias}${process.env.NODE_ENV === "development" ? alias : ``}`, {
    method: process.env.NODE_ENV === "development" ? "GET" : "POST",
    body: process.env.NODE_ENV === "development" ? null : JSON.stringify({alias}),
    next: {
      revalidate: 10,
    },
  });

  if (!res.ok) {
    return null;
  }

  return res.json();
}
