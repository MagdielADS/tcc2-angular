/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    'user strict';
    angular.module('tcc-angular').controller('ArquivoController', function ($timeout, $location, arquivoService, mensagemService) {
        var vm = this;
        vm.arquivo = {};
        vm.mensagens = [];
        
        function limparMensagens(){
            vm.mensagens = [];
        }
        
        vm.uploadFile = function uploadFile(){
            if( vm.arquivo.caractere ){
                
                arquivoService.uploadFileToUrl( vm.arquivo.upload, vm.arquivo.extensao ).success( function( response ){
                    if( response ){
                        console.log("Arquivo: ",response);
                        
                        //A PARTIR DAQUI SÓ FUNCIONA PRA CSV
                        
                        arquivoService.buscarColunasArquivo( response, vm.arquivo.caractere ).success( function( resp ){
                            if(resp){
                                console.log("COLUNAS ", resp);
                                vm.colunas = resp;
                            }
                        });
                    }
                });
            }else{
                limparMensagens();
                vm.mensagens.push(mensagemService.getMensagemErro('Por favor informe o caractere de separação.'));
            }
        };
    });
})();


