const apiKey5='b7fad37df2234ebdbaadb879ae6c6a61'


angular.module('recipeByCusines', [])
.component('recipeByCusines', {
    templateUrl: 'components/recipeByCusines/recipeByCusines.html', 
    controller: function($scope, $http, searchBarService) {
        
        $scope.selectedCuisine = '';
        $scope.listRecipes = [];

        $scope.handleCuisineSearch = function() {
            const searchTerm = searchBarService.getQuery(); 
            $http.get(`https://api.spoonacular.com/recipes/complexSearch?cuisine=${$scope.selectedCuisine}&query=${searchTerm}&number=4&addRecipeInformation=true&apiKey=${apiKey5}`)
            .then((response) => {
                console.log('Recipes retrieved:', response.data);
                $scope.listRecipes = response.data.results;
            })
            .catch((error) => {
                console.error('Error fetching recipes:', error);
            });
        };
    }
});
