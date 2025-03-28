import {CertificateItem} from "@/interfaces/payment";

export interface OrderModalProps {
  currentCertificate: CertificateItem | null;
  setCurrentCertificate: (currentCertificate: CertificateItem | null) => void;
}
