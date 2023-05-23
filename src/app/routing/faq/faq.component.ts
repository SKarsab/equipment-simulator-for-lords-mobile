import { Component } from '@angular/core';
import { HOME_ROUTE } from '../../../utilities/constants';
import { Question } from 'src/app/question/question.model';
import { questionList } from 'src/utilities/questionList';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  HOME_PATH:string = HOME_ROUTE;
  questions: Question[] = questionList;
}