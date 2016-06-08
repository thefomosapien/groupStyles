angular.module('app').directive('searchDir', function () {

    return {
        restrict: 'E',
        templateUrl: 'practiceStaff/search.html',
        link: function (scope, element, atts) {
            
                function expand() {
                    $(".search").toggleClass("close");
                    $(".input").toggleClass("square");
                    if ($('.search').hasClass('close')) {
                        $('input').focus();
                    } else {
                        $('input').blur();
                    }
                }
        
            $('button').on('click', expand);
        }
    }
        
        });
    