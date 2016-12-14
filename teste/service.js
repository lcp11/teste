produtos.factory('ProdutoSrv',[
        '$resource', function ($resource) {
            return $resource(
                'http://localhost:8181/produto', {
                }
            );
        }
    ]
);