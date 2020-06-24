$(document).foundation()
// document.getElementById('tag-id').innerHTML = '<ol><li>html data</li></ol>';

$(window).scroll(function(){

    //animation telefono
	var wScroll = $(this).scrollTop();
    $('.main-imgs').css({
    	'transform' : 'translate(0px, -'+ wScroll / 20 +'%)'
    });

    $('.mainor-imgs').css({
      'transform' : 'translate(0px, -'+ wScroll / 90 +'%)'
    });



    if (wScroll >= 20) {
        
        //navbar
        $(".header").removeClass('nav-top').addClass("nav-move");
        $(".logoLg").addClass("opacityScroll");
        } else {
           $(".header").removeClass("nav-move").addClass('nav-top');
           $(".logoLg").removeClass("opacityScroll");
        }


});
