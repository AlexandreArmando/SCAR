import { Component, OnInit } from '@angular/core';
import { QuizLoaderService } from 'src/app/services/quiz-loader.service';
import { Quiz } from 'src/app/models/quiz';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-quiz-player',
  templateUrl: './quiz-player.component.html',
  styleUrls: ['./quiz-player.component.css']
})
export class QuizPlayerComponent implements OnInit {
  quizs: Quiz[] = [];
  constructor(private quizLoaderService: QuizLoaderService) {  }

  ngOnInit() {
    this.quizLoaderService.load().subscribe(data => {
      for (const d of (data as any)) {
        this.quizs.push(d);
      }
      console.log(this.quizs);
    });
  }
}
