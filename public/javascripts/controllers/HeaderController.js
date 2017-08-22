/**
 * Created by challan on 22/08/2017.
 */
angular.module('AllansCider').controller('HeaderController', ['$scope', '$http', '$route', '$location',
    function($scope, $http, $route, $location){

        $scope.reRoute = function(location){
            console.log(location);
            switch(location){
                case 'home':
                    $location.url('/');
                    break;
                case 'cider':
                    $location.url('/ourcider')
            }
        }
}]);