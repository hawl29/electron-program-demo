/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.tables', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('tables', {
          url: '/tables',
          template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          controller: 'TablesPageCtrl',
          title: '实时告警',
          sidebarMeta: {
            icon: 'ion-grid',
            order: 150,
          },
        }).state('tables.urgency', {
          url: '/urgency',
          templateUrl: 'app/pages/tables/basic/urgency.html',
          title: '告警级别-紧急',
          sidebarMeta: {
            order: 0,
          },
        }).state('tables.important', {
        url: '/important',
        templateUrl: 'app/pages/tables/basic/important.html',
        title: '告警级别-重要',
        sidebarMeta: {
            order: 100,
        },
        }).state('tables.ordinary', {
        url: '/ordinary',
        templateUrl: 'app/pages/tables/basic/ordinary.html',
        title: '告警级别-一般',
        sidebarMeta: {
            order: 200,
        },
        });
    $urlRouterProvider.when('/tables','/tables/basic');
  }

})();
