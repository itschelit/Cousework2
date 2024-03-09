$(document).ready(function() {
    //Завдання2.1
    /*$(`.slide-text > h1`).fadeOut(3000);
    $(`.slide-text > h1`).fadeIn(1500);*/
    //Завдання2.2
    /*$(".head-moto-img").fadeTo(`slow`,0.05);
    $(".head-moto-img").fadeTo(7000,1);*/
    //Завдання2.3
    /*$(`.head`).slideUp(2000);
    $(`.head`).slideDown(1000);*/
    //Завдання2.4
    /*$(`label`).(1500);*/
    //Завдання2.5
    function zr(a,b,c) {
        obj = $(a);
        t1 = b;
        t2 = c;
        obj.slideUp(t1);
        obj.slideDown(t2);
    }                     
    /*zr(`#my_form`,2000,1000)*/
    //Завдання2.6
    function prozor(a,b,c) {
        obj = $(a);
        time = b;
        opac = c;
        /*obj.slideUp(time);*/
        /*obj.slideDown(time);*/
        /*obj.fadeTo(time,opac);*/
        /*obj.fadeTo(time,1)*/
    }
})