$.noConflict();
  jQuery(document).ready(function($) {  
  
$('#sti-menu').iconmenu({
					animMouseenter	: {
						'mText' : {speed : 200, easing : 'easeOutExpo', delay : 250, dir : 1},
						'sText' : {speed : 200, easing : 'easeOutExpo', delay : 0, dir : 1},
						'icon'  : {speed : 200, easing : 'easeOutExpo', delay : 500, dir : 1}
					},

					animMouseleave	: {
						'mText' : {speed : 200, easing : 'easeInExpo', delay : 250, dir : 1},
						'sText' : {speed : 200, easing : 'easeInExpo', delay : 500, dir : 1},
						'icon'  : {speed : 200, easing : 'easeInExpo', delay : 0, dir : 1}
					}
				});

  	$('#slider').nivoSlider({
        effect:'boxRainGrow,boxRainGrowReverse', 
        animSpeed:300, // Slide transition speed
        pauseTime:5000, // How long each slide will show
        directionNav:false, // Next & Prev navigation
        directionNavHide:true, // Only show on hover
        controlNav:true, // 1,2,3... navigation
        controlNavThumbs:false // Use thumbnails for Control Nav 
    });
    
 
    
    			  $('#quickContactForm').ajaxForm(function(data) {
				 if (data==1){
					 $('#success').fadeIn("slow");
					 $('#bademail').fadeOut("slow");
					 $('#badserver').fadeOut("slow");
					 $('#contact').resetForm();
					 }
				 else if (data==2){
						 $('#badserver').fadeIn("slow");
					  }
				 else if (data==3)
					{
					 $('#bademail').fadeIn("slow");
					}
					});
    
    
 	$(window).scroll(function () {
			if ( $(this).scrollTop() > 100) {
			$('a[href=#top]').fadeIn();
			} else {
				$('a[href=#top]').fadeOut();
			}
		});
		$('a[href=#top]').click(function(){
		$('html, body').animate({scrollTop:0}, 'slow');
			return false;
		});	
		
		    


$("ul.nav")
.superfish({
pathClass : 'current',
animation : {opacity:'show',height:"show"},
delay : 400
});


 	$(window).scroll(function(){
		/* when reaching the element with id "last" we want to show the slidebox. Let's get the distance from the top to the element */
 
		if  ($(window).scrollTop() > 300)
			$('#slidebox').animate({'left':'0px'},500);
			else 
			$('#slidebox').stop(true).animate({'left':'-230px'},0);	
	});
	
	/* remove the slidebox when clicking the cross */
	$('#slidebox .close').bind('click',function(){
		$(this).parent().remove();
	});
	
	
	
	$('#quickName').val('Имя');
$('#quickEmail').val('Email');
$('#quickComment').val('Сообщение');

$('#quickName').focus(function() {
		$(this).val('');	
});

$('#quickEmail').focus(function() {
		$(this).val('');	
});

$('#quickComment').focus(function() {
		$(this).val('');	
});


	});	
		   



jQuery(document).ready(function() {
		    


  var widgetOverlay = jQuery('#widget-overlay-container');
	var widgetTrigger = jQuery('#overlay-open a');
	var widgetOverlayHeight = widgetOverlay.height() + 3;
	widgetOverlay.css({
		marginTop : -widgetOverlayHeight,
		display : 'block'
	});
		widgetTrigger.toggle( function() {
		widgetOverlay.animate({
			marginTop : 0
		}, 800, 'easeOutBounce');
		
		widgetTrigger.addClass('close');
		}, function() {
			widgetOverlay.animate({
			marginTop : -widgetOverlayHeight
		}, 800, 'easeOutBounce');
		
		widgetTrigger.removeClass('close');
	});
  
					
	});