export class CategoryService {

  private static LOCAL_STORAGE_KEY:string = 'categories';
  private categories:string[];

  constructor() {
    let categories:string[] = JSON.parse(window.localStorage.getItem(CategoryService.LOCAL_STORAGE_KEY));
    if (categories === null || typeof  categories === 'undefined') {
      this.categories = CategoryService.getDemoValues();
    } else {
      this.categories = categories;
    }
  }

  private static getDemoValues() {
    return ['Food', 'Furniture', 'Cinema', 'Hairdresser', 'Transport', 'Furniture'];
  }

  getCategories() {
    return this.categories;
  }

  addCategory(category:string) {
    this.categories.push(category);
    this.updateLocalStorage();
  }

  removeCategory(category:string) {
    let index:number = this.categories.indexOf(category);
    if (index !== -1) {
      this.categories.splice(index, 1);
      this.updateLocalStorage();
    }
  }

  editCategory(oldCategory:string, newCategory:string) {
    let index:number = this.categories.indexOf(oldCategory);
    if (index !== -1) {
      this.categories[index] = newCategory;
      this.updateLocalStorage();
    }
  }

  private updateLocalStorage() {
    let localStorageCategories:string = JSON.stringify(this.categories);
    window.localStorage.setItem(CategoryService.LOCAL_STORAGE_KEY, localStorageCategories);
  }

}
