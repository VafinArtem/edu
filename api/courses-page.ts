import {API} from "@/api/constants";
import {CoursesPageModel} from "@/interfaces/courses";
import {SlugPart} from "@/helpers/contants";

export async function getCoursesPage(slug?: string[], searchParams?: Record<string, string>): Promise<CoursesPageModel | null> {
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
  };

  console.log(query);

  const res = await fetch(`${API.courses.byType}`, {
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
