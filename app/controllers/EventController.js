//USER Page Controller
techtalk.controller('EventController', function ($scope, $http) {
    $scope.getRequest = function () {
        $scope.rows =
            console.log("I've been pressed!");
        $http.get("http://localhost:58492/api/EventTables/GetEventTables")
            .then(function successCallback(response) {
                $scope.rows = response.data;
                var dupRow = $scope.rows[0]

            }, function errorCallback(response) {
                console.log("Unable to perform get request");
            });
    };
});