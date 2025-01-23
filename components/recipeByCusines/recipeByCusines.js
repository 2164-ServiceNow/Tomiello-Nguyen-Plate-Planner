const apiKey5='b7fad37df2234ebdbaadb879ae6c6a61'


angular.module('recipeByCusines', []) 
.component('recipeByCusines', {
    templateUrl: 'components/recipeByCusines/recipeByCusines.html', 
    controller: function($scope, $http){ 
        
        $scope.selectedCuisine = '';
        $scope.listRecipes = [];

        $scope.handleCuisineSearch = function() {
            $http.get(`https://api.spoonacular.com/recipes/complexSearch?cuisine=${$scope.selectedCuisine}&number=4&addRecipeInformation=true&apiKey=${apiKey5}`)
            .then((response) => {
                console.log('Recipes retrieved:', response.data);
                $scope.listRecipes = response.data.results
            })
        }
        
        
    }
});