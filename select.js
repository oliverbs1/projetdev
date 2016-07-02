$(document).ready(function () {



    $("select").change(function () {


        console.log($("select#formAction option:selected").data('action'));

        if ($("select#formAction option:selected").data('action') == 'reservation') {

            $("#hours").show();

        } else {
            $("#hours").hide();
        }


    }).change();




});