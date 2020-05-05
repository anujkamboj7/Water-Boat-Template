$(document).ready(function() {
	$(".menu-icon").on("click", function() {
		$(".nav-content").toggleClass("active");
		$(".fa-times").toggleClass("active");
		$(".overlay").toggleClass("active");
	});

	$(".overlay").on("click", function() {
		$(this).removeClass("active");
		$(".nav-content").removeClass("active");
	});
});
