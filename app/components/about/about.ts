import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

@Component({
  selector: 'about',
  templateUrl: './components/about/about.html',
  directives: [CORE_DIRECTIVES]
})
export class AboutCmp {
  constructor() {
    // empty
  }
 /*
 * @param newname  any text as input.
 * @returns return false to prevent default form submit behavior to refresh the page.
 */
  addName(newname): boolean {
    return false;
  }
}
