$(document).foundation()
// document.getElementById('tag-id').innerHTML = '<ol><li>html data</li></ol>';

// $('[data-off-canvas]').on('opened.zf.offCanvas', function() {
//   alert("Hello! I am an alert box!!");
// });

$('#offCanvas').on('openedEnd.zf.offCanvas', function(event) {
  //$('.pagination').css('display','block');
  alert("Hello! I am an alert box!!")
});

$('#close-s').click(function(){
  $('#example-dropdown-bottom-right-dektop, #example-dropdown-bottom-right').foundation('close');
});

$(window).scroll(function(){

  $('#example-dropdown-bottom-right-dektop, #example-dropdown-bottom-right').foundation('close');

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
