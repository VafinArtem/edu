import {getDirections} from "@/api/directions";
import MainPage from "@/views/main-page/main-page";
import {Metadata} from "next";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Учебный центра Амрита`,
    description: ``,
  };
}

const MainLayout = async () => {
  const directions = await getDirections();

  return (
    <>
      <MainPage directions={directions?.answer.data ?? []} />

      {/*<ul className={`container`}>*/}
      {/*  <li>*/}
      {/*    <Link href={Route.COURSES} style={{textDecoration: `underline`}}>Курсы</Link>*/}
      {/*  </li>*/}
      {/*  <li>*/}
      {/*    <Link href={`${Route.COURSES}/preview`} style={{textDecoration: `underline`}}>Один курс - превью</Link>*/}
      {/*  </li>*/}
      {/*  <li>*/}
      {/*    <Link href={`${Route.COURSES}/course-klinicheskaya-paradantalogya`} style={{textDecoration: `underline`}}>Карточка*/}
      {/*      курса 1 (Только локально)</Link>*/}
      {/*  </li>*/}
      {/*  <li>*/}
      {/*    <Link href={`${Route.COURSES}/course-bazovyi-kurs-po-implantologii-ortopedicheskii-etap`}*/}
      {/*      style={{textDecoration: `underline`}}>Карточка курса 2 (Только локально)</Link>*/}
      {/*  </li>*/}
      {/*  <li>*/}
      {/*    <Link href={Route.SPEAKERS} style={{textDecoration: `underline`}}>Преподаватели</Link>*/}
      {/*  </li>*/}
      {/*  <li>*/}
      {/*    <Link href={`${Route.SPEAKERS}/preview`} style={{textDecoration: `underline`}}>Преподаватель - превью</Link>*/}
      {/*  </li>*/}
      {/*  <li>*/}
      {/*    <Link href={`${Route.SPEAKERS}/volkova-yulia-valerievna`}*/}
      {/*      style={{textDecoration: `underline`}}>Преподаватель 1 (Только локально)</Link>*/}
      {/*  </li>*/}
      {/*</ul>*/}
    </>
  );
};

export default MainLayout;
