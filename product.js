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

// Product search funcionality
var productcontainer=document.getElementById("product-container")
var search=document.getElementById("search")
var productlist=productcontainer.querySelectorAll(":scope > div")

search.addEventListener("input", function(event){
    var enteredValue=event.target.value.toUpperCase()

    for(var count=0;count<productlist.length;count=count+1)
    {
        var productname=productlist[count].querySelector("h1").textContent
        productlist[count].style.display=productname.toUpperCase().indexOf(enteredValue)<0 ? "none" : ""
    }
})
