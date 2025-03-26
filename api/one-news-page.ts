import {AnswerData} from "@/actions/type";
import {API} from "@/api/constants";
import {OneNewsModel} from "@/interfaces/one-news";

export async function getOneNewsPage(alias: string): Promise<AnswerData<OneNewsModel> | null> {
  const body = process.env.NODE_ENV === "development" ? null : JSON.stringify({alias});
  const method = process.env.NODE_ENV === "development" ? "GET" : "POST";

  const res = await fetch(`${API.news.byAlias}${process.env.NODE_ENV === "development" ? alias : ``}`, {
    cache: "no-store",
    method,
    body,
  });

  if (!res.ok) {
    return null;
  }
  return res.json();
}
