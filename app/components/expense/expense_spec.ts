import {
  TestComponentBuilder,
  describe,
  expect,
  injectAsync,
  it,
} from 'angular2/testing_internal';
import {Component, View} from 'angular2/core';
import {DOM} from 'angular2/src/platform/dom/dom_adapter';
import {ExpenseCmp} from './expense';

export function main() {
  describe('Expense component', () => {
    it('should work',
      injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        return tcb.overrideTemplate(TestComponent, '<div><expense></expense></div>')
          .createAsync(TestComponent)
          .then((rootTC) => {
            let homeDOMEl = rootTC.debugElement.componentViewChildren[0].nativeElement;

            expect(DOM.querySelectorAll(homeDOMEl, 'h1')[0].textContent).toEqual('Expense');
          });
      }));
  });
}

@Component({selector: 'test-cmp'})
@View({directives: [ExpenseCmp]})
class TestComponent {}
