import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuizPlayerComponent } from './pages/quiz-player/quiz-player.component';
import { AppRoutingModule } from './app-routing.module';
import { QuizCreatorComponent } from './pages/quiz-creator/quiz-creator.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    QuizPlayerComponent,
    QuizCreatorComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
