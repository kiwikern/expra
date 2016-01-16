var ExpenseService = (function () {
    function ExpenseService(expenses) {
        if (expenses === null || typeof expenses === 'undefined') {
            this.expenses = this.getDemoValues();
        }
        else {
            this.expenses = expenses;
        }
        this.categories = ['Food', 'Furniture', 'Cinema', 'Hairdresser', 'Transport', 'Furniture'];
    }
    ExpenseService.getInstance = function () {
        if (ExpenseService.instance === null || ExpenseService.instance === undefined) {
            var localStorageExpenses = JSON.parse(window.localStorage.getItem(ExpenseService.LOCAL_STORAGE_KEY));
            ExpenseService.instance = new ExpenseService(localStorageExpenses);
        }
        return ExpenseService.instance;
    };
    ExpenseService.prototype.getExpenses = function () {
        return this.expenses;
    };
    ExpenseService.prototype.addExpense = function (expense) {
        this.expenses.push(expense);
        this.updateLocalStorage();
    };
    ExpenseService.prototype.clearExpenses = function () {
        this.expenses = this.expenses.splice(0);
        this.updateLocalStorage();
    };
    ;
    ExpenseService.prototype.getCategories = function () {
        return this.categories;
    };
    ExpenseService.prototype.updateLocalStorage = function () {
        var localStorageExpenses = JSON.stringify(this.expenses);
        window.localStorage.setItem(ExpenseService.LOCAL_STORAGE_KEY, localStorageExpenses);
    };
    ;
    ExpenseService.prototype.getDemoValues = function () {
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
    };
    ExpenseService.LOCAL_STORAGE_KEY = 'expenses';
    return ExpenseService;
})();
exports.ExpenseService = ExpenseService;
//# sourceMappingURL=expense-service.js.map