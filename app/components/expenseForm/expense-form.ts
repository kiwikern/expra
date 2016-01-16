import {Component} from 'angular2/core';
import {ExpenseService} from '../expenseService/expense-service';
import {ExpenseCmp} from '../expense/expense';
@Component({
  selector: 'expense-form',
  templateUrl: './components/expenseForm/expense-form.html',
  directives: [ExpenseCmp]
})

export class ExpenseFormComponent {
  constructor() {
    this.expenseService = ExpenseService.getInstance();
    this.clearExpense();
  }


  expense:Expense;
  expenseService:ExpenseService;

  onSubmit() {
    this.expenseService.addExpense(this.expense);
    // TODO: use jequery.simplemodal.d.ts for correct typing
    (<any>$('#newExpense')).modal('hide');
    this.clearExpense();
  };

  private clearExpense() {
    this.expense = {
      name: '',
      category: '',
      amount: null
    };
  };
}
