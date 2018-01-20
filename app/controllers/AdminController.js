//Admin Page Controller
techtalk.controller('AdminController', function ($scope, $http) {
    
    $scope.adminInit = function (){
        $scope.name = localStorage.getItem('auname');
        
        console.log($scope.name);
    }
    
    $scope.getUpcomingEvents = function () {
        $scope.rows =
            $http.get("http://localhost:58492/api/EventTables/GetEventTables")
            .then(function successCallback(response) {
                $scope.rows = response.data;
                $scope.lenUpcoming = Object.keys(response.data).length;
                
            }, function errorCallback(response) {
                console.log("Unable to perform get request");
            });
    };

    $scope.getPastEvents = function () {
        $scope.rows =
            $http.get("http://localhost:58492/api/EventTables/GetPastEvents")
            .then(function successCallback(response) {
                $scope.Pastrows = response.data;
                $scope.lenPast = Object.keys(response.data).length;
            }, function errorCallback(response) {
                console.log("Unable to perform get request");
            });
    };

});
