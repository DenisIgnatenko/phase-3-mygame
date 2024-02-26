export type QuestionType = {
  id: number;
  question: string;
  answer: string;
  price: number;
  themeId: number;
  status: 'idle' | 'success' | 'fail';
};

export type ThemeType = {
  id: number;
  theme: string;
  Questions: QuestionType[];
};

export type UserAnswer = {
  usersAnswer: string;
  questionId: number;
};
export type ValidatedData = {
  validated: {} | boolean;
};
