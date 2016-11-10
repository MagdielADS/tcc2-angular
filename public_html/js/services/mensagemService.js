/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    'user strict';
    angular.module('tcc-angular').service('mensagemService', [function () {
        var service = this;
        
        service.getMensagemSucesso = function(texto){
            return {
                tipo : 'mSucesso',
                texto : texto
            }
        };
        
        service.getMensagemErro = function(texto){
            return {
                tipo : 'mErro',
                texto : texto
            }
        };

        service.getMensagemInfo = function(texto){
            return {
                tipo : 'mInfo',
                texto : texto
            }
        };
    }]);
})();
