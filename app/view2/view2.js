'use strict';

angular.module('myApp2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl',['$scope', '$http', function($scope, $http){
      console.log("Hello world from controller");

      var refresh = function() {

        $http.get('/contactList').success(function (response) {
          console.log("I got the data I requested");
          $scope.contactList = response;
          $scope.contact = "";
        });
      };
      refresh();
      //Function To Add new Contacts
      $scope.addContact = function(){
        console.log($scope.contact);
        $http.post('/contactList', $scope.contact).success(function(response){
          console.log(response);
          refresh();
        })

      }
      $scope.Delete = function(id) {
        $http.delete('/contactList' + id)
            .success(function(data) {
              $scope.todos = data;
              console.log(data);
            })
            .error(function(data) {
              console.log('Error: ' + data);
            });
      };


    }]);

