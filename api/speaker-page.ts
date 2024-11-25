import {API} from "@/api/constants";
import {SpeakerPageModel} from "@/interfaces/speaker";

export async function getSpeakerPage(alias: string): Promise<{code: number, data: SpeakerPageModel} | null> {
  const body = process.env.NODE_ENV === "development" ? null : JSON.stringify({alias});
  const method = process.env.NODE_ENV === "development" ? "GET" : "POST";

  const res = await fetch(`${API.speaker.byAlias}${process.env.NODE_ENV === "development" ? alias : ``}`, {
    cache: "no-store",
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
