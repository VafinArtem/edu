import {QAItem} from "@/interfaces/course";
import {MutableRefObject} from "react";

export interface QaItemProps {
  qa: QAItem;
  className?: string;
  parentRef: MutableRefObject<HTMLDivElement>;
}
