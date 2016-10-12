/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    'user strict';
    angular.module('tcc-angular').controller('MenuController', function ($timeout, $location) {
        var vm = this;
        vm.naveActive = 1;
        
        vm.inicio = function inicio(){
            vm.naveActive = 1;
            $location.path('inicio');
        };
        
        vm.arquivos = function arquivos(){
            vm.naveActive = 2;
            $location.path('arquivos');
        };
        
        vm.servicos = function servicos(){
            vm.naveActive = 3;
            $location.path('arquivos');
        };
    });
})();

