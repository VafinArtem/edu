export type AnswerData<T> = {
  answer: {
    data: T;
    text: string;
    errors: unknown;
  };
  code: number;
};
