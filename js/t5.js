$(document).ready(function() {
    //Завдання5.1
    $(`#about-moto`).addClass('new');
    //Завдання5.2
    
    //Всередині блоку додаєм
    $(`#about-moto`).prepend('<p class="fon_yellow">Цей абзац доданий за допомогою методу <b>prepend</b></p>')
    $(`#about-moto`).append('<p class="fon_yellow">Цей абзац доданий за допомогою методу<b>>append</b</p>')
    
    //Ззовні блоку додаєм
    $(`#about-moto`).before('<p class="fon_yellow">Цей абзац доданий за допомогою методу<b> before</b></p>')
    $(`#about-moto`).after('<p class="fon_yellow">Цей абзац доданий за допомогою методу <b>after</b></p>')

    //Завдання5.3
    $('li').hover(
        function() {
            $(this ).toggleClass('svitlo');
    });
    //Завдання5.4-5
    /*$('.head-moto-img').click(
        function() {
            $(this).clone().prependTo('.koshik-wrapper');
            $(this).remove();
            $('.koshik-wrapper').addClass('full-koshik');
        }
    )*/
    //Завдання5.6
    /*$('.head-moto-img').click(
        function() {
            let moto = $(this);
            $('.koshik-wrapper-items').each(
                function() {
                    if (moto.attr('nomer') == $(this).attr('nomer')) {
                        $(this).html(moto.clone());
                        moto.remove();
                        $('.koshik-wrapper').addClass('full-koshik');
                    }
                }
            )
        }
    )*/
    //Завдання5.7
    /*
    $('.head-moto-img').click(
        function() {
            $('.koshik-wrapper').append($(this).clone().dblclick(function() {
                $(this).remove();
                sumaMoto();
            }));
            sumaMoto();
        }
    );
    function sumaMoto(){
        let count = 0;
        let suma = 0;
        $('.koshik-wrapper>.head-moto-img').each(
            function() {
                count++
                sum += parseInt($(this).attr('price'))
            }
        );
        $('#suma').html('Всього <b>'+count+'</b> мотоциклів на суму <b>'+suma+'</b>');
        
        
    
        if (count>0) {
            $('.koshik-wrapper').addClass('full-koshik');

        } else {
            $('.koshik-wrapper').removeClass('full-koshik');
        }
    }*/
})