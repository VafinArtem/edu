import {API} from "@/api/constants";
import {Direction} from "@/interfaces/courses";

export async function getDirections(): Promise<Direction[] | null> {
  const res = await fetch(`${API.courses.directions}`, {
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
