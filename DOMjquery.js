$(document).ready(function(){
    // $('#tercera').parent().css({
    //     backgraund: '#1b3d82'
    // });
    
    // Parents
    // $('#tercera').parents();

    // Children
    // $('#padre').children().fadeOut(500);
    // $('#padre').children('#tercera').fadeOut(500);

    // Find
    // $('#contenedor').find('div.caja').slideUp();

    // Siblings
    // $('#tercera').siblings().fadeOut(1500);

    // Next - Prev
    $('#tercera').nextAll().css({
        background: '#000'
    });


});