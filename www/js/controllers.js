(function () {
    'use strict';
    angular
        .module('app')
        .controller('appController', function($scope){

            $scope.user={
                email:'',
                nombre:'',
                comentario:''};

            $scope.enviar=function(){
                alert("Form submited");
            };
        });
})();
