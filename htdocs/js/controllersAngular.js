String.prototype.capitalize = function() {
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
        document.getElementById("caixa").animate([
            // keyframes
            { transform: 'translateY(100px)' }, 
            { transform: 'translateY(-100px)' },
            { transform: "skewY(10deg)" },
            { transform: "scaleY(-1)" },
            { transform: 'translateY(100px)' }, 
            { transform: 'translateY(0)' },
          ], { 
            duration: 1500,
            iterations: 1
          });
        }
        setTimeout(() => {
            document.getElementById("txtnome").focus();
        }, 1501);
});