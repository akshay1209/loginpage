function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if (username=="btech" && password=="it")
    {
        alert("login sucessful");
        return false;
    }
    else
    {
        alert("login failed");
    }
}