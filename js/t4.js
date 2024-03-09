$(document).ready(function() {
    //Завдання4.1
    /*$(`li`).click(function() {
        alert($(this).html())
    })*/
    //Завдання4.2
    /*alert($(`#email`).val())*/
    //Завдання4.3
    /*$(`.link-moto`).click(function() {
        alert($(this).attr(`href`));
    })*/
    //Завдання4.4
    /*$(`.head-moto-img`).click(function() {
        alert($(this).attr(`src`));
    })*/
    //Завдання4.5
    /*(`p`).click(function() {
        $(this).html(` <i>Зараз функція недоступна. <br> Спробуйте пізніше </i>`)
    })*/
    //Завдання4.6
    /*$(`.top-nav`).click(function() {
        $(`.m6`).html('<img src="images/eng.png" width="50">')
    })*/

    //Завдання4.7
    /*$('.head-moto-img').click(function(){
        $(`+h3 >a`,this).text(function(i, origText){
            return "Ви обрали: " + origText;
        });
     })*/
    //Завдання4.8
    /*('.head-moto-img').click(function(){
        $(`+h3 >a`,this).html(function(i, origText){
            return  "<em> Ви обрали </em> <br> <br> " + origText
        });
    })*/
    //Завдання4.9
    let count = 0;
    $('.blog-post-date').hover(
        function() {
            $('+.blog-post-info>.categorie',this).text(function(i, origText){
                if(count == 0 || count == 1) {
                    count+=1
                    return "Бажаєте замовити?" + origText;

                }
            })
            $('+.blog-post-info>.categorie',this).fadeIn()
        },
        function() {
            $('+.blog-post-info>.categorie',this).fadeOut()
        }
    )
    
        //Завдання4.10
        $('.blog-post-date').click(function(){
            let obj = this;
            $('#mytextarea').text(function(i,origText){
                return origText + $('+.blog-post-info>h4',obj).text()+"  "+ $('+.blog-post-info>.categorie',obj).text()+"\n";
            })
        })
    })
