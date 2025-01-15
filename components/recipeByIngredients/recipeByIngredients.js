//const apiKey='d3476fe6c2644d64ba5f7973ed2fb875'
const apiKey='b7fad37df2234ebdbaadb879ae6c6a61'


angular.module('recipeByIngredients', [])

.component('recipeByIngredients',{
    templateUrl: 'components/recipeByIngredients/recipeByIngredients.html',
    controller: function($scope, $http, searchBarService){ // This is dependency injection
        console.log('in the controller');

        $scope.ingredients = [] 
        $scope.selectedIngredients=[]
        $scope.listRecipes=[]
        $scope.recipeInfoList = [];

        
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


        let recipeIDs=[]

        $scope.handleGenRecipeClick = function () {
            $scope.recipeInfoList = [];
           let ingredientNameList=[]
           for (let i=0;i<$scope.selectedIngredients.length;i++){
                ingredientNameList.push($scope.selectedIngredients[i].name)
            }
            // Extract the ingredient names and join them into a comma-separated string
           let ingredientsList=ingredientNameList.join(',')

           
            // Make the API call to fetch recipes
            $http.get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientsList}&number=5&apiKey=${apiKey}`) //number is hm is displayed
                .then((response) => {
                    // Store the recipes in the scope
                    $scope.listRecipes = response.data;
                    console.log('Recipes retrieved:', $scope.listRecipes);
                    $scope.listRecipes.forEach((recipe) => {
                        let currentID = recipe.id;
                        $http.get(`https://api.spoonacular.com/recipes/${currentID}/information?includeNutrition=false&apiKey=${apiKey}`) //needs to be in .then so that list recipe is populated
                            .then((response) => {
                            $scope.recipeInfoList.push(response.data)
                            })
                })
                .catch((error) => {
                    console.error('Error fetching recipes:', error);``
                });

            })
            
        };
        $scope.next = function () {
            $http.get(`${$scope.recipe.next}`)
            .then((response) => {
                $scope.recipeInfoList = response.data;
            })
        }

        $scope.previous = function () {
            // $http.get(`https://pokeapi.co/api/v2/pokemon/?offset=${80}&limit=${20}`)
            $http.get(`${$scope.recipe.previous}`) // SHAME THE TRAINER HE FORGOT TO UPDATE THIS TO PREVIOUS
            .then((response) => {
                $scope.recipeInfoList = response.data;
            })
        }


        
        
        

        //Left off trying to grab ID so that we can give ID to recipeinfo API to get url link for recipe

        //Need to add next and prev so that we can go through all the recipes that we can make with current ingredients
        
    }
})

// Rem for later    https://api.spoonacular.com/recipes/73420/information?&apiKey=33c88e383a894f4d837e743a8927115f
