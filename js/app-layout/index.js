import angular from 'angular';
import SplashCtrl from './controllers/splash.controller.js';
import YoutubeService from './services/YoutubeService.service.js';
import ngYoutubeEmbed from './directives/ngYoutubeEmbed.directive.js';
import showSpinner from './directives/showSpinner.directive.js';


angular
    .module('app.layout', [])
    .controller('SplashCtrl', SplashCtrl)
    .service('YoutubeService', YoutubeService)
    .directive('ngYoutubeEmbed', ngYoutubeEmbed)
    .directive('showSpinner', showSpinner)
    ;