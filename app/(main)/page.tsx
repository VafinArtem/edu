import Link from "next/link";
import {Route} from "@/helpers/route";

export default function Home() {
  return (
    <ul className={`container`}>
      <li>
        <Link href={Route.TRAINING} style={{textDecoration: `underline`}}>Один курс</Link>
      </li>
    </ul>
  );
}
