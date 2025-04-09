(function () {
    'use strict';
  
    angular.module('data')
      .service('MenuDataService', MenuDataService);
  
    MenuDataService.$inject = ['$http'];
    function MenuDataService($http) {
      var service = this;
      
      // Method to retrieve all categories.
      service.getAllCategories = function () {
        // REST API endpoint for categories.
        return $http({
          method: 'GET',
          url: 'https://coursera-jhu-default-rtdb.firebaseio.com/categories.json'
        }).then(function (result) {
          // Assuming the endpoint returns an object or array of categories.
          return result.data;
        });
      };
  
      // Method to retrieve menu items for a given category.
      service.getItemsForCategory = function (categoryShortName) {
        // Build URL by appending categoryShortName.
        return $http({
          method: 'GET',
          url: 'https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/' + categoryShortName + '.json'
        }).then(function (result) {
          // Assuming result.data has property "menu_items" or is already the list.
          return result.data;
        });
      };
    }
  })();
  