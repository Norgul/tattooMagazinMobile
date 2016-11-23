angular.module('app.routes', [])

    .config(function ($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            .state('menu', {
                url: '/side-menu',
                templateUrl: 'templates/menu.html',
                abstract: true
            })

            .state('menu.news', {
                url: '/news',
                views: {
                    'side-menu1': {
                        templateUrl: 'templates/news.html',
                        controller: 'newsCtrl'
                    }
                }
            })

            .state('menu.newsShow', {
                url: '/news/:id',
                views: {
                    'side-menu1': {
                        templateUrl: 'templates/newsShow.html',
                        controller: 'NewsShowCtrl'
                    }
                }
            })

            .state('menu.kleinanzeigen', {
                url: '/kleinanzeigen',
                views: {
                    'side-menu1': {
                        templateUrl: 'templates/kleinanzeigen.html',
                        controller: 'KleinanzeigenCtrl'
                    }
                }
            })

            .state('menu.kleinanzeigenShow', {
                url: '/kleinanzeigen/:id',
                views: {
                    'side-menu1': {
                        templateUrl: 'templates/kleinzeigenShow.html',
                        controller: 'KleinanzeigenShowCtrl'
                    }
                }
            })

            .state('menu.tattooEvents', {
                url: '/events',
                views: {
                    'side-menu1': {
                        templateUrl: 'templates/tattooEvents.html',
                        controller: 'TattooEventsCtrl'
                    }
                }
            })

            .state('menu.eventsShow', {
                url: '/events/:id',
                views: {
                    'side-menu1': {
                        templateUrl: 'templates/tattooEventsShow.html',
                        controller: 'EventsShowCtrl'
                    }
                }
            })

            .state('menu.tattooGalerie', {
                url: '/galerie',
                views: {
                    'side-menu1': {
                        templateUrl: 'templates/tattooGalerie.html',
                        controller: 'TattooGalerieCtrl'
                    }
                }
            })

            .state('menu.galerieShow', {
                url: '/galerie/:id',
                views: {
                    'side-menu1': {
                        templateUrl: 'templates/tattooGalerieShow.html',
                        controller: 'GalerieShowCtrl'
                    }
                }
            })

            .state('menu.lexikon', {
                url: '/lexikon',
                views: {
                    'side-menu1': {
                        templateUrl: 'templates/lexikon.html',
                        controller: 'LexikonCtrl'
                    }
                }
            })

            .state('menu.lexikonShow', {
                url: '/lexikon/:id',
                views: {
                    'side-menu1': {
                        templateUrl: 'templates/lexikonShow.html',
                        controller: 'LexikonShowCtrl'
                    }
                }
            })

            .state('menu.kontakt', {
                url: '/kontakt',
                views: {
                    'side-menu1': {
                        templateUrl: 'templates/kontakt.html',
                        controller: 'kontaktCtrl'
                    }
                }
            })

            .state('menu.tattoostudioliste', {
                url: '/tattoostudioliste',
                views: {
                    'side-menu1': {
                        templateUrl: 'templates/tattoostudioliste.html',
                        controller: 'TattooStudioListeCtrl'
                    }
                }
            })

            .state('menu.tattoostudiolisteshow', {
                url: '/tattoostudioliste/:id',
                views: {
                    'side-menu1': {
                        templateUrl: 'templates/tattoostudiolisteShow.html',
                        controller: 'TattooStudioListeShowCtrl'
                    }
                }
            })

            .state('menu.amazon', {
                url: '/amazon',
                views: {
                    'side-menu1': {
                        templateUrl: 'templates/amazon.html'
                    }
                }
            })

            .state('menu.datenschutz', {
                url: '/datenschutz',
                views: {
                    'side-menu1': {
                        templateUrl: 'templates/datenschutz.html',
                        controller: 'datenschutzCtrl'
                    }
                }
            })

            .state('menu.impressum', {
                url: '/impressum',
                views: {
                    'side-menu1': {
                        templateUrl: 'templates/impressum.html',
                        controller: 'impressumCtrl'
                    }
                }
            })

        $urlRouterProvider.otherwise('/side-menu/news')

    });