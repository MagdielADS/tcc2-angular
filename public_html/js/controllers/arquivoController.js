/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    'user strict';
    angular.module('tcc-angular').controller('ArquivoController', function ($timeout, $location, arquivoService,$rootScope) {

        var vm = this;
        
        vm.erroCaractere = '';
        vm.arquivo = {};

        vm.uploadFile = function uploadFile(){
            vm.erroCaractere = '';
            if( vm.arquivo.caractere ){
                var file = vm.myFile;
                console.log('file is ' );
                console.dir(file);
                arquivoService.uploadFileToUrl( file ).success( function( response ){
                    if( response ){
                        console.log("Resp ", response);
                        arquivoService.buscarColunasArquivo( response, vm.arquivo.caractere ).success( function( resp ){
                            if(resp){
                                console.log("COLUNAS ", resp);
                            }
                        });
                    }
                });
            }else{
                vm.erroCaractere = 'Necessário informar caractere de tabulação para upload.';
            }
        }
    });
})();


