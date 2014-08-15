function a(){
	var m = document.getElementById("main");
	var n = m.getElementsByTagName("p");
}

function f() {
	// find the element with id="main", and then find all <p> elements inside "main":
	a = document.getElementById("demo");
	a.innerHTML = document.anchors[0].innerHTML;
	return a.innerHTML;
}

function g() {
	var inner = f();
	b = $("id");
	c = $("id");
}


function h() {
	time = 5;
	hello = true;
	if (time < 10) {
		if (hello)
			start = "hello";
		greeting = "Good morning";
	} else if (time<20) {
		greeting = "Good day";
	} else {
		greeting = "Good evening";
	}

}

var x = "testme";
//var x = 2;
var struct = {};
function doSomething() {
	//Math.abs(4);
	var y = document.getElementById("testinput").value;
	var z = document.getElementById("testinput2").value;
	//var y = 2;
	struct.y = y;
	struct.z = z;
	var a = struct['y'] + struct['z'];
	//var z = x + y;
	//if (z == 5) {
	if (a == x) {
		alert(x);
	}
}