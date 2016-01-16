import {Component} from 'angular2/core';
import {Input} from 'angular2/core';
import {ExpenseService} from '../expenseService/expense-service';
@Component({
  selector: 'inline-edit',
  templateUrl: './components/inlineEdit/inline-edit.html',
  styleUrls: ['./components/inlineEdit/inline-edit.css'],
  host: {
    '(mouseover)': 'toggleShow()',
    '(mouseout)' : 'toggleShow()'
  }
})
export class InlineEditCmp {
  @Input() expense:Expense;
  @Input() prop:string;
  private inEditMode:boolean;
  private show:boolean;
  private expenseService:ExpenseService;
  private categories:string[];

  constructor() {
    this.inEditMode = false;
    this.show = false;
    this.expenseService = ExpenseService.getInstance();
    this.categories = this.expenseService.getCategories();
  }

  toggleEditMode() {
    if(this.inEditMode) {
      this.expenseService.updateLocalStorage();
    }
    this.inEditMode = !this.inEditMode;
  }

  toggleShow() {
    this.show = !this.show;
  }

}
