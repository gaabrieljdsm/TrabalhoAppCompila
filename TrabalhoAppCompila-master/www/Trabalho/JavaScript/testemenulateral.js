 
		$(function(){
		  $('.toggle-nav').click(function (e) {
			e.stopPropagation();
			toggleNav();
		  });
		  $('#main').click(function (e){
			var target = $(e.target);
			if(!target.closest('#nav').length && $('#wrapper').hasClass('show-nav')) toggleNav();
		  });
		  function toggleNav(){
			if($('#wrapper').hasClass('show-nav')){
			  $('#wrapper').removeClass('show-nav');   
			}
			else {
			   $('#wrapper').addClass('show-nav');
			}
		  }
		});
	