//Remove Event Page Controller
techtalk.controller('RemoveEventController', function ($scope, $http, $rootScope) {
    
    //Setting the getAllEvents as a broadcastable method
    $rootScope.$on("CallgetAPI", function(){
        $scope.getAllEvents();
    });
    
    $scope.getAllEvents = function () {
        $http.get(APIURL + '/GetAllEvents')
            .then(function successCallback(response) {
                $scope.rows = response.data;
            }, function errorCallback(response) {
                console.log("Unable to perform get request");
            });
    };

    $scope.deleteEvent = function (eventID) {
        var idPara = $.param({
            id: eventID
        });
        console.log(idPara);
        $http.delete(APIURL + '/DeleteEventTable?' + idPara)
            .success(function () {
                $scope.getAllEvents();
                console.log("deleted");
            })
            .error(function () {
                alert("Something went wrong");
                console.log("An error occured!");
            });
    };
});
