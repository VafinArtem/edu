export interface RecordFormProps {
  formIsSend?: boolean;
  setFormIsSend?: () => void;
  tariffInfo: {
    current: number;
    name: string;
    old?: number;
    id: number | null;
  };
  saleTimestamp?: number;
  courseId: string;
  courseTypeName: string;
  metric?: {
    change: string;
    send: string;
  };
  ecommerce: {
    id: string;
    name: string;
    category: string;
  };
  showIdAttribute?: boolean;
  showAllTariffsLink?: boolean;
}
