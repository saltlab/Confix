// DDF
function dg(x) {
	return document.getElementById(x);
}

// motivating DDF example used in the paper
function sumTotalPrice(){
	sum = 0;
	itemList = dg('items');
	if (itemList.children.length === 0)
		dg('message').innerHTML = "Item list is empty!";
	else {
		for (i = 0; i < itemList.children.length; i++){
			p = parseInt(itemList.children[i].value);
			if (p > 0)
				sum += p;
			else
				dg('message').innerHTML += " Wrong value for item " + i;
		}
		dg('total').innerHTML = sum;
	}
    return sum;
}
