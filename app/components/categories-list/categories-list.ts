import {Component} from 'angular2/core';
import {CategoriesInlineEdit} from '../categories-form/categeories-inline-edit';
import {CategoryService} from '../../services/category-service';

@Component({
  selector: 'categories',
  directives: [CategoriesInlineEdit],
  templateUrl: './components/categories-list/categories-list.html',
  styleUrls: ['./components/categories-list/categories-list.css']
})
export class CategoriesList {

  private categories:string[];
  private newCat:string;

  constructor(private categoryService:CategoryService) {
    this.categories = categoryService.getCategories();
  }

  add(category:string) {
    this.categoryService.addCategory(category);
    this.categories = this.categoryService.getCategories();
    this.newCat = '';
  }

}
