'use strict';

angular.module('platePlanner', [
    'ngRoute',
    'searchBar'
  ])
  .config(function($locationProvider, $routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl: "pages/home.html"
    })
    .when("/detailed-info-recipe",{
        templateUrl: "components/detailed-info-recipe/detailed-info-recipe.html"
    })
    .when("/filter-by-dietary",{
        templateUrl: "components/filter-by-dietary/filter-by-dietaty.html"
    })
    
      $locationProvider.html5Mode({
        enabled:true,
        requireBase:false
  });
});