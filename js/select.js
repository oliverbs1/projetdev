$(document).ready(function () {



    $("select").change(function () {


        console.log($("select#formAction option:selected").data('action'));

        if ($("select#formAction option:selected").data('action') == 'reservation') {

            $("#personne").show();
            $("#heure").show();

        } else {
            $("#personne").hide();
            $("#heure").hide();
        }


    }).change();

});