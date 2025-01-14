const apiKey='33c88e383a894f4d837e743a8927115f'

angular.module('recipeByIngredients', [])

.component('recipeByIngredients',{
    templateUrl: 'components/recipeByIngredients/recipeByIngredients.html',
    controller: function($scope, $http, searchBarService){ // This is dependency injection
        console.log('in the controller');

        $scope.ingredients = [] 
        $scope.selectedIngredients=[]
        $scope.listRecipes=[]
        
        $scope.$watch(function () {
                console.log('Watching for query updates...');
                return searchBarService.getQuery();
            },
            function (newQuery) {
                if (newQuery) {
                    console.log('New query detected:', newQuery);
        
                    $http.get(`https://api.spoonacular.com/food/ingredients/search?query=${newQuery}&apiKey=${apiKey}`)
                        .then((response) => {
                            console.log('API response:', response.data);
                            $scope.ingredients = response.data.results; // Ensure accessing 'results'
                        })
                        .catch((error) => {
                            console.error('API call failed:', error);
                        });
                }
            }
        );
        $scope.toggleIngredientSelection = function(ingredient) {
            let exists = false;
        
            // Check if the ingredient is already in the selected list
            for (let i = 0; i < $scope.selectedIngredients.length; i++) {
                if ($scope.selectedIngredients[i].name === ingredient.name) {
                    exists = true;
                    // Remove the ingredient if it exists, i is the index, the 1 is amount you want removed
                    $scope.selectedIngredients.splice(i, 1);
                    break;
                }
            }
            // Add the ingredient if it doesn't exist to the end
            if (!exists) {
                $scope.selectedIngredients.push(ingredient);
            }
        };
        $scope.listRecipes= function (selectedIngredients){
            let ingredientsList=selectedIngredients.join(',')
            $http.get(`https://api.spoonacular.com/recipes/findByIngredients?query=${ingredientsList}&apiKey=${apiKey}`) //use this to get ID then give ID to other api for recipe url
                .then((response) =>{
                    $scope.listRecipes= response.data
                    console.log(listRecipes)
                })
        }
        // $scope.handleGenRecipeClick=function (listRecipes){
        //     listRecipes
        // }
        

        //Left off trying to grab ID so that we can give ID to recipeinfo API to get url link for recipe

        //Need to add next and prev so that we can go through all the recipes that we can make with current ingredients
        
    }
})

// Rem for later    https://api.spoonacular.com/recipes/73420/information?&apiKey=33c88e383a894f4d837e743a8927115f
