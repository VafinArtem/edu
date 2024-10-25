import {CourseShort, SpeakerShort} from "@/interfaces/course";

export interface SpeakerCoursesProps {
  speakers: SpeakerShort[];
  courses: CourseShort[];
  className?: string;
}
