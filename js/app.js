 var app = angular.module("flickrApp", ['ngMaterial']);

 app.controller('ListController', ['$scope', '$http',
     function($scope, $http) {

         $scope.results = [];
         $scope.totalItems = [];
         $scope.pageLimits = '';
         $scope.search = function() {
         	$scope.pageLimits = 5;
             $http({
                 method: 'GET',
                 url: "https://api.flickr.com/services/rest",
                 params: {
                     method: 'flickr.photos.search',
                     api_key: 'a90a31013f451136c117b28bb82eaedd',
                     text: $scope.searchTerm,
                     format: 'json',
                     nojsoncallback: 1
                 }
             }).success(function(data) {
             	$scope.results = data;
             	$scope.totalItems=$scope.results.photos.photo.length
                console.log($scope.totalItems)
                 /*data.photos.photo.map(function(items) {
                     $scope.totalItems = items.length;
                     console.log($scope.totalItems)
                 })*/

             }).error(function(error) {
                 console.error(error);
             })
         };

         $scope.showMoreItems = function() {
             $scope.pageLimits += 5;

         };

         $scope.hasMore = function() {
             return $scope.pageLimits < ($scope.totalItems);
             console.log($scope.pageLimits < ($scope.totalItems));
         };
     }
 ]);


 /*
	msmuthu008
Key:
a90a31013f451136c117b28bb82eaedd

Secret:
a641813116a21284

 */