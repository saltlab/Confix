
var level = 0;




function initBunnies()
{
	var stage = document.getElementById("stage");
	stage.onmousedown = clickStage;
	stage.onclick = function()
		{
			return false;
		};
	stage.onmouseup = function()
		{
			return false;
		};
	stage.onmousemove = function()
		{
			return false;
		};
		
	document.onmousedown = function()
		{
			return false;
		};
		
	levelUp();
	
	return true;
};




function reinitialise()
{
	var stage = document.getElementById("stage");
	removeClass(stage, "gameOver");
	level = 0;
	
	for (var i = 1; i <= bunnies; i++)
	{
		var bunny = document.getElementById("bunny" + i);
		bunny.style.marginRight = 0;
		bunny.style.marginBottom = 0;
		bunny.style.marginLeft = 0;
		bunny.direction = "up";
		bunny.dropped = false;
		bunny.target = false;
		removeClass(bunny, "dead");
		removeClass(bunny, "poison");
		clearTimeout(bunny.timer);
	}
	
	document.getElementById("bomb1").style.marginLeft = "0px";
	document.getElementById("bomb2").style.marginRight = "0px";
	
	var lives = document.getElementById("lives");
	lives.livesLost = 0;
	lives.className = "";
	
	var score = document.getElementById("score");
	var scoreP = score.getElementsByTagName("p")[0];
	scoreP.firstChild.nodeValue = "0";
	
	var levelContainer = document.getElementById("level");
	var levelP = levelContainer.getElementsByTagName("p")[0];
	var levelBar = levelContainer.getElementsByTagName("div")[1];
	levelContainer.currTime = 0;
	levelP.firstChild.nodeValue = level;
	levelBar.style.width = "0";

	levelUp();
	
	return true;
};




function endGame()
{
	clearTimeout(randomTimer);
	
	for (var i = 1; i <= bunnies; i++)
	{
		clearTimeout(document.getElementById("bunny" + i).timer);
	}
	
	var stage = document.getElementById("stage");
	addClass(stage, "gameOver");
	
	var levelContainer = document.getElementById("level");
	var levelMessage = document.getElementById("levelMessage");
	clearTimeout(levelContainer.timer);
	levelMessage.innerHTML = "";

	var message = document.getElementById("message");
	var score = document.getElementById("score");
	var scoreP = score.getElementsByTagName("p")[0];
	var randomMessage = Math.ceil(Math.random() * 5);
	var verb = "splattered";
	
	switch (randomMessage)
	{
		case 1:
		
			verb = "eviscerated";
			
			break;
		
		case 2:
		
			verb = "mutilated";
			
			break;
			
		case 3:
		
			verb = "massacred";
			
			break;
		
		case 4:
		
			verb = "butchered";
			
			break;
	}
	
	message.innerHTML = "Number of bunnies " + verb + ": <p>" + scoreP.firstChild.nodeValue + "</p>";
	
	var buttonReload = document.createElement("input");
	buttonReload.type = "image";
	buttonReload.src = "images/button_reload.gif";
	buttonReload.onclick = reinitialise;
	message.appendChild(buttonReload);
			
	var buttonStop = document.createElement("input");
	buttonStop.type = "image";
	buttonStop.src = "images/button_stop.gif";
	buttonStop.onclick = stop;
	message.appendChild(buttonStop);
			
	return true;
};




function stop()
{
	var closing = document.getElementById("closing");
	closing.className = "ready";
	
	var stage = document.getElementById("stage");
	stage.className = "";
	
	return true;
};




function levelTimer()
{
	var levelLength = 12;
	var levelContainer = document.getElementById("level");
	var levelP = levelContainer.getElementsByTagName("p")[0];
	var levelBar = levelContainer.getElementsByTagName("div")[1];
	
	if (typeof levelContainer.currTime == "undefined")
	{
		levelContainer.currTime = 0;
	}
	
	levelContainer.currTime++;

	if (levelContainer.currTime >= levelLength)
	{
		levelBar.style.width = "100%";

		if (typeof randomTimer != "undefined")
		{
			clearTimeout(randomTimer);
		}
		
		randomTimer = setTimeout("levelUp()", 1000);
		
		return true;
	}
	
	levelBar.style.width = Math.ceil(levelContainer.currTime / levelLength * 100) + "%";

	levelContainer.timer = setTimeout("levelTimer()", 1000);
	
	return true;
};




function levelUp()
{
	var levelContainer = document.getElementById("level");
	var levelP = levelContainer.getElementsByTagName("p")[0];
	var levelMessage = document.getElementById("levelMessage");
	var levelBar = levelContainer.getElementsByTagName("div")[1];
	
	level++;
	levelContainer.currTime = 0;
	levelP.firstChild.nodeValue = level;
	levelBar.style.width = "0";
	
	if (level == 4)
	{
		bunnies = 10;
	}
	else if (level > 4)
	{
		bunnies = 11;
	}
	else
	{
		bunnies = 9;
	}

	levelMessage.innerHTML = "Level " + level;
	levelMessage.style.display = "block";
	
	randomTimer = setTimeout("resumeLevel()", 1000);
	
	return true;
};




