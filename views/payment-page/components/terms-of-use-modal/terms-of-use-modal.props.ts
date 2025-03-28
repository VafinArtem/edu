import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface TermsOfUseModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
}
