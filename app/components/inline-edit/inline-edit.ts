import {Component} from 'angular2/core';
import {Input} from 'angular2/core';
import {ExpenseService} from '../../services/expense-service';
import {CategoryService} from '../../services/category-service';
@Component({
  selector: 'inline-edit',
  templateUrl: './components/inline-edit/inline-edit.html',
  styleUrls: ['./components/inline-edit/inline-edit.css'],
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
  private categories:string[];

  constructor(private expenseService:ExpenseService, private categoryService:CategoryService) {
    this.inEditMode = false;
    this.show = false;
    this.categories = categoryService.getCategories();
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

  delete(expense:Expense) {
    this.expenseService.deleteExpense(expense);
  }

}
