export interface RecordFormProps {
  prices: {
    current: number;
    old?: number;
  };
  saleTimestamp?: number;
}
