import Link from "next/link";
import {Route} from "@/helpers/route";
import React from "react";

export default function Home() {
  return (
    <ul className={`container`}>
      <li>
        <Link href={Route.COURSES} style={{textDecoration: `underline`}}>Курсы</Link>
      </li>
      <li>
        <Link href={`${Route.COURSES}/preview`} style={{textDecoration: `underline`}}>Один курс - превью</Link>
      </li>
      <li>
        <Link href={`${Route.COURSES}/klinicheskaya-paradantalogya`} style={{textDecoration: `underline`}}>Карточка
          курса 1 (Только локально)</Link>
      </li>
      <li>
        <Link href={`${Route.COURSES}/bazovyi-kurs-po-implantologii-ortopedicheskii-etap`}
          style={{textDecoration: `underline`}}>Карточка курса 2 (Только локально)</Link>
      </li>
      <li>
        <Link href={Route.SPEAKERS} style={{textDecoration: `underline`}}>Преподаватели</Link>
      </li>
      <li>
        <Link href={`${Route.SPEAKERS}/preview`} style={{textDecoration: `underline`}}>Преподаватель - превью</Link>
      </li>
      <li>
        <Link href={`${Route.SPEAKERS}/volkova-yulia-valerievna`}
          style={{textDecoration: `underline`}}>Преподаватель 1 (Только локально)</Link>
      </li>
    </ul>
  );
}
