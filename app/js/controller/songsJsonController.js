app.controller('songsJsonController',['$scope',function($scope){
    $scope.songs=[
        {
        "name":"Po nee po",
        "movie":"3",
        "music":"Anirudh",
        "Lyrics":"Dhanush",
        "image":"images/3.jpg"
        },
        {
            "name":"Mogathirai Unplugged",
            "movie":"Pizza",
            "music":"Santhosh Narayanan",
            "Lyrics":"kabilan",
            "image":"images/pizza.jpg"

        },
        {
            "name":"Raasaali",
            "movie":"Acham yenbadhu madamaiyada",
            "music":"ARR",
            "Lyrics":"Thamarai",
            "image":"images/Achcham_Yenbadhu_Madamaiyada.jpg"

        },
        {
            "name":"Nallai Allai",
            "movie":"Kaatru veliyidai",
            "music":"ARR",
            "Lyrics":"Vairamuthu",
            "image":"images/kaatru_veliyidai.jpg"
        }

];
}])