$(document).ready(function() {
    //Завдання3.1
    /*$(`.slide-btn`).click(function() {
        alert(`Кнока натиснута)`)
    })*/
    //Завдання3.5
    /*$(`.header`).mouseenter(function() {
        $(`.slide-text`).slideUp();
    })
    $(`.header`).mouseenter(function() {
        $(`.slide-text`).slideDown();
    })*/
    //Завдання3.7
    var text1 = "Подивитись фото";
    var text2 = "Сховати фото";
    $('#p').click(function() {
        $('.head-moto-img').slideToggle(2000);
        if($('#p').text() !=text1) 
            $('#p').text(text1);
        else {
            $('#p').text(text2);
        }
    });
    //Завдання3.9
    $(`.blog-post-date`).hover(
        function() {
            $(`+.blog-post-info > .categorie`,this).fadeIn();
        },
        function() {
            $(`+.blog-post-info > .categorie`,this).fadeIn();
        }
    )
    //Завдання3.10
    $(`.contact-active`).click(function () {
        let b =document.getElementById('flag')
        if($(`.m6>a`).text()== 'Eng') { 
            $(`.m1>a`).text(`Home`);
            $(`.m2>a`).text(`Motorcycles`);
            $(`.m3>a`).text(`Sale`);
            $(`.m4>a`).text(`Forum`);
            $(`.m5>a`).text(`Contacts`);
            $(`.m6>a`).text(`Ua`);
            b.classlist.add(`flag_ua`)
        } else {
            $(`.m1>a`).text(`Головна`);
            $(`.m2>a`).text(`Мотоцикли`);
            $(`.m3>a`).text(`Розпродаж`);
            $(`.m4>a`).text(`Форум`);
            $(`.m5>a`).text(`Контакти`);
            $(`.m6>a`).text(`Eng`);
            b.classlist.add(`flag_eng`)
        }
    })
//Завдання3.2
/*$(`.features-grids >.col-md-3`).click(function ( {
    $(`.features-grids >.col-md-3`).slideUp(3000))
 })*/
//Завдання3.3
/*$(`.features-grids >.col-md-3`).click(function () {
    $(`.features-grids >.col-md-3`).slideUp(2000);
    $(`.features-grids >.col-md-3`).slideDown(2000);
} )*/
    //Завдання3.4
    /*$(`.head-moto-img`).click(function () {
        $(this).fadeToggle(3000)
    })*/
    //Завдання3.6
    /*$(`.slide-text > .slide-btn`).click(function() {
        $(`.slide-text > .slide-btn`).text("Оберіть мотоцикл нижче на сторінці")
    })*/
    //Завдання3.8
    
})