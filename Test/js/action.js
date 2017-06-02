$(document).ready(function() {
	document.documentElement.style.overflow='hidden';
	var pageName = ["#Homepage","#page2","#page3"];
	var page = 0;
	console.log("ga");
	$('html, body').animate({ scrollTop: $(pageName[page]).offset().top }, 0);
	$(".NextPage").click(function(){
		page++;
		console.log(page);
		$('html, body').animate({ scrollTop: $(pageName[page]).offset().top }, 250);
	});
	$(".PrePage").click(function(){
		page--;
		console.log(page);
		$('html, body').animate({ scrollTop: $(pageName[page]).offset().top }, 250);
	});
	// var p=0,t=0;
	// $(window).scroll(function(e){
	// 	setTimeout(function() { p = $(this).scrollTop()},2000);

	// 	if(t <= p) {
	// 		if (page < pageName.length-1) {
	// 			page++;
	// 			console.log(page);
	// 			$('html, body').animate({ scrollTop: $(pageName[page]).offset().top }, 250);
	// 		}
	// 	} else {
	// 		if (page > 0) {
	// 			page--;
	// 			console.log(page);
	// 			$('html,body').animate({scrollTop:$(pageName[page]).offset().top}, 250); 
	// 		}
	// 	}
	// 	setTimeout(function() { t = p;},0);
	// });
});