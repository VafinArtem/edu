export interface RecordFormProps {
  tariffInfo: {
    current: number;
    old?: number;
    id: number | null;
  };
  saleTimestamp?: number;
  courseId: string;
  courseTypeName: string;
}
