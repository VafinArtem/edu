import {NavigationLink} from "@/interfaces/common";

export interface TopProps {
  title: string;
  date: number;
  type: string;
  description?: string;
  promoImage?: string;
  titles: NavigationLink[];
}
