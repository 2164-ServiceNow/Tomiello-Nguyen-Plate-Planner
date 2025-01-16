const apiKey6='d3476fe6c2644d64ba5f7973ed2fb875'
//const apiKey6='b7fad37df2234ebdbaadb879ae6c6a61'
//const apiKey6='bf2d548141f94d67bcc99b158ade286a'

angular.module('recipeShoppingList', [])

.component('recipeShoppingList',{
    templateUrl: 'components/recipeShoppingList/recipeShoppingList.html',
    controller: function($scope, $http, searchBarService){

        $scope.recipes = []
        
        $scope.$watch(function () {
            return searchBarService.getQuery();
        },
        function (newQuery) {
            if (newQuery) {    
                $http.get(`https://api.spoonacular.com/recipes/complexSearch?query=${newQuery}&number=3&addRecipeInformation=true&apiKey=${apiKey6}`)
                    .then((response) => {
                        $scope.recipes = response.data.results;
                    })
            }
        });
        
        $scope.handleRecipeClick = function () {
            const selected = $scope.recipes.filter(function(recipe) {
                return recipe.selected;  // Returns only the selected recipes
            });

            $scope.selectedRecipe = selected[0];

            $http.get(`https://api.spoonacular.com/recipes/${$scope.selectedRecipe.id}/priceBreakdownWidget.json?apiKey=${apiKey6}`)
                .then((response) => {
                    // Store the ingredients and prices in shoppingList
                    $scope.shoppingList = response.data.ingredients;

                    let totalCost = 0;

                    for (let i = 0; i < $scope.shoppingList.length; i++) {
                        $scope.shoppingList[i].price = (parseFloat($scope.shoppingList[i].price) / 20).toFixed(2);
                        totalCost += parseFloat($scope.shoppingList[i].price);
                    }

                    $scope.totalCost = totalCost.toFixed(2);
                });
        }
    }
})