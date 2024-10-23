import Link from "next/link";
import {Route} from "@/helpers/route";

export default function Home() {
  return (
    <ul className={`container`}>
      <li>
        <Link href={Route.TRAINING} style={{textDecoration: `underline`}}>Курсы</Link>
      </li>
      <li>
        <Link href={`${Route.TRAINING}/preview`} style={{textDecoration: `underline`}}>Один курс - превью</Link>
      </li>
      <li>
        <Link href={Route.SPEAKER} style={{textDecoration: `underline`}}>Один преподаватель</Link>
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
}
