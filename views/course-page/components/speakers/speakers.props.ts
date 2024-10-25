import {Speaker} from "@/interfaces/course";

export interface SpeakersProps {
  speakers: Speaker[];
  courseTypeName: string;
  className?: string;
}
