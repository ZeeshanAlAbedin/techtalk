//Update Page Controller
techtalk.controller('UpdateEventController', function ($scope, $http, $rootScope) {
    $scope.updateEvent = function (eventID) {
        
        var updateData = {
            //id: eventID,        
            Ename: $("#jqEname").val(),
            Pname: $("#jqPname").val(),
            Edate : $("#jqEdate").val()
            
        };
        console.log(updateData);
        $http.put(APIURL + '/PutEventTable/'+eventID, updateData)
        .success(function (){
            alert("Updation successful");
            $scope.childMethod = function(){
                $rootScope.$emit("CallgetAPI", {});
            }
            
        })
        .error(function (){
            console.log("ERROR!!!");
        });
    };
 
    
});