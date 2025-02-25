import {ExampleItem} from "@/interfaces/common";
import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface ExamplesProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  examples: ExampleItem[];
  headingOptions: {
    fontSize?: "default" | "large" | "mid" | "mini" | "asText" | "none";
    tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  };
  withoutWrapperPaddings?: boolean;
}
