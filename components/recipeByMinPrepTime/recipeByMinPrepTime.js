 const apiKey7 = 'bf2d548141f94d67bcc99b158ade286a';

angular.module('prepTime', [])
.component('prepTime', {
    templateUrl: 'components/recipeByMinPrepTime/recipeByMinPrepTime.html',
    controller: function($scope, $http, searchBarService) {

        $scope.selectedTime = '';
        $scope.listedRecipes = [];

        $scope.newQuery = ''
        

        $scope.$watch(
            function () {
              return searchBarService.query; // Observe the query property
            },
            function (newQuery) {
              if (newQuery) {
                console.log('Updated Query:', newQuery);
                $scope.newQuery = newQuery;
              }
            }
          );

        $scope.handleTimeSearch = function() {
            const maxTime = parseInt($scope.selectedTime, 10); //convert to int
        
            $http.get(`https://api.spoonacular.com/recipes/complexSearch?query=${$scope.newQuery}&maxReadyTime=${maxTime}&number=4&addRecipeInformation=true&apiKey=${apiKey7}`)
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

