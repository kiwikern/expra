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
var category_service_1 = require('../../services/category-service');
var CategoriesInlineEdit = (function () {
    function CategoriesInlineEdit(categoryService) {
        this.categoryService = categoryService;
        this.inEditMode = false;
        this.show = false;
    }
    CategoriesInlineEdit.prototype.toggleEditMode = function () {
        if (!this.inEditMode) {
            this.catOriginal = this.category;
        }
        else {
            this.category = this.catOriginal;
        }
        this.inEditMode = !this.inEditMode;
    };
    CategoriesInlineEdit.prototype.deleteCategory = function () {
        this.categoryService.removeCategory(this.catOriginal);
        this.toggleEditMode();
    };
    CategoriesInlineEdit.prototype.editCategory = function () {
        this.categoryService.editCategory(this.catOriginal, this.category);
        this.catOriginal = this.category;
        this.toggleEditMode();
    };
    CategoriesInlineEdit.prototype.toggleShow = function () {
        this.show = !this.show;
    };
    __decorate([
        core_2.Input(), 
        __metadata('design:type', String)
    ], CategoriesInlineEdit.prototype, "category", void 0);
    CategoriesInlineEdit = __decorate([
        core_1.Component({
            selector: 'categories-inline-edit',
            templateUrl: './components/categories-form/categories-inline-edit.html',
            styleUrls: ['./components/categories-form/categories-inline-edit.css'],
            host: {
                '(mouseover)': 'toggleShow()',
                '(mouseout)': 'toggleShow()'
            }
        }), 
        __metadata('design:paramtypes', [category_service_1.CategoryService])
    ], CategoriesInlineEdit);
    return CategoriesInlineEdit;
})();
exports.CategoriesInlineEdit = CategoriesInlineEdit;
//# sourceMappingURL=categeories-inline-edit.js.map