function resumeLevel()
{
	var increment = 0.1;
	var levelMessage = document.getElementById("levelMessage");
	var opacity = parseFloat(levelMessage.style.opacity);
	
	if (typeof opacity == "undefined" || isNaN(opacity) || opacity == "")
	{
		opacity = "1";
	}
	
	if (opacity <= increment * 1.5)
	{
		levelMessage.style.display = "none";
		levelMessage.style.opacity = "0.99";
		
		levelTimer();
		
		randomBunny();
	}
	else
	{
		levelMessage.style.opacity = opacity - increment;
		setTimeout("resumeLevel()", 25);
	}
	
	return true;
};




function lostLife()
{
	var lives = document.getElementById("lives");

	if (typeof lives.livesLost == "undefined")
	{
		lives.livesLost = 1;
	}
	else
	{
		lives.livesLost++;
	}

	addClass(lives, "lost" + lives.livesLost);

	if (lives.livesLost >= 3)
	{
		endGame();

		return false;
	}
};




function randomBunny()
{
	for (var i = 0; i < level && i < 3; i++)
	{
		var random = Math.ceil(Math.random() * bunnies);
		var bunny = document.getElementById("bunny" + random);

		if (bunny.target != true && !(level < 6 && random == 10 && document.getElementById("bunny11").target == true) && !(level < 6 && random == 11 && document.getElementById("bunny10").target == true))
		{
			bunny.target = true;
			
			if (random == 10)
			{
				bunnyJump2();
			}
			else if (random == 11)
			{
				bunnyJump3();
			}
			else
			{
				bunnyJump1(bunny);

				var deathRandom = Math.random();

				if (deathRandom > 0.85)
				{
					addClass(bunny, "poison");
				}
			}
		}
		else
		{
			for (var j = 1; j <= bunnies; j++)
			{
				if (document.getElementById("bunny" + j).target != true)
				{
					break;
				}
			}
			
			if (j > bunnies)
			{
				break;
			}
			else
			{
				--i;
			}
		}
	}
	
	randomTimer = setTimeout("randomBunny()", 2000 - level * 100);
	
	return true;
};




function bunnyJump1(bunny)
{
	var increment = 7;
	var interval = 25;
	var jumpHeight = 130;
	var marginBottom = parseInt(bunny.style.marginBottom);

	if (isNaN(marginBottom))
	{
		marginBottom = 0;
	}
	
	if (bunny.direction == "down" && marginBottom < increment)
	{
		bunny.direction = "up";
		bunny.style.marginBottom = "0px";
		bunny.target = false;
		removeClass(bunny, "poison");
		
		return true;
	}
	
	if (bunny.direction == "down")
	{
		bunny.style.marginBottom = marginBottom - 2 * increment + "px";
	}
	else
	{
		bunny.style.marginBottom = marginBottom + increment + "px";
		
		if (parseInt(bunny.style.marginBottom) > jumpHeight)
		{
			bunny.direction = "down";
			interval = 925 - (level * 100);
		}
	}
	
	bunny.timer = setTimeout(function()
		{
			bunnyJump1(bunny);
		}, interval);
	
	return true;
};




function bunnyJump2(bunny)
{
	var bunny = document.getElementById("bunny10");
	var bomb = document.getElementById("bomb1");
	var increment = 7;
	var interval = 25;
	var jumpHeight = 90;
	var marginLeft = parseInt(bunny.style.marginLeft);

	if (isNaN(marginLeft))
	{
		marginLeft = 0;
	}
	
	if (marginLeft > jumpHeight && bunny.direction == "down")
	{
		bunny.dropped = true;
		dropBomb(bomb);
	}
	
	if (bunny.direction == "down" && marginLeft < increment)
	{
		bunny.direction = "up";
		bunny.style.marginLeft = "0px";
		bunny.dropped = false;
		
		return true;
	}
	
	if (bunny.direction == "down")
	{
		bunny.style.marginLeft = marginLeft - 2 * increment + "px";
	}
	else
	{
		bunny.style.marginLeft = marginLeft + increment + "px";
		bomb.style.marginLeft = marginLeft + increment + "px";
		
		if (parseInt(bunny.style.marginLeft) > jumpHeight)
		{
			bunny.direction = "down";
			interval = 1325 - (level * 50);
		}
	}
	
	bunny.timer = setTimeout(function()
		{
			bunnyJump2(bunny);
		}, interval);
	
	return true;
};




