import {getDirections} from "@/api/directions";
import NotFoundPage from "@/views/not-found-page/not-found-page";
import React, {ReactElement} from "react";

const NotFoundLayout = async (): Promise<ReactElement | null> => {
  const directions = await getDirections();

  return (
    <NotFoundPage directions={directions?.answer.data ?? []} color={"white"} />
  );
};

export default NotFoundLayout;
