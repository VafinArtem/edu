import {DetailedHTMLProps, HTMLAttributes} from "react";
import {GalleryItem} from "@/interfaces/speaker";

export interface GalleryProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  speakerName: string;
  photos: GalleryItem[];
}
