export interface Direction {
  name: string;
  icon: string;
  color: string;
  id: number;
}

export interface FilterItem {
  name: string;
  inputName: string;
  id: number;
  values: {
    id: number;
    name: string;
    value: string;
  }[];
}

export interface Option {
  name: string;
  value: number;
  color?: string;
}
