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
var categeories_inline_edit_1 = require('../categories-form/categeories-inline-edit');
var category_service_1 = require('../../services/category-service');
var CategoriesList = (function () {
    function CategoriesList(categoryService) {
        this.categoryService = categoryService;
        this.categories = categoryService.getCategories();
    }
    CategoriesList.prototype.add = function (category) {
        this.categoryService.addCategory(category);
        this.categories = this.categoryService.getCategories();
        this.newCat = '';
    };
    CategoriesList = __decorate([
        core_1.Component({
            selector: 'categories',
            directives: [categeories_inline_edit_1.CategoriesInlineEdit],
            templateUrl: './components/categories-list/categories-list.html',
            styleUrls: ['./components/categories-list/categories-list.css']
        }), 
        __metadata('design:paramtypes', [category_service_1.CategoryService])
    ], CategoriesList);
    return CategoriesList;
})();
exports.CategoriesList = CategoriesList;
//# sourceMappingURL=categories-list.js.map