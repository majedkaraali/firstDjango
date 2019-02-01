if (document.images) {
   var home1 = new Image();
   home1.src = "images/home.gif";
   var home2 = new Image();
   home2.src = "images/home2.gif";
}

function home_normal() {
	if (document.images) {
		document["home"].src = home2.src;
	}
}

function home_out() {
	if (document.images) {
		document["home"].src = home1.src;
	}
}	