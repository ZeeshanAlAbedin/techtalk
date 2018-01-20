//Add Event Page controller
techtalk.controller('AddEventController', function ($scope, $http) {
    //Register Event Code for ID present in Event_Add Page
    $scope.registerEvent = function () {

        var edate = document.getElementById("eventDate").value;
        var tempdate = new Date(edate);
        //Get todays date for comparision regarding Past and upcoming
        var todayDate = new Date();
        //Convert date format to YYYY/MM/DD
        var formattedDate = $scope.convertDateFormatToYYYYMMDD(tempdate);
        if (tempdate > todayDate) {
            console.log("Upcoming");
            //Function that will call the API
            var isPassed = false;
            $scope.apiPushForRegisterEvent(isPassed, formattedDate);
        } else {
            console.log("Passed");
            if (confirm("You are about to add an already passed event. Continue?") == true) {
                //Function that will call the API
                var isPassed = true;
                $scope.apiPushForRegisterEvent(isPassed, formattedDate);

            } else
                console.log("False");
        }

    }

    //Function to convert Date format
    $scope.convertDateFormatToYYYYMMDD = function (tempDate) {
        var dd = tempDate.getDate();
        var mn = tempDate.getMonth() + 1;
        var yr = tempDate.getFullYear();
        var formattedDate = yr + "/" + mn + "/" + dd;
        return formattedDate;
    }


    $scope.apiPushForRegisterEvent = function (boolPassedValue, dateValue) {

        var eventObject = {
            Ename: $('#eventName').val(),
            Pname: $('#presenterName').val(),
            Edes: $('#eventDes').val(),
            Edate: dateValue,
            isPassed: boolPassedValue
        };
        $http.post(APIURL + '/PostEventTable', eventObject)
            .then(function successCallback() {
                alert("Addition Successful!");
                console.log("Success");
            }, function errorCallback() {
                alert("Something Went Wrong");
                console.log("Failed");
            });
    };
});
