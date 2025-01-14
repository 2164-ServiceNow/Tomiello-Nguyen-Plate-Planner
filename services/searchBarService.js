angular.module('platePlanner')
    .service('searchBarService', function(){
        this.query = '';

        this.setQuery = function(query){
            this.query = query
            console.log(`${query} from setQuery in the Service!`);
        }

        this.getQuery = function(){
            console.log("in getQuery")
            return this.query
        }
    })


    