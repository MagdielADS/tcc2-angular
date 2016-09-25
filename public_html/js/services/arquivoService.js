/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    'user strict';
    angular.module('tcc-angular').service('arquivoService', ['$http', function ($http) {
        
        this.uploadFileToUrl = function(arquivo){
            var file = new FormData();
            file.append('file', arquivo);
            
            console.log("FILE SERvice ", file);
                
            return $http.post('http://localhost:8080/tcc-services/rest/georef/upload', file, {
                    transformRequest: angular.identity,
                    transformResponse: angular.identity,
                    headers: {
                    'Content-Type': 'multipart/form-data'
                    }
            });    
        };
        
        this.buscarColunasArquivo = function(caminho, caractere){
            var obj = {};
            obj.params = {
                caminho:caminho, 
                caractere: caractere
            };
            return $http.get("http://localhost:8080/tcc-services/rest/georef/colunas",obj);
        };
        
        
    }]);
})();
