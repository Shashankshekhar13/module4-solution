(function () {
    'use strict';
    
    angular.module('MenuApp')
      .config(RoutesConfig);
  
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
      
      // For any unmatched url, redirect to the home view.
      $urlRouterProvider.otherwise('/');
  
      $stateProvider
        
        // Home state
        .state('home', {
          url: '/',
          template: '<h2>Welcome to our Restaurant</h2><p><a ui-sref="categories">View Categories</a></p>'
        })
        
        // Categories state
        .state('categories', {
          url: '/categories',
          template: '<categories categories="$resolve.categories"></categories>',
          resolve: {
            categories: ['MenuDataService', function (MenuDataService) {
              // Fetch all categories; return the promise.
              return MenuDataService.getAllCategories();
            }]
          }
        })
  
        // Items state, with a URL parameter (category: the category short_name)
        .state('items', {
          url: '/items/{category}',
          template: '<items items="$resolve.items" category-name="$resolve.categoryName"></items>',
          resolve: {
            // Resolve the items for the category.
            items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
              var categoryShortName = $stateParams.category;
              return MenuDataService.getItemsForCategory(categoryShortName);
            }],
            categoryName: ['$stateParams', function ($stateParams) {
              // Optionally, you could resolve the category name here.
              // For simplicity, we'll just return the short_name.
              return $stateParams.category;
            }]
          }
        });
    }
  })();
  