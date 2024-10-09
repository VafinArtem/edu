export interface TimerProps {
  className?: string;
  text?: string;
  timestampToEnd: number;
  withoutTextOptions?: {
    desktop?: boolean;
    laptop?: boolean;
    tablet?: boolean;
    mobile?: boolean;
  };
}
