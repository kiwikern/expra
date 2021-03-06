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
var expenses_list_1 = require('../expenses-list/expenses-list');
var expense_form_1 = require('../expense-form/expense-form');
var expense_service_1 = require('../../services/expense-service');
var HomeCmp = (function () {
    function HomeCmp(expenseService) {
        this.expenseService = expenseService;
    }
    HomeCmp = __decorate([
        core_1.Component({
            selector: 'home',
            templateUrl: './components/home/home.html',
            styleUrls: ['./components/home/home.css'],
            directives: [expenses_list_1.ExpensesListComponent, expense_form_1.ExpenseFormComponent]
        }), 
        __metadata('design:paramtypes', [expense_service_1.ExpenseService])
    ], HomeCmp);
    return HomeCmp;
})();
exports.HomeCmp = HomeCmp;
//# sourceMappingURL=home.js.map