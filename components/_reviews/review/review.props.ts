import {Review} from "@/interfaces/common";
import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface ReviewProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  review: Review;
}
