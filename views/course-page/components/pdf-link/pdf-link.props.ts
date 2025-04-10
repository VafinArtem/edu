import {CourseForPdf} from "@/interfaces/course";

export interface PdfLinkProps {
  course: CourseForPdf;
  className?: string;
  downloadText: string;
  prepareText: string;
}
