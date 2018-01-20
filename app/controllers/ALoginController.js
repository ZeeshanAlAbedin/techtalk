//Administrator Login Controller
techtalk.controller("ALoginController", ['$scope','$window','$http', function ($scope, $window,$http) {
    
    $scope.username = '';
    $scope.password = '';
    $scope.responseMessage = '';
    $scope.isSubmitButtonDisabled = false;

    $scope.loginSubmit1 = function () {
        
        var userdata = {
            
            //'Admin_username': $scope.username,
            'Admin_username': "abc",
            'Admin_password': $scope.password
        };
        console.log(userdata);
        var config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        $http.post('http://localhost:58492/api/Admin_Table/LoginCheck', userdata, config).then(function (successResponse) {
            $window.location.href = 'admin_dashboard.html';
            console.log(successResponse);
        }, function (errorResponse) {
          
            //$scope.responseMessage = 'Email or Password is incorrect';
            alert('Email or Password is incorrect');
        });
    }
}]);