import React, {ReactElement} from "react";
import {Route} from "@/helpers/route";
import Link from "next/link";

const ServicePage = async (): Promise<ReactElement | null> => {
  return (
    <ul className={`container`}>
      <li>
        <Link href={`${Route.TRAINING}/preview`} style={{textDecoration: `underline`}}>Один курс - превью</Link>
      </li>
      <li>
        <Link href={`${Route.TRAINING}/klinicheskaya-paradantalogya`} style={{textDecoration: `underline`}}>Карточка
          1</Link>
      </li>
      <li>
        <Link href={`${Route.TRAINING}/bazovyi-kurs-po-implantologii-ortopedicheskii-etap`}
          style={{textDecoration: `underline`}}>Карточка 2</Link>
      </li>
    </ul>
  );
};

export default ServicePage;
