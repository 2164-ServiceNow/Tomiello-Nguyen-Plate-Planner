//const apiKey8='d3476fe6c2644d64ba5f7973ed2fb875'
const apiKey8='b7fad37df2234ebdbaadb879ae6c6a61'
//const apiKey8='bf2d548141f94d67bcc99b158ade286a'

angular.module('randomRecipe', [])

.component('randomRecipe',{
    templateUrl: 'components/randomRecipe/randomRecipe.html',
    controller: function($scope, $http){
        
        // List of meal types
        $scope.dishTypes = ['Breakfast', 'Appetizer', 'Main Course', 'Snack', 'Dessert', 
                            'Soup', 'Bread', 'Salad', 'Side Dish'];
        $scope.selectedDishType = '';

        $scope.getRandomRecipe = function() {

            let apiUrl = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey8}&number=1`;

            // Add selected dish types if available
            if ($scope.selectedDishType) {
                apiUrl += '&include-tags=' + $scope.selectedDishType;
            }

            // Include nutrition information
            apiUrl += '&includeNutrition=true';

            // Make API request to fetch random recipe
            $http.get(apiUrl)
                .then(function(response) {
                $scope.recipe = response.data.recipes[0];
            });
        };

        $scope.getRandomRecipe(); // on page load
                
        }
    }
)