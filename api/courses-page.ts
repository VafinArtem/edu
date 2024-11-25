import {API} from "@/api/constants";
import {SlugPart} from "@/helpers/contants";
import {CoursesPageModel} from "@/interfaces/courses";

export async function getCoursesPage(slug?: string[], searchParams?: Record<string, string>, limit?: number): Promise<{
  data: CoursesPageModel,
  code: number
} | null> {
  const categories: Record<string, string> = {};

  if (slug && slug.length > 0) {
    slug.forEach((item) => {
      const a = item.match(/^[^-]*/g);
      const b = item.split(`-`).splice(1).join(`-`);

      if (a && a[0] !== SlugPart.COURSE) {
        categories[`${a[0]}`] = b;
      }
    });
  }

  const query = {
    categories,
    searchParams,
    limit,
  };

  const body = process.env.NODE_ENV === "development" ? null : JSON.stringify(query);
  const method = process.env.NODE_ENV === "development" ? "GET" : "POST";

  const res = await fetch(`${API.courses.byType}`, {
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
