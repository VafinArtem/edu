import {CourseShort, SpeakerShortCard} from "@/interfaces/course";
import {Direction} from "@/interfaces/courses";

export interface MainPageProps {
  directions: Direction[];
  courses: CourseShort[];
  speakers: SpeakerShortCard[];
}
