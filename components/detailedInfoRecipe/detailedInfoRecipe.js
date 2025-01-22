const apiKey3 = 'd3476fe6c2644d64ba5f7973ed2fb875';

angular.module('recipeInfo', [])
.component('recipeInfo', {
    templateUrl: 'components/detailedInfoRecipe/detailedInfoRecipe.html',
    controller: function($scope, $http, searchBarService) {
        $scope.newQuery = '';
        $scope.recipeDetails = {};

        $scope.$watch(function () {
            return searchBarService.getQuery();
        }, function (newQuery) {
            if (newQuery) {
                $scope.newQuery = newQuery;
                $scope.fetchRecipeDetails(); 
            }
        });

        $scope.fetchRecipeDetails = function() {
            if (!$scope.newQuery) return;

            const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${$scope.newQuery}&addRecipeInformation=true&apiKey=${apiKey3}&number=1`;

            $http.get(apiUrl).then(function(response) {
                if (response.data.results && response.data.results.length > 0) {
                    const recipeId = response.data.results[0].id;

                    //  detailed information for the first recipe
                    $http.get(`https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=true&apiKey=${apiKey3}`)
                        .then(function(detailsResponse) {
                            $scope.recipeDetails = detailsResponse.data;
                        });
                } else {
                    console.log('No recipes found for the given query.');
                    $scope.recipeDetails = {}; // Clear details if no recipes are found
                }
            });
        };
    }
});
