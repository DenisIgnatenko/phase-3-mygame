export type QuestionType = {
  id: number;
  question: string;
  answer: string;
  price: number;
  themeId: number;
  status: 'idle' | 'success' | 'fail';
};

export type ThemeType = {
  //indall themes include comments
  id: number;
  theme: string;
  Questions: QuestionType[];
};
