$(document).ready(function() {
	$('header').on('click','a.miniButton', MAIN.miniMenuClick);
});

var MAIN = (function (){

	return{
		miniMenuClick: function(){
//		 $('nav').toggleClass('temp');
		$('nav').slideToggle(400);
		}	
	};
})();