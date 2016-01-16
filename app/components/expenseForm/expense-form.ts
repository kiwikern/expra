import {Component} from 'angular2/core';
import {ExpenseService} from '../../services/expense-service';
import {ExpenseCmp} from '../expense/expense';
@Component({
  selector: 'expense-form',
  templateUrl: './components/expenseForm/expense-form.html',
  directives: [ExpenseCmp]
})

export class ExpenseFormComponent {
  constructor(expenseService:ExpenseService) {
    this.expenseService = expenseService;
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
      id: -1,
      name: '',
      category: '',
      amount: null
    };
  };
}
