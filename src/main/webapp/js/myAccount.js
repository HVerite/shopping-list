shoppingList.controller('MyAccountCtrl', [ '$scope', '$http', '$location', function($scope, $http, $location) {
    $scope.newListTitle = '';
    $scope.myShoppingLists = [];

    $scope.create = function () {
        $http.post('/api/users/1/lists', $scope.newListTitle)
            .success(function(data) {
                $scope.myShoppingLists.push(data);
                $location.path('/me');
            });
    };
}]);