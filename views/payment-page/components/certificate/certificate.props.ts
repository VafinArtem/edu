import {CertificateItem} from "@/interfaces/payment";

export interface CertificateProps {
  certificate: CertificateItem;
  onClick: () => void;
}
