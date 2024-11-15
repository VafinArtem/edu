import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface ParagraphProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  fontSize?: "default" | "small" | "asDefaultTitle" | "none";
  fontWeight?: "normal" | "light" | "medium";
  fontStyle?: "normal" | "italic";
  align?: "left" | "center" | "right";
}
