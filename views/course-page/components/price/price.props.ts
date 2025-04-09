import {TariffInfo} from "@/interfaces/course";
import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface PriceProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  tariffs: TariffInfo[];
  courseTypeName: {
    nominative: string;
    genitive: string;
  };
  saleTimestamp?: number;
  courseId: number;
  ecommerce: {
    id: string;
    name: string;
    category: string;
  };
}
