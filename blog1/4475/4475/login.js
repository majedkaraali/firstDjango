if (document.images) {
   var login1 = new Image();
   login1.src = "images/login.gif";
   var login2 = new Image();
   login2.src = "images/login2.gif";
}

function login_normal() {
	if (document.images) {
		document["login"].src = login2.src;
	}
}

function login_out() {
	if (document.images) {
		document["login"].src = login1.src;
	}
}	