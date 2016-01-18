import {Component} from 'angular2/core';
import {ExpenseService} from '../../services/expense-service';
import {InlineEditCmp} from '../inline-edit/inline-edit';

@Component({
  selector: 'expenses-list',
  templateUrl: './components/expenses-list/expenses-list.html',
  directives: [InlineEditCmp]
})
export class ExpensesListComponent {
  constructor(private expenseService:ExpenseService) {
    this.expenses = this.expenseService.getExpenses();
  }

  expenses:Expense[];

  expensesSum() {
    var sum = 0;
    this.expenses.forEach(expense => sum += expense.amount);
    return sum;
  };

}
