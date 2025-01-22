'use strict';

angular.module('platePlanner', [
    'ngRoute',
    'searchBar',
    'recipeByIngredients',
    'filterByDietary',
    'recipeByCusines',
    'recipeShoppingList',
    'prepTime',
    'recipeByNutritionalGoals',
    'recipeInfo',
    'randomRecipe'
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
    .when("/recipeShoppingList",{
        templateUrl : "pages/shoppingList.html"
    })
    .when("/prepTime",{
        templateUrl : "pages/prepTime.html"
    })
    .when("/recipeByNutritionalGoals",{
        templateUrl : "pages/nutritionalGoals.html"
    })
    .when("/recipeInfo",{
      templateUrl : "pages/recipeInfo.html"
  })
    })
    .when("/randomRecipe",{
        templateUrl : "pages/random.html"
    })

    
      $locationProvider.html5Mode({
        enabled:true,
        requireBase:false
  });
})
