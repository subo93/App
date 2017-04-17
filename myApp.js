/**
 * Created by subodhi on 4/3/17.
 */
var mainApp = angular.module("mainApp", []);

mainApp.controller('studentController', function($scope) {
    $scope.student = {

        details: function() {

            $scope.phoneNumbr = /^\+?\d{2}[- ]?\d{3}[- ]?\d{5}$/;

            var studentObject;
            studentObject = $scope.student;
            return studentObject.firstName + " " + studentObject.lastName+" "+studentObject.age+" "+studentObject.email+" "+studentObject.messege;


        }
    };
});