export interface NewsModel {
  cards: NewsShortCard[];
  pages: number;
}

export interface NewsShortCard {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string;
  alias: string;
}
