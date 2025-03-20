export interface NewsSpeaker {
  video?: {
    poster: string;
    url: string;
  };
  id: number;
  alias: string;
  photo: string;
  photoBackground: string;
  position: string;
  specialization: string;
  surname: {
    nominative: string;
    genitive: string;
    instrumental: string;
  }
  name: {
    nominative: string;
    genitive: string;
    instrumental: string;
  },
  patronymic: {
    nominative: string;
    genitive: string;
    instrumental: string;
  },
}
