produtos.controller('ProdutoCtrl',
    ['$scope','ProdutoSrv',
        function ProdutoCtrl($scope, ProdutoSrv){
            ProdutoSrv.get(
                function success(response) {
                    console.log("sucesso:" + JSON.stringify(response));
                    $scope.produto=response;
                },
                function error(errorResponse) {
                    console.log("Error:" + JSON.stringify(errorResponse));
                }
            );
        }
    ]
);


