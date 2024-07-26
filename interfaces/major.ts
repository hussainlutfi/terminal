export interface AcademicMajorsInterface {
  id: number;
  major: string;
  url: string;
  path: string;
}

export interface AcademicPaths {
  svg: string;
  name: string;
  route: string;
}

export interface QuestionMajorInput {
  question: string;
  email: string;
  major: string;
  name: string;
}
export interface QuestionAnswerMajor {
  id: string;
  created_at: string;
  question: string;
  email: string;
  major: string;
  name: string;
  answer: string;
}
