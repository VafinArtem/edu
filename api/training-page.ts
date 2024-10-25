import {API} from "@/api/constants";
import {TrainingPageModel} from "@/interfaces/training";

export async function getTrainingPage(alias: string): Promise<TrainingPageModel | null> {
  const res = await fetch(`${API.courses.byAlias}${alias}`, {
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
