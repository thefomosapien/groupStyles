angular.module('app').config(function ($stateProvider, $urlRouterProvider) {
    
    $stateProvider

        .state('login', {
            url: '/login',
            templateUrl: 'login/login.html',
            controller: 'loginCtrl'
        })

        .state('practiceStaff', {
            url: '/practiceStaff',
            templateUrl: 'practiceStaff/practiceStaff.html',
            controller: 'practiceStaffCtrl'
        })

        .state('practiceAdmin', {
            url: '/practiceAdmin',
            templateUrl: 'practiceAdmin/practiceAdmin.html',
            controller: 'practiceAdminCtrl'
        })

        .state('billingStaff', {
            url: '/billingStaff',
            templateUrl: 'billingStaff/billingStaff.html',
            controller: 'billingStaffCtrl'
        })

        .state('billingAdmin', {
            url: '/billingAdmin',
            templateUrl: 'billingAdmin/billingAdmin.html',
            controller: 'billingAdminCtrl'
        })

        $urlRouterProvider.otherwise('/login');
})