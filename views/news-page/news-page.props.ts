import {Option} from "@/interfaces/courses";
import {NewsShortCard} from "@/interfaces/news";

export interface NewsPageProps {
  cards: NewsShortCard[];
  types: Option[];
  pages: number;
}
