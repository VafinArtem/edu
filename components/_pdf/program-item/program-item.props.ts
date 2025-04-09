import {ProgramType} from "@/helpers/contants";

export interface ProgramItemProps {
  program: {
    type: keyof typeof ProgramType,
    duration?: number;
    learnList?: string[];
    themeList?: string[];
  };
}
