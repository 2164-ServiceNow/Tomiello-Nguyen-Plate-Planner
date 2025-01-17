const apiKey7 = 'd3476fe6c2644d64ba5f7973ed2fb875';

angular.module('prepTime', [])
.component('prepTime', {
    templateUrl: 'components/recipeByMinPrepTime/recipeByMinPrepTime.html',
    controller: function($scope, $http) {

        $scope.selectedTime = '';
        $scope.listedRecipes = [];

        $scope.handleTimeSearch = function() {
            const maxTime = parseInt($scope.selectedTime, 10); //convert to int
        
            $http.get(`https://api.spoonacular.com/recipes/complexSearch?maxReadyTime=${maxTime}&number=1&addRecipeInformation=true&apiKey=${apiKey7}`)
                .then((response) => {
                    console.log('API Response:', response.data.results);
                    $scope.listedRecipes = response.data.results.filter(function(recipe) {
                        console.log('Selected Time:', maxTime, 'Recipe Time:', recipe.readyInMinutes);
                        return recipe.readyInMinutes <= maxTime;
                    });
                })
        };
    }
});

