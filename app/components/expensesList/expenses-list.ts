import {Component} from 'angular2/core';
import {ExpenseService} from '../expenseService/expense-service';
import {ExpenseCmp} from '../expense/expense';
import {InlineEditCmp} from '../inlineEdit/inline-edit';

@Component({
  selector: 'expenses-list',
  templateUrl: './components/expensesList/expenses-list.html',
  directives: [ExpenseCmp, InlineEditCmp]
})
export class ExpensesListComponent {
  constructor() {
    this.expenseService = ExpenseService.getInstance();
    this.expenses = this.expenseService.getExpenses();
  }

  expenses:Expense[];
  expenseService:ExpenseService;

  expensesSum() {
    var sum = 0;
    this.expenses.forEach(expense => sum += expense.amount);
    return sum;
  };

}
