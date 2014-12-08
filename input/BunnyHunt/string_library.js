
function addClass(target, classValue)
{
    if (!hasClass(target, classValue))
    {
        if (target.className == "")
        {
            target.className = classValue;
        }
        else
        {
            target.className += " " + classValue;
        }
    }

    return true;
};




function removeClass(target, classValue)
{
    var removedClass = target.className;
    var pattern = new RegExp("(^| )" + classValue + "( |$)");

    removedClass = removedClass.replace(pattern, "$1");
    removedClass = removedClass.replace(/ $/, "");

    target.className = removedClass;

    return true;
};




function hasClass(target, classValue)
{
    var pattern = new RegExp("(^| )" + classValue + "( |$)");
    
    if (target.className.match(pattern))
    {
    	return true;
    }
    
    return false;
};




function getInnerText(target)
{
	var text = target.firstChild;

	while (text.nodeValue.match(/^\s*$/))
	{
		text = text.nextSibling;
	}

	textString = text.nodeValue.replace(/^\W*(.*\w)\W*$/, "$1");

	return textString;
}