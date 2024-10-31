import React, {ReactElement} from "react";
import {Route} from "@/helpers/route";
import Link from "next/link";

const ServicePage = async (): Promise<ReactElement | null> => {
  return (
    <ul className={`container`}>
      <li>
        <Link href={`${Route.SPEAKERS}/preview`} style={{textDecoration: `underline`}}>Преподаватель - превью</Link>
      </li>
      <li>
        <Link href={`${Route.SPEAKERS}/volkova-yulia-valerievna`}
          style={{textDecoration: `underline`}}>Преподаватель (Только локально)</Link>
      </li>
    </ul>
  );
};

export default ServicePage;
