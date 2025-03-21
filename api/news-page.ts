import {API} from "@/api/constants";
import {NewsModel} from "@/interfaces/news";

export async function getNewsPage(searchParams?: Record<string, string>): Promise<{
  data: NewsModel,
  code: number
} | null> {
  const body = process.env.NODE_ENV === "development" ? null : JSON.stringify({searchParams});
  const method = process.env.NODE_ENV === "development" ? "GET" : "POST";

  console.log({searchParams});

  const res = await fetch(API.news.all, {
    cache: "no-store",
    method,
    body,
  });

  if (!res.ok) {
    return null;
  }
  return res.json();
}
