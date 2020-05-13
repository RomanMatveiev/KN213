var reg_for_names_field =/[-\.;":'0-9]/;
var reg_for_age_field =/[0-9]/;
var ref_for_email = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
var name_field = document.querySelector('#fname');
var age_field = document.querySelector('#age');
var email_field = document.querySelector('#email');
var number =document.querySelector('#number');
var validates = document.querySelectorAll('#validate');

for(var i = 0;i<validates.length;i++)
{
	validates[i].addEventListener('mouseover',onMouseOverValidate);
	validates[i].addEventListener('mouseout',onMouseOutValidate);
}

name_field.addEventListener('mouseover',onMouseOver);
name_field.addEventListener('mouseout',onMouseOut);
name_field.addEventListener('focus', onFocus);
name_field.addEventListener('blur', onBlur);
name_field.addEventListener('change', onNameChange);

age_field.addEventListener('mouseover',onMouseOver);
age_field.addEventListener('mouseout',onMouseOut);
age_field.addEventListener('focus', onFocus);
age_field.addEventListener('blur', onBlur);
age_field.addEventListener('change', onAgeChange);


email_field.addEventListener('mouseover',onMouseOver);
email_field.addEventListener('mouseout',onMouseOut);
email_field.addEventListener('focus', onFocus);
email_field.addEventListener('blur', onBlur);
email_field.addEventListener('change', onEmailChange);

number.addEventListener('mouseover',onMouseOver);
number.addEventListener('mouseout',onMouseOut);
number.addEventListener('focus', onFocus);
number.addEventListener('blur', onBlur);

function onMouseOverValidate()
{
	this.style.backgroundColor = 'rgb(108,13,29)';
}

function onMouseOutValidate()
{
	this.style.backgroundColor = 'rgb(0,0,0)';
}

function onEmailChange()
{
	fail = false;
	this.removeEventListener('blur',onBlur);
	if(!ref_for_email.test(this.value))
	{
		fail = "Невірний формат пошти";
	}
	if(this.value=="")
	{
		fail = false;
		this.addEventListener('blur',onBlur);
	}
	if(fail)
	{
		this.style.backgroundColor="rgb(255,25,25)";
		alert(fail);
	}
	else
	{
		this.style.backgroundColor="rgb(94,255,94)";
	}
}

function onNameChange()
{
	fail = false;
	this.removeEventListener('blur',onBlur);
	if(this.value == " " || reg_for_names_field.test(this.value))
	{
		fail = "Недопустимі символи в полі Name";
	}
	else if(this.value=="")
	{
		this.addEventListener('blur',onBlur);
	}
	if(fail)
	{
		this.style.backgroundColor="rgb(255,25,25)";
		alert(fail);
	}
	else
	{
		this.style.backgroundColor="rgb(94,255,94)";
	}
}

function onAgeChange()
{
	fail = false;
	this.removeEventListener('blur',onBlur);
	if(this.value>100)
	{
		fail = "Ви занадто дорослі для даного сайту";
	}
	else if(this.value <0)
	{
		fail = "Не допустиме значення віку";
	}
	else if(this.value=="")
	{
		this.addEventListener('blur',onBlur);
	}
	if(fail)
	{
		this.style.backgroundColor="rgb(255,25,25)";
		alert(fail);
	}
	else
	{
		this.style.backgroundColor="rgb(94,255,94)";
	}
}
function onMouseOver()
{
	this.style.backgroundColor = 'rgb(156,247,128)';
}
function onFocus() 
{
	this.style.backgroundColor = 'rgb(150,255,200)';
	this.removeEventListener('mouseover',onMouseOver);
	this.removeEventListener('mouseout',onMouseOut);
}
function onBlur()
{
	this.addEventListener('mouseover',onMouseOver);
	this.addEventListener('mouseout',onMouseOut);
	this.style.backgroundColor = 'rgb(255,255,255)';
}
function onMouseOut() {
	this.style.backgroundColor = 'rgb(255,255,255)';
}

