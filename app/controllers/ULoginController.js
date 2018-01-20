//User Login Controller
techtalk.controller("ULoginController", ['$scope', '$window', '$http', function ($scope, $window, $http) {
    $scope.username = '';
    $scope.password = '';
    $scope.responseMessage = '';
    $scope.isSubmitButtonDisabled = false;

    $scope.uloginSubmit = function () {

        var userdata = {
            'user_username': $scope.username,
            'user_password': $scope.password
        };

        var config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        $http.post('http://localhost:58492/api/user_login/LoginCheck', userdata, config).then(function (successResponse) {

            $scope.isSubmitButtonDisabled = true;
            $window.location.href = 'user_dashboard.html'
            alert("Login Successfull");
        }, function (errorResponse) {

            $scope.responseMessage = 'Email or Password is incorrect';
        });
    }
}]);