import {TariffInfo} from "@/interfaces/training";
import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface PriceProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  tariffs: TariffInfo[];
}
