import { TestBed } from '@angular/core/testing';

import { QuizLoaderService } from './quiz-loader.service';

describe('QuizLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuizLoaderService = TestBed.get(QuizLoaderService);
    expect(service).toBeTruthy();
  });
});
