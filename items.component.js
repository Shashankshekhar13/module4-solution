(function () {
    'use strict';
  
    angular.module('MenuApp')
      .component('items', {
        template: `
          <h2>Items in Category: {{$ctrl.categoryName}}</h2>
          <ul>
            <li ng-repeat="item in $ctrl.items" class="item">
              <strong>{{ item.name }}</strong> - {{ item.description }}
            </li>
          </ul>
        `,
        bindings: {
          items: '<',
          categoryName: '<'
        }
      });
  })();
  