(function () {
    'use strict';
    angular
        .module('app')
        .controller('appController', function($scope){

            $scope.user={
                email:'',
                nombre:'',
                comentario:''};

            $scope.submit=function(){
                alert("Form submited");
            };
        });
})();
