var CategoryService = (function () {
    function CategoryService() {
        var categories = JSON.parse(window.localStorage.getItem(CategoryService.LOCAL_STORAGE_KEY));
        if (categories === null || typeof categories === 'undefined') {
            this.categories = CategoryService.getDemoValues();
        }
        else {
            this.categories = categories;
        }
    }
    CategoryService.getDemoValues = function () {
        return ['Food', 'Furniture', 'Cinema', 'Hairdresser', 'Transport', 'Furniture'];
    };
    CategoryService.prototype.getCategories = function () {
        return this.categories;
    };
    CategoryService.prototype.addCategory = function (category) {
        this.categories.push(category);
        this.updateLocalStorage();
    };
    CategoryService.prototype.removeCategory = function (category) {
        var index = this.categories.indexOf(category);
        if (index !== -1) {
            this.categories.splice(index, 1);
            this.updateLocalStorage();
        }
    };
    CategoryService.prototype.editCategory = function (oldCategory, newCategory) {
        var index = this.categories.indexOf(oldCategory);
        if (index !== -1) {
            this.categories[index] = newCategory;
            this.updateLocalStorage();
        }
    };
    CategoryService.prototype.updateLocalStorage = function () {
        var localStorageCategories = JSON.stringify(this.categories);
        window.localStorage.setItem(CategoryService.LOCAL_STORAGE_KEY, localStorageCategories);
    };
    CategoryService.LOCAL_STORAGE_KEY = 'categories';
    return CategoryService;
})();
exports.CategoryService = CategoryService;
//# sourceMappingURL=category-service.js.map