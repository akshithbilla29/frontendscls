function formlogin()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    alert(username+password);
    if(username=="akshith"&& password=="billa")
    {
        alert("Authorised User");
        window.location.href="courses.html";
    }
    else{
        alert("Unauthorised User");
        alert("Invalid Details! Please try again.");
    }
}