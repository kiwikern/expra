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
        id: 1,
        name: 'Kebap',
        amount: 3,
        category: 'Food'
      },
      {
        id: 2,
        name: 'Couch',
        amount: 299,
        category: 'Furniture'
      },
      {
        id: 3,
        name: 'Titanic 3D',
        amount: 2,
        category: 'Cinema'
      },
      {
        id: 4,
        name: 'Bus Ticket',
        amount: 2,
        category: 'Transport'
      }
    ];
  }
}
