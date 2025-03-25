import {CourseShort, SpeakerShortCard} from "@/interfaces/course";
import {DirectionWithAudience} from "@/interfaces/courses";

export interface MainPageProps {
  directions: DirectionWithAudience[];
  courses: CourseShort[];
  speakers: SpeakerShortCard[];
}
