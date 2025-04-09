export interface ProgramProps {
  courseType: string;
  theory: {
    id: number;
    duration?: number;
    learnList?: string[];
    themeList?: string[];
  }[];
  practice: {
    id: number;
    duration?: number;
    learnList?: string[];
    themeList?: string[];
  }[];
}
