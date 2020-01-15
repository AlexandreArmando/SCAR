import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quiz } from '../models/quiz';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuizLoaderService {
  bankUrl = 'assets/quizBank.json';
  quizs: Quiz[] = [];
  constructor(private httpClient: HttpClient) { }

  loads() {
    this.httpClient.get(this.bankUrl).subscribe(data => {
      for (const d of (data as any)) {
        this.quizs.push(d);
      }
      console.log(this.quizs);
    });
  }
  load(): Observable<Quiz[]> {
    return this.httpClient.get<Quiz[]>(this.bankUrl);
  }
}
