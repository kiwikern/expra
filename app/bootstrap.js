var core_1 = require('angular2/core');
var browser_1 = require('angular2/platform/browser');
var router_1 = require('angular2/router');
var app_1 = require('./components/app/app');
var expense_service_1 = require('./services/expense-service');
browser_1.bootstrap(app_1.AppCmp, [
    core_1.provide(router_1.APP_BASE_HREF, { useValue: '<%= APP_ROOT %>' }),
    router_1.ROUTER_PROVIDERS,
    core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy }),
    expense_service_1.ExpenseService
]);
//# sourceMappingURL=bootstrap.js.map
