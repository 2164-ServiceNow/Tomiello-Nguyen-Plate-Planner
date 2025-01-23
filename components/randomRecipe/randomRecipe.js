const apiKey8='d3476fe6c2644d64ba5f7973ed2fb875'

angular.module('randomRecipe', [])

.component('randomRecipe',{
    templateUrl: 'components/randomRecipe/randomRecipe.html',
    controller: function($scope, $http){

        $scope.selectedDishType = ''
        $scope.recipe = ''

        $scope.searchRandomRecipes = function() {
            const dishParam = $scope.selectedDishType;

            // Make API request to fetch random recipe
            $http.get(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey8}&include-tags=${dishParam}&number=1&includeNutrition=true`)
                .then((response) => {
                $scope.recipe = response.data.recipes[0]
                console.log(response.data.recipes[0])
            });
        }
        

        $scope.searchRandomRecipes(); // on page load
                
        }
    }
)