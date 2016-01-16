import {Component} from 'angular2/core';
import {ExpensesListComponent} from '../expensesList/expenses-list';
import {ExpenseFormComponent} from '../expenseForm/expense-form';
import {ExpenseService} from '../expenseService/expense-service';

@Component({
  selector: 'home',
  templateUrl: './components/home/home.html',
  styleUrls: ['./components/home/home.css'],
  directives: [ExpensesListComponent, ExpenseFormComponent]
})
export class HomeCmp {
  expenseService:ExpenseService;

  constructor() {
    this.expenseService = ExpenseService.getInstance();
  }
}
