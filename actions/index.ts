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

  const body = process.env.NODE_ENV === "development" ? null : JSON.stringify(data);
  const method = process.env.NODE_ENV === "development" ? "GET" : "POST";

  const res = await fetch(API.course.orderWithTariff, {
    cache: "no-store",
    method,
    body,
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

export async function promoRegistration({
  data,
}: {
  data: {
    contact: string;
  },
}): Promise<"error" | "success"> {

  const query = data;

  console.log(query);

  const res = await fetch(API.common.promoRegistration, {
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

export async function sendComment({
  data,
}: {
  data: {
    contact: string;
    comment: string;
  },
}): Promise<"error" | "success"> {

  const body = process.env.NODE_ENV === "development" ? null : JSON.stringify(data);
  const method = process.env.NODE_ENV === "development" ? "GET" : "POST";

  const res = await fetch(API.common.sendComment, {
    cache: "no-store",
    body,
    method,
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

export async function sendBecomeSpeaker({
  data,
}: {
  data: {
    contact: string;
    name: string;
  },
}): Promise<"error" | "success"> {

  const body = process.env.NODE_ENV === "development" ? null : JSON.stringify(data);
  const method = process.env.NODE_ENV === "development" ? "GET" : "POST";

  const res = await fetch(API.common.becomeSpeaker, {
    cache: "no-store",
    method,
    body,
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

export async function sendBecomePartner({
  data,
}: {
  data: {
    contact: string;
    city: string;
    comment: string;
    partnershipType: string;
  },
}): Promise<"error" | "success"> {

  const body = process.env.NODE_ENV === "development" ? null : JSON.stringify(data);
  const method = process.env.NODE_ENV === "development" ? "GET" : "POST";

  const res = await fetch(API.common.becomePartner, {
    cache: "no-store",
    method,
    body,
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
