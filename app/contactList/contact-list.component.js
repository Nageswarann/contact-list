'use strict';
angular.
    module('contactList').
        component('person',{
            templateUrl:'contactList/contact-List.tempelate.html',
            
        controller:['$http','$scope',function contactListController($http,$scope){
            var self = this;
            $scope.clickImage ="images/dflt.jpg" ; 
            self.passValue = function(contact){
                self.selectedContact = contact;
                $scope.clickImage = contact.image;
              //  console.log(contact);
            };
            
            $http.get('contact/contact.json').then(function(response){
                self.contacts=response.data;
            });
        }]


        });