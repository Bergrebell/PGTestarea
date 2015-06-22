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
        alert(form.data('clicked'));

        $.ajax({
            url: form.attr('action'),
            type: form.attr("method"),
            data: { clickedButton : form.data('clicked') }
        });
    });

});
// *** End AJAX ***

// *** Start API***

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    // Now safe to use device APIs
}

// *** End API***