
if (document.all && typeof window.opera == "undefined")
{
	schedule("cloud2", cloudsInit);
}




function cloudsInit()
{
	moveCloud1();
	moveCloud2();
	
	return true;
};




function moveCloud1()
{
	var increment = 1;
	var cloud1 = document.getElementById("cloud1");
	
	if (cloud1.style.left == null || cloud1.style.left == "" || parseInt(cloud1.style.left) + cloud1.offsetWidth < 0)
	{
		cloud1.style.left = 800 + increment + "px";
	}
	
	cloud1.style.left = parseInt(cloud1.style.left) - increment + "px";
	
	setTimeout("moveCloud1()", 100);
	
	return true;
};




function moveCloud2()
{
	var increment = 1;
	var cloud2 = document.getElementById("cloud2");
	
	if (cloud2.style.left == null || cloud2.style.left == "" || parseInt(cloud2.style.left) + cloud2.offsetWidth < 0)
	{
		cloud2.style.left = 800 + increment + "px";
	}
	
	cloud2.style.left = parseInt(cloud2.style.left) - increment + "px";
	
	setTimeout("moveCloud2()", 60);
	
	return true;
};