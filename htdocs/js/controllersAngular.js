String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.name = "Hello";
    $scope.sobrenome = "World";
    $scope.exibe = function(name, sobrenome){
       if(name && sobrenome) return true;
       else return false;
    };
    $scope.limpar = () => {
        $scope.name = null;
        $scope.sobrenome = null;
        document.getElementById("txtnome").focus();
    }
});