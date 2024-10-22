import {ExampleItem} from "@/interfaces/speaker";
import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface ExamplesProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  examples: ExampleItem[];
}
