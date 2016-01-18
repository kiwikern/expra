import {Component} from 'angular2/core';
import {Input} from 'angular2/core';
import {CategoryService} from '../../services/category-service';

@Component({
  selector: 'categories-inline-edit',
  templateUrl: './components/categories-form/categories-inline-edit.html',
  styleUrls: ['./components/categories-form/categories-inline-edit.css'],
  host: {
    '(mouseover)': 'toggleShow()',
    '(mouseout)' : 'toggleShow()'
  }
})
export class CategoriesInlineEdit {

  private inEditMode:boolean;
  @Input() private category:string;
  private catOriginal:string;
  private show:boolean;

  constructor(private categoryService:CategoryService) {
    this.inEditMode = false;
    this.show = false;
  }

  toggleEditMode() {
    if (!this.inEditMode) {
      this.catOriginal = this.category;
    } else {
      this.category = this.catOriginal;
    }
    this.inEditMode = !this.inEditMode;
  }

  deleteCategory() {
    this.categoryService.removeCategory(this.catOriginal);
    this.toggleEditMode();
  }

  editCategory() {
    this.categoryService.editCategory(this.catOriginal, this.category);
    this.catOriginal = this.category;
    this.toggleEditMode();
  }

  toggleShow() {
    this.show = !this.show;
  }

}
