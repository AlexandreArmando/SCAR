import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizPlayerComponent } from './pages/quiz-player/quiz-player.component';
import { QuizCreatorComponent } from './pages/quiz-creator/quiz-creator.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'quizPlayer', component: QuizPlayerComponent },
  { path: 'quizCreator', component: QuizCreatorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
