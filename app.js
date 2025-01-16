'use strict';

angular.module('platePlanner', [
    'ngRoute',
    'searchBar',
    'recipeByIngredients',
    'filterByDietary',
    'recipeByCusines'
  ])
  .config(function($locationProvider, $routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl: "pages/home.html"
    })
    // .when("/detailedInfoRecipe",{
    //     templateUrl: "components/detailedInfoRecipe/detailedInfRecipe.html"
    // })
    .when("/recipeByIngredients",{
        templateUrl: "pages/ingredients.html"
    })
    .when("/filterByDietary",{
        templateUrl: "pages/diet.html"
    })
    .when("/recipeByCusines",{
        templateUrl : "pages/cusine.html"
    })

    
      $locationProvider.html5Mode({
        enabled:true,
        requireBase:false
  });
})