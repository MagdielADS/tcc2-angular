/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    'user strict';
    angular.module('tcc-angular').service('arquivoService', ['$http', function ($http) {
        var service = this;
        
        service.uploadFileToUrl = function(arquivo, extensao){
            var file = new FormData();
            file.append('file', arquivo);
            var tipoArquivo = "";
            
            console.log("EXT ", extensao);
            
            switch(extensao) {
                case '1':
                    tipoArquivo = 'uploadCSV';
                    break;
                case '2':
                    tipoArquivo = 'uploadXML';
                    break;
                case '3':
                    tipoArquivo = 'uploadJSON';
                    break;
            }
            
            console.log("TIPO ", tipoArquivo);
            return $http.post('http://localhost:8080/tcc-services/rest/georef/'+tipoArquivo, file, {
                    transformRequest: angular.identity,
                    transformResponse: angular.identity,
                    headers: {
                    'Content-Type': 'multipart/form-data'
                    }
            });    
        };
        
        service.uploadFileToUrlXML = function(arquivo){
            var file = new FormData();
            file.append('file', arquivo);
            return $http.post('http://localhost:8080/tcc-services/rest/georef/uploadCSV', file, {
                    transformRequest: angular.identity,
                    transformResponse: angular.identity,
                    headers: {
                    'Content-Type': 'multipart/form-data'
                    }
            });    
        };
        
        service.uploadFileToUrlJSON = function(arquivo){
            var file = new FormData();
            file.append('file', arquivo);

            return $http.post('http://localhost:8080/tcc-services/rest/georef/uploadCSV', file, {
                    transformRequest: angular.identity,
                    transformResponse: angular.identity,
                    headers: {
                    'Content-Type': 'multipart/form-data'
                    }
            });    
        };
        
        service.buscarColunasArquivo = function(caminho, caractere){
            var obj = {};
            obj.params = {
                caminho:caminho, 
                caractere: caractere
            };
            return $http.get("http://localhost:8080/tcc-services/rest/georef/colunas",obj);
        };
        
        
    }]);
})();
