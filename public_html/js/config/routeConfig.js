/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('app-routes', [])
        .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
            $urlRouterProvider.otherwise('/');

            $stateProvider
                    .state('inicio', {
                        name: 'inicio',
                        stichy: true,
                        url: '/',
                        views: {
                            cabecalho: {
                                templateUrl: 'view/cabecalho.html'
                            },
                            menu: {
                                templateUrl: 'view/menu.html'
                            },
                            main: {
                                templateUrl: 'view/inicio.html'
                            },
                            rodape: {
                                templateUrl: 'view/rodape.html'
                            }
                        }
                    })
                    .state('arquivos', {
                        name: 'arquivos',
                        url: 'arquivos',
                        parent: 'inicio',
                        views: {
                            conteudo: {
                                templateUrl: 'view/arquivos.html'
                            }
                        }
                    });
        });

