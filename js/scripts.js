$(document).ready(function (e) {

    $(".loginForm").hide();
    
    $("#showBtn").click(function (e) {
        $(".loginForm").show();
    });
});


//API URL for the server
var APIURL = "http://localhost:58492/api/EventTables";

//Register Event Code for ID present in Event_Add Page
function registerEvent(){

    var edate = document.getElementById("eventDate").value;
    var tempdate = new Date(edate);
    //Get todays date for comparision regarding Past and upcoming
    var todayDate = new Date();
    //Convert date format to YYYY/MM/DD
    var formattedDate = convertDateFormatToYYYYMMDD(tempdate);
    if(tempdate > todayDate){
        console.log("Upcoming");
        //Function that will call the API
        var isPassed = false;
        apiPushForRegisterEvent(isPassed, formattedDate);        
    }
    else{
        console.log("Passed");
        if(confirm("You are about to add an already passed event. Continue?") == true){
            //Function that will call the API
            var isPassed = true;
            apiPushForRegisterEvent(isPassed, formattedDate);
            
        }else 
            console.log("False");
    } 

}

//Function to convert Date format
function convertDateFormatToYYYYMMDD(tempDate){
    var dd = tempDate.getDate();
    var mn = tempDate.getMonth()+1;
    var yr = tempDate.getFullYear();
    var formattedDate = yr+"/"+mn+"/"+dd;
    return formattedDate;
}

//Function to call api for data insertion
function apiPushForRegisterEvent(boolPassedValue, dateValue){
    
    var eventObject = {
        Ename: $('#eventName').val(),
        Pname: $('#presenterName').val(),
        Edes: $('#eventDes').val(),
        Edate: dateValue,
        isPassed: boolPassedValue
    };
    $.ajax({
        url: APIURL + "/PostEventTable",
        cache: false,
        type: 'POST',
        dataType : 'json',
        data: eventObject,
        success: function (){
                alert("Addition Successful")
        },
        error: function (){
            alert("Oops! Something went wrong")
        }

    }) 
}


//Administrator Login Code
function admin_login(){
    location.href = 'admin_dashboard.html';
}


































