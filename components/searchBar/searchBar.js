angular.module('searchBar', [])

.component('searchbar',{
    templateUrl: 'components/searchBar/searchBar.html',
    controller: function SearchBarCtrl($scope,searchBarService){
        $scope.searchValue = ""

        $scope.search = function (){
            searchBarService.setQuery($scope.searchValue)
            console.log("woo")
        }
    }
})


