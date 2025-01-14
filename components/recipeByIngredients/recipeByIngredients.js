const apiKey='33c88e383a894f4d837e743a8927115f'

angular.module('recipeByIngredients', [])

.component('recipeByIngredients',{
    templateUrl: 'components/recipeByIngredients/recipeByIngredients.html',
    controller: function($scope, $http, searchBarService){ // This is dependency injection
        console.log('in the controller');

        $scope.ingredients = ""

        
        $scope.$watch(function () {
                console.log('Watching for query updates...');
                return searchBarService.getQuery();
            },
            function (newQuery) {
                if (newQuery) {
                    console.log('New query detected:', newQuery);
        
                    $http.get(`https://api.spoonacular.com/food/ingredients/search?query=${newQuery}&apiKey=${apiKey}`)
                        .then((response) => {
                            console.log('API response:', response.data);
                            $scope.ingredients = response.data.results; // Ensure accessing 'results'
                        })
                        .catch((error) => {
                            console.error('API call failed:', error);
                        });
                }
            }
        );
        
    }
})

