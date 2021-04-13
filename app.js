
function changeColor(){
	//alert("reached changeColor function");
	document.getElementsByClassName("btn")[0].style = "color:red";
	setTimeout(document.getElementsByClassName("btn")[0].style.visibility = "hidden",10000);
	setTimeout(document.getElementsByClassName("btn")[0].style.visibility = "visible", 1000);
	
}

function qSelector() {
	document.querySelector("h1").innerHTML = "<em>Basic JS</em>";
}

