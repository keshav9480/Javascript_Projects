
function changeColor(){
	//alert("reached changeColor function");
	document.getElementsByClassName("btn")[0].style = "color:red";
	setTimeout(document.getElementsByClassName("btn")[0].style.visibility = "hidden",10000);
	setTimeout(document.getElementsByClassName("btn")[0].style.visibility = "visible", 1000);
}

function qSelector() {
	document.querySelector("h1").innerHTML = "<em>Basic JS</em>";
}

var numEle = document.querySelectorAll(".drum").length
for( var i=0;i<numEle; i++){
	document.querySelectorAll(".drum")[i].addEventListener('click', function (){
		var ele = this.innerHTML;
		console.log("element: "+ele);
		switch(ele) {
			case "w":
				var audio = new Audio("sounds/crash.mp3");
				audio.play();
				break;
			case "a":
				var audio = new Audio("sounds/kick-bass.mp3");
				audio.play();
				break;
			case "s":
				var audio = new Audio("sounds/snare.mp3");
				audio.play();
				break;
			case "d":
				var audio = new Audio("sounds/tom-1.mp3");
				audio.play();
				break;
			case "j":
				var audio = new Audio("sounds/tom-2.mp3");
				audio.play();
				break;
			case "k":
				var audio = new Audio("sounds/tom-3.mp3");
				audio.play();
				break;
			case "l":
				var audio = new Audio("sounds/tom-4.mp3");
				audio.play();
				break;
			default:;
		}
	});
}

