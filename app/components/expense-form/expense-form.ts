import {Component} from 'angular2/core';
import {ExpenseService} from '../../services/expense-service';
import {CategoryService} from '../../services/category-service';
@Component({
  selector: 'expense-form',
  templateUrl: './components/expense-form/expense-form.html'
})

export class ExpenseFormComponent {

  private expense:Expense;
  private categories:string[];

  constructor(private expenseService:ExpenseService, private categoryService:CategoryService) {
    this.clearExpense();
    this.categories = categoryService.getCategories();
  }


  onSubmit() {
    this.expenseService.addExpense(this.expense);
    // TODO: use jequery.simplemodal.d.ts for correct typing
    (<any>$('#newExpense')).modal('hide');
    this.clearExpense();
  };

  private clearExpense() {
    this.expense = {
      id: -1,
      name: '',
      category: '',
      amount: null
    };
  };
}
