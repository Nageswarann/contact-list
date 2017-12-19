app.controller('contactController',['$scope',function($scope){
    $scope.contacts=[
        {
        "name":"Nageswaran",
        "phone":"9585771498",
        "Email":"nageswaransrinivasan@gmail.com",
        "city":"Madurai",
        "designation":"student",
        "image":"images/nages.jpg"
        },
        {
            "name":"Suresh",
            "phone":"8220080662",
            "Email":"surisa.sures@gmail.com",
            "city":"Dindigul",
            "designation":"student",
            "image":"images/sures.jpg"
            
        },
        {
            "name":"Saravanan",
            "phone":"9688770500",
            "Email":"saravanakumar@gmail.com",
            "city":"Coimbatore",
            "designation":"student",
            "image":"images/saravanan.jpg"
            
        },
        {
            "name":"karthick SB",
            "phone":"9750706873",
            "Email":"karthisb50@gmail.com",
            "city":"Madurai",
            "designation":"student",
            "image":"images/karthiSB.jpg"
             }

];
$scope.passValue = function(contact){
    $scope.selectedContact = contact;
    console.log(selectedContact);

};
}])