var produtos = angular.module('Web',['ngRoute','ngResource']);
produtos.config(
    ['$routeProvider',
        function ($routeProvider) {
            $routeProvider.when('/produto', {
                templateUrl: 'teste/produto.html'
            });
        }
    ]
);

