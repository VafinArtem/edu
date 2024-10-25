import {ProgramType} from "@/helpers/contants";

export interface ProgramItemProps {
  type: keyof typeof ProgramType,
  duration?: string;
  learnList?: string[];
  themeList?: string[];
}
