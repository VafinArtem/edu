export interface TimerProps {
  className?: string;
  text?: string;
  withoutTextOptions?: {
    desktop?: boolean;
    laptop?: boolean;
    tablet?: boolean;
    mobile?: boolean;
  }
}
