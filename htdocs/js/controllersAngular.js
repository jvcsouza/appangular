String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.nome = "João";
    $scope.sobrenome = "Souza";
    $scope.exibe = function(nome){
        return nome ? true : false;
    };
});