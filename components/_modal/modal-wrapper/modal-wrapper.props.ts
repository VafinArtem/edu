import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface ModalWrapperProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
}
