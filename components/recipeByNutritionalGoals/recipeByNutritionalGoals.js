const apiKey4='d3476fe6c2644d64ba5f7973ed2fb875'
//const apiKey6='b7fad37df2234ebdbaadb879ae6c6a61'
//const apiKey6='bf2d548141f94d67bcc99b158ade286a'

angular.module('recipeByNutritionalGoals', [])

.component('recipeByNutritionalGoals',{
    templateUrl: 'components/recipeByNutritionalGoals/recipeByNutritionalGoals.html',
    controller: function($scope, $http, searchBarService){

        $scope.minProtein = '';
        $scope.maxFat = '';
        $scope.minCarbs = '';
        $scope.maxCalories = '';
        $scope.minFiber = '';
        $scope.maxSugar = '';
        $scope.maxSodium = '';
        $scope.maxCholesterol = '';

        $scope.newQuery = ''

        $scope.recipes = [];

        $scope.$watch(function () {
            return searchBarService.getQuery();
        },
        function (newQuery) {
            if (newQuery) {    
                $scope.newQuery = newQuery;
            }
        });

        // Function to handle form submission and search for recipes
        $scope.searchRecipes = function() {
            // Construct the API URL with user input
            let apiUrl = 'https://api.spoonacular.com/recipes/complexSearch?query=${newQuery}&apiKey=${apiKey4}&number=1';

            // Add query parameters based on user input
            if ($scope.minProtein) {
                apiUrl += `&minProtein=${$scope.minProtein}`;
            }
            if ($scope.maxFat) {
                apiUrl += `&maxFat=${$scope.maxFat}`;
            }
            if ($scope.minCarbs) {
                apiUrl += `&minCarbs=${$scope.minCarbs}`;
            }
            if ($scope.maxCalories) {
                apiUrl += `&maxCalories=${$scope.maxCalories}`;
            }
            if ($scope.minFiber) {
                apiUrl += `&minFiber=${$scope.minFiber}`;
            }
            if ($scope.maxSugar) {
                apiUrl += `&maxSugar=${$scope.maxSugar}`;
            }
            if ($scope.maxSodium) {
                apiUrl += `&maxSodium=${$scope.maxSodium}`;
            }
            if ($scope.maxCholesterol) {
                apiUrl += `&maxCholesterol=${$scope.maxCholesterol}`;
            }

            // Send the request to the Spoonacular API
            $http.get(apiUrl)
                .then(function(response) {
                    // Store the recipes in the scope
                    $scope.recipes = response.data.results;
                })
                
        }
    }
})