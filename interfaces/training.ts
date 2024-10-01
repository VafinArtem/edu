export interface Edu {
  name: string;
  previewImg: string;
  url: string;
}

export interface Speaker {
  video?: string;
  id: string;
  photo: string;
  name: string;
  position: string;
  workExperience: string;
  edu: Edu[]
}
