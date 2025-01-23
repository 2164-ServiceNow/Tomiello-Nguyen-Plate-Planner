const apiKey4='fb4b1aafd8e9434695d2a6bb51298aad'

angular.module('recipeByNutritionalGoals', [])

.component('recipeByNutritionalGoals',{
    templateUrl: 'components/recipeByNutritionalGoals/recipeByNutritionalGoals.html',
    controller: function($scope, $http, searchBarService){

        $scope.minProtein = ''
        $scope.maxFat = ''
        $scope.minCarbs = ''
        $scope.maxCarbs = ''
        $scope.maxCalories = ''
        $scope.minFiber = ''
        $scope.maxSugar = ''
        $scope.maxSodium = ''
        $scope.maxCholesterol = ''

        $scope.newQuery = ''

        $scope.recipes = []

        $scope.$watch(function () {
            return searchBarService.getQuery()
        },
        function (newQuery) {
            if (newQuery) {    
                $scope.newQuery = newQuery
            }
        });

        // Function to handle form submission and search for recipes
        $scope.searchRecipes = function() {
            // Construct the API URL with user input
            let apiUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${$scope.newQuery}&addRecipeInformation=true&apiKey=${apiKey4}&number=4`;

            // clearing old results
            $scope.recipes = [];

            // Add query parameters based on user input
            if ($scope.minProtein) {
                apiUrl += `&minProtein=${$scope.minProtein}`
            }
            if ($scope.maxFat) {
                apiUrl += `&maxFat=${$scope.maxFat}`
            }
            if ($scope.minCarbs) {
                apiUrl += `&minCarbs=${$scope.minCarbs}`
            }
            if ($scope.maxCarbs) {
                apiUrl += `&maxCarbs=${$scope.maxCarbs}`
            }
            if ($scope.maxCalories) {
                apiUrl += `&maxCalories=${$scope.maxCalories}`
            }
            if ($scope.minFiber) {
                apiUrl += `&minFiber=${$scope.minFiber}`
            }
            if ($scope.maxSugar) {
                apiUrl += `&maxSugar=${$scope.maxSugar}`
            }
            if ($scope.maxSodium) {
                apiUrl += `&maxSodium=${$scope.maxSodium}`
            }
            if ($scope.maxCholesterol) {
                apiUrl += `&maxCholesterol=${$scope.maxCholesterol}`
            }

            // Send the request to the Spoonacular API
            $http.get(apiUrl)
                .then(function(response) {
                    // Store the recipes in the scope
                    $scope.recipes = response.data.results
                    if (response.data.results && response.data.results.length === 0) {
                        console.log('No recipes found in the response data.');
                    }
                })                
        }
    }
})