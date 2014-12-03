function schedule(objectID, functionCall, iteration)
{
	if (iteration == null)
	{
		iteration = 0;
	}
	
	if (objectID == "window")
	{
		var oldonload = window.onload;
		
		if (typeof window.onload != "function")
		{
			window.onload = functionCall;
		}
		else
		{
			window.onload = function()
			{
				oldonload();
				functionCall();
			}
		}
	}
	else if (document.getElementById(objectID))
	{
		functionCall();
	}
	else if (iteration < 300)
	{
		setTimeout(function(){schedule(objectID, functionCall, iteration + 1)}, 10);
	}
	
	return true;
}