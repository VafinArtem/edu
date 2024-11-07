import {DetailedHTMLProps, HTMLAttributes} from "react";
import {Direction} from "@/interfaces/courses";

export interface DirectionsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  directions: Direction[];
  initialDirections: string;
}
