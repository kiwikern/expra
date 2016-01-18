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
var category_service_1 = require('../../services/category-service');
var ExpenseFormComponent = (function () {
    function ExpenseFormComponent(expenseService, categoryService) {
        this.expenseService = expenseService;
        this.categoryService = categoryService;
        this.clearExpense();
        this.categories = categoryService.getCategories();
    }
    ExpenseFormComponent.prototype.onSubmit = function () {
        this.expenseService.addExpense(this.expense);
        $('#newExpense').modal('hide');
        this.clearExpense();
    };
    ;
    ExpenseFormComponent.prototype.clearExpense = function () {
        this.expense = {
            id: -1,
            name: '',
            category: '',
            amount: null
        };
    };
    ;
    ExpenseFormComponent = __decorate([
        core_1.Component({
            selector: 'expense-form',
            templateUrl: './components/expense-form/expense-form.html'
        }), 
        __metadata('design:paramtypes', [expense_service_1.ExpenseService, category_service_1.CategoryService])
    ], ExpenseFormComponent);
    return ExpenseFormComponent;
})();
exports.ExpenseFormComponent = ExpenseFormComponent;
//# sourceMappingURL=expense-form.js.map