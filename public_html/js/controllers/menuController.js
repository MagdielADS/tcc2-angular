/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    'user strict';
    angular.module('tcc-angular').controller('MenuController', function ($timeout, $location) {

        var vm = this;
        
        vm.arquivos = arquivos;
        vm.inicio = inicio;
        vm.servicos = servicos;
        
        vm.naveActive = 1;
        
        function inicio(){
            vm.naveActive = 1;
            $location.path('inicio');
        }
        
        function arquivos(){
            vm.naveActive = 2;
            $location.path('arquivos');
        }
        
        function servicos(){
            vm.naveActive = 3;
            $location.path('arquivos');
        }
    });
})();

