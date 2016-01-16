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
var core_2 = require('angular2/core');
var expense_service_1 = require('../../services/expense-service');
var InlineEditCmp = (function () {
    function InlineEditCmp(expenseService) {
        this.inEditMode = false;
        this.show = false;
        this.expenseService = expenseService;
        this.categories = this.expenseService.getCategories();
    }
    InlineEditCmp.prototype.toggleEditMode = function () {
        if (this.inEditMode) {
            this.expenseService.updateLocalStorage();
        }
        this.inEditMode = !this.inEditMode;
    };
    InlineEditCmp.prototype.toggleShow = function () {
        this.show = !this.show;
    };
    InlineEditCmp.prototype.delete = function (expense) {
        this.expenseService.delete(expense);
    };
    __decorate([
        core_2.Input(), 
        __metadata('design:type', Object)
    ], InlineEditCmp.prototype, "expense", void 0);
    __decorate([
        core_2.Input(), 
        __metadata('design:type', String)
    ], InlineEditCmp.prototype, "prop", void 0);
    InlineEditCmp = __decorate([
        core_1.Component({
            selector: 'inline-edit',
            templateUrl: './components/inlineEdit/inline-edit.html',
            styleUrls: ['./components/inlineEdit/inline-edit.css'],
            host: {
                '(mouseover)': 'toggleShow()',
                '(mouseout)': 'toggleShow()'
            }
        }), 
        __metadata('design:paramtypes', [expense_service_1.ExpenseService])
    ], InlineEditCmp);
    return InlineEditCmp;
})();
exports.InlineEditCmp = InlineEditCmp;
//# sourceMappingURL=inline-edit.js.map