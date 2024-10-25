import {SpeakerPageModel} from "@/interfaces/speaker";
import {CourseShort} from "@/interfaces/course";

export interface SpeakerPageProps {
  speaker: SpeakerPageModel;
  similarCourses: CourseShort[] | null;
}
