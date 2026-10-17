// Selecting side Navbar,MenuIcon

var sidenav=document.getElementById("sidenav")
var menuIcon=document.getElementById("menuIcon")
var closenav=document.getElementById("close-nav")

menuIcon.addEventListener("click",function()
{
    sidenav.style.right=0
})
closenav.addEventListener("click",function()
{
    sidenav.style.right="-50%"
})