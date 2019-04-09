$(window).bind('scroll', function() {
    var currentTop = $(window).scrollTop();
    var elems = $('.scrollspy');
    elems.each(function(index){
      var elemTop   = $(this).offset().top;
      var elemBottom  = elemTop + $(this).height();
      if(currentTop >= elemTop && currentTop <= elemBottom){
        var id    = $(this).attr('id');
        var navElem = $('a[href="#' + id+ '"]');
    navElem.parent().addClass('active').siblings().removeClass( 'active' );
      }
    })
}); 

$('a').click(function(evt) {

 if (event.target.id == "vid") {
  $( "#video" ).addClass( "selected" );
  $( "#photography" ).removeClass( "selected" );
  $( "#social" ).removeClass( "selected" );
  $( "#pr2" ).removeClass( "selected" );
  $( "#radio" ).removeClass( "selected" );
 }

 if (event.target.id == "pho") {
  $( "#video" ).removeClass( "selected" );
  $( "#photography" ).addClass( "selected" );
  $( "#social" ).removeClass( "selected" );
  $( "#pr2" ).removeClass( "selected" );
  $( "#radio" ).removeClass( "selected" );
 }

 if (event.target.id == "soc") {
  $( "#video" ).removeClass( "selected" );
  $( "#photography" ).removeClass( "selected" );
  $( "#social" ).addClass( "selected" );
  $( "#pr2" ).removeClass( "selected" );
  $( "#radio" ).removeClass( "selected" );
 }

 if (event.target.id == "pr") {
  $( "#video" ).removeClass( "selected" );
  $( "#photography" ).removeClass( "selected" );
  $( "#social" ).removeClass( "selected" );
  $( "#pr2" ).addClass( "selected" );
  $( "#radio" ).removeClass( "selected" );
 }

 if (event.target.id == "rad") {
  $( "#video" ).removeClass( "selected" );
  $( "#photography" ).removeClass( "selected" );
  $( "#social" ).removeClass( "selected" );
  $( "#pr2" ).removeClass( "selected" );
  $( "#radio" ).addClass( "selected" );
 }

});


