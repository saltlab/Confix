
schedule("window", preloadImages);

var imageArray = ["images/bomb.png", "images/bunny.png", "images/bunny1.png", "images/bunny2.png", "images/bunny3.png", "images/bunny4.png", "images/bunny5.png", "images/button_reload.gif", "images/button_stop.gif", "images/cloud.png", "images/cloud2.png", "images/hill.png", "images/hill2.png", "images/hills.png", "images/lives.gif", "images/stage.jpg"];
var imageObjects = [];
var currImage = 0;
	



function preloadImages()
{
	var loadingMessage = document.getElementById("loadingMessage");
	var loadingMessageP = loadingMessage.getElementsByTagName("p")[0];
	
	if (currImage >= imageArray.length)
	{
		loadingMessageP.innerHTML = "<strong>DONE!</strong>";
		
		var buttonStart = document.createElement("input");
		buttonStart.type = "image";
		buttonStart.src = "images/button_start.gif";
		buttonStart.onclick = ready;
		loadingMessage.appendChild(buttonStart);
	}
	else
	{
		imageObjects[currImage] = new Image();
		imageObjects[currImage].onload = preloadImages;
		imageObjects[currImage].src = imageArray[currImage] + "?" + Math.random();
		
		loadingMessageP.innerHTML = "Loading image <strong>" + (currImage + 1) + "</strong> of <strong>" + imageArray.length + "</strong>";

		var loadingBar = loadingMessage.getElementsByTagName("div")[1];
		loadingBar.style.width = Math.ceil((currImage + 1) / imageArray.length * 100) + "%";

		currImage++;
	}
	
	return true;
};




function ready()
{
	var stage = document.getElementById("stage");
	stage.className = "ready";
	
	var splash = document.getElementById("splash");
	splash.className = "ready";
	
	initBunnies();
	
	return true;
};