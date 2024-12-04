import {notFound} from "next/navigation";
import {ReactElement} from "react";

const NotFoundLayout = async (): Promise<ReactElement | null> => {
  return notFound();
};

export default NotFoundLayout;
