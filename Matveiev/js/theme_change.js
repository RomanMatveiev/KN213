window.onload = function ()
{
	var shine_button = document.querySelector('.shine');
	var black_button =document.querySelector('.black');

	black_button.hidden = true;

	shine_button.addEventListener('click', shinePressed);
	black_button.addEventListener('click', blackPressed);

	function shinePressed()
	{
		shine_button.hidden = true;
		black_button.hidden = false;

		document.querySelector('.images').style.background = 'url(images/light_side.jpg)';
		document.querySelector('body').style.background = 'url(images/shinesky.jpg)';

		document.querySelector('.navbar').style.backgroundColor = 'rgb(255,255,255)';
		var hrefs = document.querySelectorAll('.navbar a');
		for(var i =0;i<hrefs.length;i++)
		{
			hrefs[i].style.color = 'rgb(0,0,0)';
		}

		document.querySelector('.dropbtn').style.color = 'rgb(0,0,0)';
		document.querySelector('.black').style.color = 'rgb(0,0,0)';
		black_button.addEventListener('mouseover', mouseover);
		black_button.addEventListener('mouseout', mouseout);

		function mouseover()
		{
			this.style.color='rgb(255,255,255)';
		}
		function mouseout()
		{
			this.style.color='rgb(0,0,0)';
		}

		var items = document.querySelectorAll('.item');
		for(var i = 0;i<items.length;i++)
		{
			items[i].style.backgroundColor='rgb(220,210,240)';
			items[i].style.color='black';
			items[i].style.borderColor='rgb(255,226,66)'
		}
		
		var childs = document.querySelectorAll('.child');
		for(var i = 0;i<items.length;i++)
		{
			childs[i].style.borderColor='rgb(255,226,66)';
			childs[i].style.color='black';
		}

		var child1 = document.querySelector('.child-one');
		child1.style.backgroundColor='rgb(150,125,188)';
		
		var child2 = document.querySelector('.child-two');
		child2.style.backgroundColor='rgb(250,123,123)';

		var child3 = document.querySelector('.child-three');
		child3.style.backgroundColor='rgb(255,200,240)';
	}

	function blackPressed()
	{
		shine_button.hidden = false;
		black_button.hidden = true;

		var background_image = document.querySelector('.images');
		background_image.style.background = 'url(images/darthvader.jpg)';
		background_image.style.backgroundRepeat = 'no-repeat';
		background_image.style.backgroundPosition = 'center';
		background_image.style.backgroundSize = 'cover';

		var body_image = document.querySelector('body');
		body_image.style.background = 'url(images/skystars.jpg)';
		body_image.style.backgroundRepeat = 'no-repeat';
		body_image.style.backgroundPosition = 'center';
		body_image.style.backgroundSize = 'cover';

		document.querySelector('.navbar').style.backgroundColor = 'rgb(40,50,110)';
		var hrefs = document.querySelectorAll('.navbar a');
		for(var i =0;i<hrefs.length;i++)
		{
			hrefs[i].style.color = 'rgb(190,200,230)';
		}

		document.querySelector('.dropbtn').style.color = 'rgb(190,200,230)';
		document.querySelector('.black').style.color = 'rgb(190,200,230)';
		

		var items = document.querySelectorAll('.item');
		for(var i = 0;i<items.length;i++)
		{
			items[i].style.backgroundColor='rgb(70,70,110)';
			items[i].style.color='rgb(190,200,230)';
			items[i].style.borderColor='salmon';
		}
		
		var childs = document.querySelectorAll('.child');
		for(var i = 0;i<items.length;i++)
		{
			childs[i].style.borderColor='goldenrod';
			childs[i].style.color='rgb(190,200,230)';
		}

		var child1 = document.querySelector('.child-one');
		child1.style.backgroundColor='rgb(50,20,75)';
		
		var child2 = document.querySelector('.child-two');
		child2.style.backgroundColor='rgb(75,15,15)';

		var child3 = document.querySelector('.child-three');
		child3.style.backgroundColor='rgb(100,20,80)';
	}

}