"use server";

import {AnswerData} from "@/actions/type";
import {API} from "@/api/constants";

export async function orderWithTariff({
  data,
}: {
  data: {
    name: string;
    contact: string;
    tariff: number | null;
    courseId: string;
  },
}): Promise<"error" | "success"> {

  const query = data;

  console.log(query);

  const res = await fetch(API.course.orderWithTariff, {
    method: "GET",
  });

  if (!res) {
    return "error";
  }

  const result: AnswerData<string> = await res.json();

  if (result.code === 200) {
    return "success";
  } else {
    return "error";
  }
}
