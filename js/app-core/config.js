let config = function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('root', {
            abstract: true,
            templateUrl: 'index.html'
        })
        .state('root.splash', {
            url: '/',
            controller: 'SplashCtrl as vm',
            templateUrl: 'templates/app-layout/splash.tpl.html'
        });
};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;