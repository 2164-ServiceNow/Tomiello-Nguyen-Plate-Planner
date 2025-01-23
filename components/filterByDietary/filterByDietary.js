const apiKey2='d3476fe6c2644d64ba5f7973ed2fb875'

angular.module('filterByDietary', [])

.component('filterByDietary',{
    templateUrl: 'components/filterByDietary/filterByDietary.html',
    controller: function($scope, $http, searchBarService){
        
        $scope.selectedDiet = 'Vegan';  // Default diet preference
        $scope.recipes = [];

        $scope.newQuery = ''

        $scope.$watch(function () {
            return searchBarService.getQuery()
        },
        function (newQuery) {
            if (newQuery) {    
                $scope.newQuery = newQuery
            }
        });

        $scope.searchRecipes = function() {
            const dietParam = $scope.selectedDiet;

            $http.get(`https://api.spoonacular.com/recipes/complexSearch?query=${$scope.newQuery}&diet=${dietParam}&number=4&addRecipeInformation=true&apiKey=${apiKey2}`)
                .then((response) => {
                    $scope.recipes = response.data.results
                })
        };

        $scope.searchRecipes(); // initial search call

    }
})