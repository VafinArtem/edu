import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface ParagraphProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  fontSize?: "default" | "small" | "none";
  fontWeight?: "normal" | "light";
  fontStyle?: "normal" | "italic";
  align?: "left" | "center" | "right";
}
