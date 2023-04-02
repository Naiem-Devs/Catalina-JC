(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 


  $('select').niceSelect();
  
 		// ------------ Counter BEGIN ------------ 
     $(".counter__increment, .counter__decrement").click(function(e)
     {
             e.preventDefault()
       var $this = $(this);
       var $counter__input = $(this).parent().find(".counter__input");
       var $currentVal = parseInt($(this).parent().find(".counter__input").val());
 
       //Increment
       if ($currentVal != NaN && $this.hasClass('counter__increment'))
       {
         $counter__input.val($currentVal + 1);
       }
       //Decrement
       else if ($currentVal != NaN && $this.hasClass('counter__decrement'))
       {
         if ($currentVal >= 1) {
           $counter__input.val($currentVal - 1);
         }
       }
     });
     // ------------ Counter END ------------ 
 
     document.querySelector('html').classList.remove('no-js');
    if (!window.Cypress) {

      AOS.init({
        mirror: true,
        duration: 1500,
        initClassName: 'aos-init',
        once: true,
      });

    }


})(jQuery);
