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
            
//            $http.post("http://localhost:8080/tcc-services/rest/georef/upload", file);
            
            $http({
                  method: 'POST',
                  url: 'http://localhost:8080/tcc-services/rest/georef/upload',
                  headers: { 'Content-Type': 'multipart/form-data'},
                  data:  file
                })
                .success(function(data, status) {                       
                    alert("Success ... " + status);
                })
                .error(function(data, status) {
                    alert("Error ... " + status);
                });
        };
    }]);
})();
