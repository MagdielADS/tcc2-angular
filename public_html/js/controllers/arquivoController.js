/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    'user strict';
    angular.module('tcc-angular').controller('ArquivoController', function ($timeout, $location) {

        var vm = this;
        
        vm.listarArquivos = listarArquivos;
        vm.voltar = voltar;
        
        //funções
        init();
        
        function init() {
            
        }
        
        function listarArquivos(){
            $location.path('arquivos');
        }
        
        function voltar(){
            $location.path('inicio');
        }
    });

})();


