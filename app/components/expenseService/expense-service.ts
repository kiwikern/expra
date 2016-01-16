import {Injectable} from 'angular2/core';

@Injectable()
export class ExpenseService {
  static instance:ExpenseService;
  static LOCAL_STORAGE_KEY:string = 'expenses';
  expenses:Expense[];
  categories:string[];

  constructor(expenses?:Expense[]) {
    if (expenses === null || typeof expenses === 'undefined') {
      this.expenses = this.getDemoValues();
    } else {
      this.expenses = expenses;
    }
    this.categories = ['Food', 'Furniture', 'Cinema', 'Hairdresser', 'Transport', 'Furniture'];
  }

  static getInstance() {
    if (ExpenseService.instance === null || ExpenseService.instance === undefined) {
      let localStorageExpenses:Expense[] = JSON.parse(window.localStorage.getItem(ExpenseService.LOCAL_STORAGE_KEY));
      ExpenseService.instance = new ExpenseService(localStorageExpenses);
    }
    return ExpenseService.instance;
  }

  getExpenses() {
    return this.expenses;
  }

  addExpense(expense) {
    this.expenses.push(expense);
    this.updateLocalStorage();
  }

  clearExpenses() {
    this.expenses = this.expenses.splice(0);
    this.updateLocalStorage();
  };

  getCategories() {
    return this.categories;
  }

  updateLocalStorage() {
    let localStorageExpenses:string = JSON.stringify(this.expenses);
    window.localStorage.setItem(ExpenseService.LOCAL_STORAGE_KEY, localStorageExpenses);
  };

  private getDemoValues() {
    return [
      {
        name: 'Kebap',
        amount: 3,
        category: 'Food'
      },
      {
        name: 'Couch',
        amount: 299,
        category: 'Furniture'
      },
      {
        name: 'Titanic 3D',
        amount: 2,
        category: 'Cinema'
      },
      {
        name: 'Bus Ticket',
        amount: 2,
        category: 'Transport'
      }
    ];
  }
}
