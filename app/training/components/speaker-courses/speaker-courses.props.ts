import {CourseShort, SpeakerShort} from "@/interfaces/training";

export interface SpeakerCoursesProps {
  speakers: SpeakerShort[];
  courses: CourseShort[];
  className?: string;
}
