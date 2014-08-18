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

/*

function forms(){
	// This example finds the form element with id="frm1", in the forms collection, and displays all element values:
	var x = document.getElementById("frm1");
	var text = "";
	var i;
	for (i = 0; i <x.length; i++) {
	    text += x.elements[i].value + "<br>";
	}
	document.getElementById("demo").innerHTML = text;
}

 */


//***************************
//6k chess
//custom functions go here
//***************************

function about() {
	if(document.getElementById('tableAbout').style.display == 'block') {
		document.getElementById('tableAbout').style.display = 'none';
	}else{
		document.getElementById('tableAbout').style.display = 'block';
	}
};



function validate() {
	var radioGroup = document.getElementsByName("testinput");
	var selected;
	for(i = 0; i < radioGroup.length; i++) {
		if(radioGroup[i].checked) {
			selected = radioGroup[i].value;
		}
	}
	// These branches should not be made symbolic.
	if(selected == "option1") {
		return false;
	}
	if(selected == "option2") {
		return true;
	}
	return false;
}


function validate() {
	var y = document.getElementById("testinput_o1").checked;
	var z = document.getElementById("testinput_o2").checked;
	if (y == true) {
		return false;
	} else {
		if (z == true) {
			return false;
		} else {
			// As one option is checked by defaault, this branch is unreachable. -> unsatisfiable!
			return true;
		}
	}
}

function validate() {
	var input = document.getElementById("testinput").value;
	var input2 = document.getElementById("testinput2").value;
	if (input) {
		return true;
	} else {
		if(x == input2){
			return true;
		} else{
			alert("Wrong second input");
			return false;
		}
	}
}

/*
<form method="GET" action="about:blank" >
	<input type="text" id="testinput" value="test"/>
	<input type="radio" name="testinput" value="option1" id="testinput_o1" checked="true" > Option 1<br>
	<input type="radio" name="testinput" value="option2" id="testinput_o2" > Option 2<br>
	<input type="radio" name="testinput" value="option3" id="testinput_o3" > Option 3<br>
	<button type="submit" onclick="return validate();">Submit</button>
</form>

 */

var x = 1;
function validate() {
	var y = document.getElementById("testinput").selectedIndex;
	if (y != x) {
		alert("Error!");
		return false;
	}else{
		return true;
	}
}

function submitTheForm() {
	document.getElementById("testform").submit();
}

/*
<form method="GET" action="about:blank" id="testform">
	<select name="testinput" id="testinput">
		<option value="volvo">Volvo</option>
		<option value="saab">Saab</option>
		<option value="mercedes">Mercedes</option>
		<option value="audi">Audi</option>
	</select>
	<button type="submit" >Submit</button>
</form>
 */




var x = "oxford";
var y = "aarhus";
function validate() {
	var z = document.getElementById("city").value;
	if (z == x) {
		return true;
	} else if(z == y) {
		return true;
	} else {
		alert("Error!");
		return false;
	}
}

function updateCity() {
	var country = document.getElementById("country");
	if(country.value == "?") {
		newCityValues({});
	} else if(country.value == "uk") {
		newCityValues({bristol:"Bristol", london:"London", oxford:"Oxford"});
	} else if(country.value == "dk") {
		newCityValues({copenhagen:"Copenhagen", aarhus:"Aarhus", aalborg:"Aalborg"});
	} else if(country.value == "us") {
		newCityValues({newyork:"New York", washington:"Washington", sanfrancisco:"San Francisco"});
	} else {
//		NOT REACHED
	}
//	Sanity check that newCityValues did what we expected.
//	(Similar seen in the minimised airtran example...)
	var city = document.getElementById("city");
	if(city.value == "not-yet-selected") {
		alert("NOT REACHED");
	}
}
function newCityValues(values) {
	var city = document.getElementById("city");
//	Reset
	city.options.length = 0;
//	Add new values
	for(index in values) {
		city.options[city.options.length] = new Option(values[index], index)
	}
}

/*
<form method="GET" action="about:blank" >
	<p>Please select the city <i>Aarhus</i> or <i>Oxford</i> to do something.</p>
	<select name="country" id="country" onchange="updateCity()" >
		<option value="?" >Please select the country&hellip;</option>
		<option value="uk" >UK</option>
		<option value="dk" >Denmark</option>
		<option value="us" >USA</option>
	</select>
	<select name="city" id="city" >
		<!-- Options will be filled dynamically -->
		<option value="not-yet-selected" >City</option>
	</select>
	<button type="submit" onclick="return validate();">Submit</button>
</form>
 */

var x = "testme";
//This is similar to the method used by our Underwoods example.
function validate() {
	var mySelect = document.getElementById("testinput");
	var y = mySelect[mySelect.selectedIndex].value;
	if (y != x) {
		alert("Error!");
		return false;
	}else{
		return true;
	}
}

/*
<select name="testinput" id="testinput" >
	<option value="hello" >hello</option>
	<option value="hi there" >hi there</option>
	<option value="testme" >testme</option>
	<option value="goodbye" >goodbye</option>
</select>
 */
function validate() {
	var y = document.forms[0].elements[0].value;
	var z = y * 3;
	z += 5;
	if (z != x) {
		alert("Error!");
		alert("Wrong value " + y);
		return false;
	}else{
		return true;
	}
}

/*
<form method="GET" action="about:blank" >
	<input type="text" />
	<button type="submit" onclick="return validate();">Submit</button>
</form>
 */

var x = "test";
function validate(){
	var input = $("#textInput").val();
	if(input == x){
		return true
	} else{
		alert("WRONG VALUE");
		return false;
	}

	var input = $("#textInput")[0].checked;
	if(input){
		return true;
	} else{
		alert("WRONG VALUE");
		return false;
	}
}

/*
<form id="SomeForm" action="#">
<input type="text" id="textInput" value="1337"/>
</form>
 */