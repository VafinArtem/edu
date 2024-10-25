import {SpeakerPromo} from "@/interfaces/course";

export interface PromoProps {
  name: string;
  description: string;
  className?: string;
  icon?: string;
  city?: string;
  courseTypeName: string;
  saleTimestamp?: number;
  date: string;
  speakers: SpeakerPromo[];
}