function bunnyJump3(bunny)
{
	var bunny = document.getElementById("bunny11");
	var bomb = document.getElementById("bomb2");
	var increment = 7;
	var interval = 25;
	var jumpHeight = 95;
	var marginRight = parseInt(bunny.style.marginRight);

	if (isNaN(marginRight))
	{
		marginRight = 0;
	}
	
	if (marginRight > jumpHeight && bunny.direction == "down")
	{
		bunny.dropped = true;
		dropBomb(bomb);
	}
	
	if (bunny.direction == "down" && marginRight < increment)
	{
		bunny.direction = "up";
		bunny.style.marginRight = "0px";
		bunny.dropped = false;
		
		return true;
	}
	
	if (bunny.direction == "down")
	{
		bunny.style.marginRight = marginRight - 2 * increment + "px";
	}
	else
	{
		bunny.style.marginRight = marginRight + increment + "px";
		bomb.style.marginRight = marginRight + increment + "px";
		
		if (parseInt(bunny.style.marginRight) > jumpHeight)
		{
			bunny.direction = "down";
			interval = 1325 - (level * 50);
		}
	}
	
	bunny.timer = setTimeout(function()
		{
			bunnyJump3(bunny);
		}, interval);
	
	return true;
};




function dropBomb(bomb)
{
	var increment = 11;
	var interval = 25;
	var jumpHeight = 280;
	var marginTop = parseInt(bomb.style.marginTop);

	if (isNaN(marginTop))
	{
		marginTop = 0;
	}
	
	if (marginTop > jumpHeight)
	{
		lostLife();
		
		addClass(bomb, "exploded");
		
		bomb.style.marginTop = "205px";
		
		blink(bomb);
		
		return true;
	}
	
	bomb.style.marginTop = marginTop + increment + "px";
		
	bomb.timer = setTimeout(function()
		{
			dropBomb(bomb);
		}, interval);
	
	return true;
};




function clickStage(event)
{
	if (hasClass(this, "gameOver"))
	{
		return false;
	}
	
	if (typeof event == "undefined")
	{
		event = window.event;
	}

	if (typeof event.clientX	!= "undefined")
	{
		var clickX = event.clientX;
		var clickY = event.clientY;
	}
	else
	{
		var clickX = event.offsetX;
		var clickY = event.offsetY;
	}
	
	for (var i = 1; i <= bunnies; i++)
	{
		var bunny = document.getElementById("bunny" + i);
		var position = getPosition(bunny);
		var stagePosition = getPosition(this);
		
		if (bunny.target == true && !hasClass(bunny, "dead") && bunny.dropped != true)
		{
			if (clickX >= position[0] && clickX <= position[0] + bunny.offsetWidth)
			{
				if (clickY >= position[1] && clickY <= position[1] + bunny.offsetHeight)
				{
					clearTimeout(bunny.timer);
					
					addClass(bunny, "dead");
					
					if (hasClass(bunny, "poison"))
					{
						blink(bunny);
			
						lostLife();
					}
					else
					{
						setTimeout(function()
							{
								fade(bunny);
							}, 750);
							
						var score = document.getElementById("score");
						var scoreP = score.getElementsByTagName("p")[0];
						scoreP.firstChild.nodeValue = parseInt(scoreP.firstChild.nodeValue) + 1;
					}
						
					break;
				}
			}
		}
	}

	return false;
};




function fade(bunny)
{
	bunny.style.marginRight = "0";
	bunny.style.marginBottom = "0";
	bunny.style.marginLeft = "0";
	removeClass(bunny, "dead");
	removeClass(bunny, "poison");
	bunny.target = false;
	bunny.direction = "up";
	
	if (bunny.id == "bunny10")
	{
		document.getElementById("bomb1").style.marginLeft = "0px";
	}
	else if (bunny.id == "bunny11")
	{
		document.getElementById("bomb2").style.marginRight = "0px";
	}

	return true;
};




function blink(bunny)
{
	var display = bunny.style.display;
	
	if (display == "")
	{
		display = "block";
	}

	if (display == "none")
	{
		bunny.style.display = "block";
	}
	else
	{
		bunny.style.display = "none";
	}
	
	if (typeof bunny.blinkCounter == "undefined")
	{
		bunny.blinkCounter = 0;
	}
	
	if (bunny.blinkCounter > 5)
	{
		bunny.blinkCounter = 0;
		bunny.style.marginBottom = "0";
		bunny.style.display = "block";
		removeClass(bunny, "dead");
		removeClass(bunny, "poison");
		
		if (bunny.id.match(/bomb/))
		{
			bunny.style.marginRight = "0px";
			bunny.style.marginLeft = "0px";
			bunny.style.marginTop = "0px";

			if (bunny.id == "bomb1")
			{
				document.getElementById("bunny10").target = false;
			}
			else
			{
				document.getElementById("bunny11").target = false;
			}
			
			removeClass(bunny, "exploded");
		}
		else
		{
			bunny.target = false;
			bunny.direction = "up";
		}
	}
	else
	{
		bunny.blinkCounter++;
		
		setTimeout(function()
			{
				blink(bunny);
			}, 500);
	}

	return true;
};




function getPosition(theElement)
{
    var positionX = 0;
    var positionY = 0;

    while (theElement != null)
    {
        positionX += theElement.offsetLeft;
        positionY += theElement.offsetTop;
        theElement = theElement.offsetParent;
    }
    
    return [positionX, positionY];
};
