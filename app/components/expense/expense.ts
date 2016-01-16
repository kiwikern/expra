import {Component} from 'angular2/core';
import {Input} from 'angular2/core';

@Component({
  selector: 'expense-cmp, [expense-cmp]',
  templateUrl: './components/expense/expense.html',
  styleUrls: ['./components/expense/expense.css']
})
export class ExpenseCmp {
  @Input() expense:Expense;
}
