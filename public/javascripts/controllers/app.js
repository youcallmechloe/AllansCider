/**
 * Created by challan on 22/08/2017.
 */
angular.module('AllansCider', ['ngRoute', 'ngMaterial', 'ngMdIcons'])
    .config(function ($mdThemingProvider) {
        "use strict";
        $mdThemingProvider.theme('default')
            .primaryPalette('grey')
            .accentPalette('deep-orange', {
                'default': '500',
                'hue-1': '700',
                'hue-2': '800'
            });
    })
    .config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/', {
            templateUrl: 'partials/home.html',
            controller: 'HomeController'
        })
            .when('/ourcider', {
                templateUrl: 'partials/cider.html',
                controller: 'CiderController'
            })
            .otherwise({
                redirectTo: '/'
            })
    }]);