export interface TopProps {
  name: string;
  courseType: string;
  location: string;
  date: string;
  description: string;
  speakers: {
    id: number;
    name: string;
    position: string;
  }[];
  colors: {
    background: string;
    text: string;
  };
}
