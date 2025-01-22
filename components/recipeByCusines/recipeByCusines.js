//const apiKey5='bf2d548141f94d67bcc99b158ade286a'
const apiKey5='d3476fe6c2644d64ba5f7973ed2fb875'


angular.module('recipeByCusines', []) 
.component('recipeByCusines', {
    templateUrl: 'components/recipeByCusines/recipeByCusines.html', 
    controller: function($scope, $http){ 
        
        $scope.selectedCuisine = '';
        $scope.listRecipes = [];

        $scope.handleCuisineSearch = function() {
            $http.get(`https://api.spoonacular.com/recipes/complexSearch?cuisine=${$scope.selectedCuisine}&number=2&addRecipeInformation=true&apiKey=${apiKey5}`)
            .then((response) => {
                console.log('Recipes retrieved:', response.data);
                $scope.listRecipes = response.data.results
            })
        }
        
        
    }
});