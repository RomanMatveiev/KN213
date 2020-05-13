function phonenumber(inputtxt)
{
  var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{3})?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if(inputtxt.value.match(phoneno))
        {
      return true;
    alert("It`s a valid Phone Number!");
        }
      else
        {
        alert("It`s not a valid Phone Number!");
  
        }
}