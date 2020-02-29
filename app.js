// implementing hamburger
document.addEventListener("click",function(){
    var elems,instances, insts;

    console.log("this is working");
   elems = document.querySelectorAll('.sidenav');
   instances = M.Sidenav.init(elems,{});
    insts.destroy();                                   //to destroy carousel 
});



  //background particles
  

	/*----------------------------------------
		Counter Animation
	----------------------------------------*/
	var counter = function() {
		jQuery('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
		});
	};
	var counterWayPoint = function() {
		if (jQuery('#probootstrap-counter').length > 0 ) {
			jQuery('#probootstrap-counter').waypoint( function( direction ) {
										
				if( direction === 'down' && !jQuery(this.element).hasClass('probootstrap-animated') ) {
					setTimeout( counter , 400);					
					jQuery(this.element).addClass('probootstrap-animated');
				}
			} , { offset: '90%' } );
		}
	};
 
//particles

