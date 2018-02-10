var searchModule = angular.module('searchModule', [])


searchModule.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);

searchModule.controller('searchCtrl', function ($scope, $window, $http) {
    $http.get('http://s3-ap-southeast-1.amazonaws.com/ysetter/media/video-search.json').then(function (response) {
        $scope.listVideo = response.data.items
        $scope.result = response.data
    })

    $scope.showDate = function (text) {
        console.log(text)
        var arr = text.split('T');
        console.log(arr[0])
        var dateText = arr[0].split('-');

        var date = new Date()
        date.setDate(dateText[2])
        date.setMonth(dateText[1])
        date.setFullYear(dateText[0])
        var weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        return weekday[date.getDay()] + ', ' + date.getDate() + ' ' + month[date.getMonth()] + ' ' + date.getFullYear()
    }
})