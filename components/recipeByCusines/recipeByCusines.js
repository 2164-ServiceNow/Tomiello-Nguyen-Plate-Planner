const apiKey1='bf2d548141f94d67bcc99b158ade286a'


angular.module('recipeByCusines', []) 
.component('recipeByCusines', {
    templateUrl: 'components/recipeByCusines/recipeByCusines.html', 
    controller: function($scope, $http, searchBarService){ // This is dependency injection
        
        $scope.selectedCuisine = '';
        $scope.listRecipes = [];

        $scope.handleCuisineSearch = function() {
            $http.get(`https://api.spoonacular.com/recipes/complexSearch?cuisine=${$scope.selectedCuisine}&number=1&apiKey=${apiKey1}`)
            .then((response) => {
                console.log('Recipes retrieved:', response.data);
                $scope.listRecipes = response.data.results
            })
        }
        
        
    }
});