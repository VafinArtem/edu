import {TariffInfo} from "@/interfaces/course";

export interface TariffInfoProps {
  className?: string;
  tariff: TariffInfo;
  setShowFormStatus?: (show: boolean) => void;
  setCurrentTariff?: (id: number | null) => void;
}
