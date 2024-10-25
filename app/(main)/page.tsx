import Link from "next/link";
import {Route} from "@/helpers/route";

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
        <Link href={Route.SPEAKERS} style={{textDecoration: `underline`}}>Один преподаватель</Link>
      </li>
      <li>
        <Link href={`${Route.COURSES}/klinicheskaya-paradantalogya`} style={{textDecoration: `underline`}}>Карточка
          1</Link>
      </li>
      <li>
        <Link href={`${Route.COURSES}/bazovyi-kurs-po-implantologii-ortopedicheskii-etap`}
          style={{textDecoration: `underline`}}>Карточка 2</Link>
      </li>
    </ul>
  );
}
