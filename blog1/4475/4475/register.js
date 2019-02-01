if (document.images) {
   var register1 = new Image();
   register1.src = "images/register.gif";
   var register2 = new Image();
   register2.src = "images/register2.gif";
}

function register_normal() {
	if (document.images) {
		document["register"].src = register2.src;
	}
}

function register_out() {
	if (document.images) {
		document["register"].src = register1.src;
	}
}	