jQuery(document).ready(function($) {

    var thehours = new Date().getHours();


    if (thehours >= 5 && thehours < 6) {

        $("#greeting").addClass("dawn");

    } else if (thehours >= 6 && thehours < 9) {

        $("#greeting").addClass("early_morning");

    } else if (thehours >= 9 && thehours < 10) {

        $("#greeting").addClass("mid_morning");
    } else if (thehours >= 10 && thehours < 11) {

        $("#greeting").addClass("late_morning");
    } else if (thehours >= 11 && thehours < 14) {

        $("#greeting").addClass("early_noon");
    } else if (thehours >= 14 && thehours < 18) {

        $("#greeting").addClass("late_noon");
    } else if (thehours >= 18 && thehours < 20) {

        $("#greeting").addClass("early_night");
    } else if (thehours >= 20 && thehours < 22) {

        $("#greeting").addClass("mid_night");
    } else if (thehours >= 22) {

        $("#greeting").addClass("late_night");
    } else if (thehours >= 1 && thehours < 5) {

        $("#greeting").addClass("late_night");
    }




});