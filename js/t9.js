$(document).ready(function() {
    let apply = 0;
    let decrease = 0;
    $('.btn-fs').click(function () {
        let size = parseInt($("body").css("font-size"));
        if ($(this).hasClass("plus-font-size")) 
        {
            size = size + 1 + "px";
            $("body").css({'font-size':size});
            apply++;
        }
        if ($(this).hasClass("minus-font-size")) 
        {
            size = size - 1 + "px";
            $("body").css({'font-size':size});
            decrease++;
        }
        if ($(this).hasClass("normal-font-size")) 
        {
           if(apply>0)
           {
            size = size - apply + "px";
            $("body").css({'font-size':size});
           }
           if(decrease>0)
           {
            size = size + decrease + "px";
            $("body").css({'font-size':size});
           }
        }
    });

    $('.head-moto-img+h3+p').hide();
    $('.head-moto-img').hover(
        function()
        {
            $('+h3+p',this).slideDown();
        },
        function()
        {
            $('+h3+p',this).slideUp();
        }
    );

    $('nav').css("margin-right", "400px");
    $('nav').animate({marginRight: '0px'}, 2000);
    $('.slide-text').hide();
    $('.slide-text').slideDown(1000);
    $('h1').animate({fontSize:'70px'},2000);
    $(".slide-btn").animate({width:'550px',opacity: '0.8'}, 2000);
    $(".slide-btn+span").animate({marginLeft: '500px'}, 1500);
    $(".slide-btn+span").animate({marginLeft: '0px'}, 1000);

    let show = "Подивитись мотоцикли";
    let noshow = "Сховати мотоцикли";
    $('#p').click(function() {
        $('.features-grid').slideToggle();
        if($('#p').text()!=show) {
            $('#p').text(show);
        } else {
            $('#p').text(noshow);
        }
    });

    $('#div_form_2>p>strong').first().text("Кількість товару");
    $('#email').val("");
    $('#email').bind("change keyup input click", function() {
        if (this.value.match(/[^0-9]/g))
        {
            this.value = this.value.replace(/[^0-9]/g, '');
        }
        $('#div_form_2>p>strong').first().text("Кількість товару: "+ this.value);
    });

    $('#my_button').click(function () {
        var moto = parseInt($('#motoSelect option:selected').val());
        var days = parseInt($('#daysSelect option:selected').text());
        var count = parseInt($('#email').val());

        var shlem = 0;
        var bag = 0;
        var od = 0;
        var inch = 0;

if ($("input[type='checkbox']").eq(0).prop('checked')==true)
{
shlem = parseInt($("input[type='checkbox']").eq(0).val());
}
if ($("input[type='checkbox']").eq(1).prop('checked')==true)
{
bag = parseInt($("input[type='checkbox']").eq(1).val());
}
if ($("input[type='checkbox']").eq(2).prop('checked')==true)
{
od = parseInt($("input[type='checkbox']").eq(2).val());
}
if ($("#inch_yes").prop('checked')==true)
{
inch = parseInt($("%22inch_yes").val());
}
else
{
inch = parseInt($("#inch_no").val());
}
var sum = (moto+shlem+bag+od+inch)*days*count;
$('#mytextarea').text("Сума вашого замовлення: "+sum+"$");
});
    })
