$(document).ready(function() {
    $('#my_button').button();

    $("#clear_form").button();
    $("#clear_form").click(function (event) {
        $('#div_form_1 input[type=checkbox]').prop('checked',false)
        /*$('#div_form_1 input[type=radio]').prop('checked',false)*/

        $('#div_form_1 input[type=radio]').prop('checked',false).button("refresh")
        /*$('#radio label').removeClass('ui-state-active')*/
        $('#radio label span').remove()
        $('#div_form_1 input[type=text]').val('');
        $('#div_form_1 input[type=textarea]').val('');
        
        $("progressbar").progressbar({value: 0});
        event.preventDefault();
    })

    $('#div_form_1 input[type=checkbox], input[type=radio]').checkboxradio()

    $("#motoSelect, #daysSelect").selectmenu();

// Дз
/*
    $.widget("custom.iconselectmenu", $.ui.selectmenu, {
        renderItem: function ( ul, item) {
            var li = $("<li>"),
            wrapper = $("<div>", { text: item.label } );

            if (item.disabled) {
                li.addClass("ui-state-disabled" );
            }
            $("<span>", {
                style: item.element.attr("data-style" ), "class": "ui-icon " 
            }).appendTo( wrapper ); + item.element.attr("data-class" )
            return li.append( wrapper ).appendTo( ul );
        }
    });
    $('#motoselect').iconselectmenu().iconselectmenu ("menuWidget" ) .addClass("ui-menu-icons customicons" );
*/
    
$.widget("custom.iconselectmenu", $.ui.selectmenu, {
    renderItem: function ( ul, item) {
    var li = $("<li>"),
    wrapper = $("<div>", { text: item.label } );
    if (item.disabled) {
    li.addClass("ui-state-disabled" );
    }
    $("<span>", {
    style: item.element.attr("data-style" ),
    "class": "ui-icon " }).appendTo( wrapper ); + item.element.attr("data-class" )
    return li.append( wrapper ).appendTo( ul );
    }
    });
    $('#motoSelect').iconselectmenu().iconselectmenu ("menuWidget" ) .addClass("ui-menu-icons customicons" );
})