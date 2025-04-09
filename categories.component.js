(function () {
    'use strict';
  
    angular.module('MenuApp')
      .component('categories', {
        template: `
          <h2>Categories</h2>
          <ul>
            <li ng-repeat="category in $ctrl.categories">
              <!-- ui-sref passes along the short_name as parameter -->
              <a ui-sref="items({ category: category.short_name })">
                {{ category.name }} ({{ category.short_name }})
              </a>
            </li>
          </ul>
        `,
        bindings: {
          categories: '<'
        }
      });
  })();
  