//const apiKey='d3476fe6c2644d64ba5f7973ed2fb875'
//const apiKey='b7fad37df2234ebdbaadb879ae6c6a61'
const apiKey2='bf2d548141f94d67bcc99b158ade286a'

angular.module('filterByDietary', [])

.component('filterByDietary',{
    templateUrl: 'components/filterByDietary/filterByDietary.html',
    controller: function($scope, $http, searchBarService){
        
        $scope.selectedDiet = 'Vegan';  // Default diet preference
        $scope.recipes = [];

        $scope.searchRecipes = function() {
            const dietParam = $scope.selectedDiet;

            $http.get(`https://api.spoonacular.com/recipes/complexSearch?diet=${dietParam}&number=1&addRecipeInformation=true&apiKey=${apiKey2}`)
                .then((response) => {
                    $scope.recipes = response.data.results
                })
        };

        $scope.searchRecipes(); // initial search call

    }
})