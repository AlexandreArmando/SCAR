import { Question } from './question';

export class Quiz {
  id: number;
  name: string;
  excludedProfiles: number[];
  autor: string;
  questions: Question[];
}
