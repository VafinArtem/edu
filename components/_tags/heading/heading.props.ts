import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface HeadingProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  fontSize?: "default" | "mid" | "mini" | "asText";
  fontWeight?: "medium" | "normal";
  align?: "left" | "center" | "right";
}
