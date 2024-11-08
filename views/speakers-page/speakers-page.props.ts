import {Direction} from "@/interfaces/courses";
import {SpeakerShortCard} from "@/interfaces/course";

export interface SpeakersPageProps {
  directions: Direction[];
  speakers: SpeakerShortCard[];
  pages: number;
}
