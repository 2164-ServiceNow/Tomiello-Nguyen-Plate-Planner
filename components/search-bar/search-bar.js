angular.module('searchBar', [])

.component('searchbar',{
    templateUrl: 'components/searchBar/searchBar.html',
    controller: function SearchBarCtrl($scope){
        $scope.searchValue = ""
    }
})


