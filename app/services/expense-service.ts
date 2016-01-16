//var uuid = require('uuid/uuid');


export class ExpenseService {
  static instance:ExpenseService;
  static LOCAL_STORAGE_KEY:string = 'expenses';
  expenses:Expense[];
  categories:string[];

  constructor() {
    let expenses = JSON.parse(window.localStorage.getItem(ExpenseService.LOCAL_STORAGE_KEY));
    if (expenses === null || typeof expenses === 'undefined') {
      this.expenses = this.getDemoValues();
    } else {
      this.expenses = expenses;
    }
    this.categories = ['Food', 'Furniture', 'Cinema', 'Hairdresser', 'Transport', 'Furniture'];
  }

  getExpenses() {
    return this.expenses;
  }

  addExpense(expense) {
    expense.id = Math.random()*10000000000000000;
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

  delete(expense:Expense) {
    let index = this.expenses.indexOf(expense);
    if (index > -1) {
      this.expenses.splice(index, 1);
      this.updateLocalStorage();
    }
  }

  updateLocalStorage() {
    let localStorageExpenses:string = JSON.stringify(this.expenses);
    window.localStorage.setItem(ExpenseService.LOCAL_STORAGE_KEY, localStorageExpenses);
  };

  private getDemoValues():Expense[] {
    return [
      {
        'id': 1,
        'name': 'Kebap',
        'amount': 3,
        'category': 'Food'
      },
      {
        'id': 2,
        'name': 'Couch',
        'amount': 299,
        'category': 'Furniture'
      },
      {
        'id': 3,
        'name': 'Titanic 3D',
        'amount': 2,
        'category': 'Cinema'
      },
      {
        'id': 4,
        'name': 'Bus Ticket',
        'amount': 2,
        'category': 'Transport'
      },
      {
        'id': 5,
        'name': 'Pretzel Roll',
        'category': 'Food',
        'amount': 0.39
      },
      {
        'id': 6,
        'name': 'Kopfgeld',
        'category': 'Hairdresser',
        'amount': 20
      },
      {
        'id': 7,
        'name': 'Unmade Beds',
        'category': 'Cinema',
        'amount': 8
      },
      {
        'id': 8,
        'name': 'Train Ticket',
        'category': 'Transport',
        'amount': 141
      },
      {
        'id': 9,
        'name': 'King\'s Speech',
        'category': 'Cinema',
        'amount': 8.5
      },
      {
        'id': 10,
        'name': 'Pizza',
        'category': 'Food',
        'amount': 8
      },
      {
        'id': 11,
        'name': 'Flight to Amsterdam',
        'category': 'Transport',
        'amount': 200
      }
    ];
  }
}
