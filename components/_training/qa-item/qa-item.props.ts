import {QAItem} from "@/interfaces/training";
import {MutableRefObject} from "react";

export interface QaItemProps {
  qa: QAItem;
  className?: string;
  parentRef: MutableRefObject<HTMLDivElement>;
}
