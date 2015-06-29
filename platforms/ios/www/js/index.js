console.log("ajax2.js loaded");



// *** Start AJAX ***
$(document).ready(function() {

    $('#ajaxform').on('click', 'input[type=submit][name=feeling]', function(e) {

        $(this.form).data('clicked', this.value);
    });

    $('#ajaxform').submit(function (event) {

        event.preventDefault();

        var form = $(this);

        //Alert for debug
        //alert(form.data('clicked'));

        $.ajax({
            url: form.attr('action'),
            type: form.attr("method"),
            datatype: 'jsonp',
            data: { clickedButton : form.data('clicked') }
            console.log("ajax sent")
        });
    });

});
// *** End AJAX ***



// *** Start API***

// Start Accelerometer
// The watch id references the current `watchAcceleration`
    var watchID = null;
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

// *** End API***