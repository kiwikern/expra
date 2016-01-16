var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var testing_internal_1 = require('angular2/testing_internal');
var core_1 = require('angular2/core');
var dom_adapter_1 = require('angular2/src/platform/dom/dom_adapter');
var about_1 = require('./about');
function main() {
    testing_internal_1.describe('About component', function () {
        testing_internal_1.it('should work', testing_internal_1.injectAsync([testing_internal_1.TestComponentBuilder], function (tcb) {
            return tcb.overrideTemplate(TestComponent, '<div><about></about></div>')
                .createAsync(TestComponent)
                .then(function (rootTC) {
                rootTC.detectChanges();
                var aboutInstance = rootTC.debugElement.componentViewChildren[0].componentInstance;
                var aboutDOMEl = rootTC.debugElement.componentViewChildren[0].nativeElement;
                var nameListLen = function () {
                    return aboutInstance.list.names.length;
                };
                testing_internal_1.expect(nameListLen()).toEqual(4);
                testing_internal_1.expect(dom_adapter_1.DOM.querySelectorAll(aboutDOMEl, 'li').length).toEqual(nameListLen());
                aboutInstance.addName({ value: 'Minko' });
                rootTC.detectChanges();
                testing_internal_1.expect(nameListLen()).toEqual(5);
                testing_internal_1.expect(dom_adapter_1.DOM.querySelectorAll(aboutDOMEl, 'li').length).toEqual(nameListLen());
                testing_internal_1.expect(dom_adapter_1.DOM.querySelectorAll(aboutDOMEl, 'li')[4].textContent).toEqual('Minko');
            });
        }));
    });
}
exports.main = main;
var TestComponent = (function () {
    function TestComponent() {
    }
    TestComponent = __decorate([
        core_1.Component({ selector: 'test-cmp' }),
        core_1.View({ directives: [about_1.AboutCmp] }), 
        __metadata('design:paramtypes', [])
    ], TestComponent);
    return TestComponent;
})();
//# sourceMappingURL=about_spec.js.map