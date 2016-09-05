/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    'user strict';
    angular.module('tcc-angular').controller('ArquivoController', function ($timeout, $location, arquivoService) {

        var vm = this;
        
        vm.uploadFile = uploadFile;

        function uploadFile(){
            var file = vm.myFile;
            console.log('file is ' );
            console.dir(file);
            arquivoService.uploadFileToUrl(file);
        }
    });
})();


