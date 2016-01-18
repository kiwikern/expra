var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var expense_service_1 = require('../../services/expense-service');
var inline_edit_1 = require('../inline-edit/inline-edit');
var ExpensesListComponent = (function () {
    function ExpensesListComponent(expenseService) {
        this.expenseService = expenseService;
        this.expenses = this.expenseService.getExpenses();
    }
    ExpensesListComponent.prototype.expensesSum = function () {
        var sum = 0;
        this.expenses.forEach(function (expense) { return sum += expense.amount; });
        return sum;
    };
    ;
    ExpensesListComponent = __decorate([
        core_1.Component({
            selector: 'expenses-list',
            templateUrl: './components/expenses-list/expenses-list.html',
            directives: [inline_edit_1.InlineEditCmp]
        }), 
        __metadata('design:paramtypes', [expense_service_1.ExpenseService])
    ], ExpensesListComponent);
    return ExpensesListComponent;
})();
exports.ExpensesListComponent = ExpensesListComponent;
//# sourceMappingURL=expenses-list.js.map