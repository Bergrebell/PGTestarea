
console.log("index.js loaded");

$(document).ready(function() {

    $( document ).bind( "mobileinit", function() {
    // Make jQuery Mobile framework configuration changes here
    $.support.cors = true;
    $.mobile.allowCrossDomainPages = true;
    });

// *** Start AJAX Temp ***
    $('#tempform').on('click', 'input[type=submit][name=feeling]', function(e) {

        $(this.form).data('clicked', this.value);
    });

    $('#tempform').submit(function (event) {

        event.preventDefault();
        console.log("preventDefault")

        var form = $(this);

        //Alert for debug
        //alert(form.data('clicked'));

        $.ajax({
            url: form.attr('action'),
            type: form.attr("method"),
            data: { Temperature : form.data('clicked') },
            //Callback function - success if ajax call worked!
            success: function() {
                console.log("success")
                window.location.href = "#page2";
            }
        });
    });
// *** End AJAX Temp ***

// *** Start AJAX Light ***
    $('#lightform').submit(function ( event ) {
    event.preventDefault();
    console.log("preventDefault fired")

    var formvalue = $('#rate').val();
    console.log(formvalue);

    var form = $(this);

    $.ajax({
            url: form.attr('action'),
            type: form.attr("method"),
            data: { Lighting : formvalue },
            //Callback function - success if ajax call worked!
            success: function() {
                console.log("success")
                window.location.href = "#page3";
            }
        });
// *** End AJAX Light ***

});
});






















// *** Start API***

// Start Accelerometer
// The watch id references the current `watchAcceleration`
/*    var watchID = null;
    // Wait for Cordova to load
    //
    document.addEventListener("deviceready", onDeviceReady, false);
    // Cordova is ready
    //
    function onDeviceReady() {
        startWatch();
    }
    // Start watching the acceleration
    //
    function startWatch() {
        // Update acceleration every 3 seconds
        var options = { frequency: 100 };

        watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
    }
    // Stop watching the acceleration
    //
    function stopWatch() {
        if (watchID) {
            navigator.accelerometer.clearWatch(watchID);
            watchID = null;
        }
    }

    // onSuccess: Get a snapshot of the current acceleration
    //
    function onSuccess(acceleration) {
        var element = document.getElementById('accelerometer');
        element.innerHTML = 'Acceleration X: ' + acceleration.x + '<br />' +
                            'Acceleration Y: ' + acceleration.y + '<br />' +
                            'Acceleration Z: ' + acceleration.z + '<br />' +
                            'Timestamp: '      + acceleration.timestamp + '<br />';
    }

    // onError: Failed to get the acceleration
    //
    function onError() {
        alert('onError!');
    }
*/ 
// *** End API***