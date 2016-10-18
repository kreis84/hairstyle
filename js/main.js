$(document).ready(function() {
	$('header').on('click','nav:before', MAIN.miniMenuClick);
});

var MAIN = (function (){

	return{
		miniMenuClick: function(){alert('sdfsd')}

	}
})();