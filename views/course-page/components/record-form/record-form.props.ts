export interface RecordFormProps {
  tariffInfo: {
    current: number;
    old?: number;
    id: number;
  };
  saleTimestamp?: number;
  courseId: string;
  courseTypeName: string;
}
