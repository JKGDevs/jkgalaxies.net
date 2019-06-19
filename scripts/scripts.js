/*load text from file into webpage*/
window.onload = function()
{
    if($('body').hasClass("IndexPage"))
    {
        loadText("#manualNews", "text/newsFeed.txt");
        loadText("welcomemsg", "text/welcomeText.txt");
    }
    
    if($('body').hasClass("AboutPage"))
        loadText("#minRequirements", "text/minRequirements.txt");

    if($('body').hasClass("CreditsPage"))
    {
        loadText("#activeDevs", "text/activeDevs.txt");
        loadText("#retiredDevs", "text/retiredDevs.txt");
        loadText("#communityContributors", "text/communityContributors.txt");
    }


    if (window.innerHeight > window.innerWidth) 
    {
        $(".maindiv").css("margin", "0%");
        $(".centerdivbig").css("margin", "0%");
        $(".centerdiv").css("margin", "0%");
        $(".centerdiv").css("margin", "0%");
    }

}



        
/*When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar*/
var prevScrollpos = window.pageYOffset;
window.onscroll = function() 
{
    if(window.innerHeight < window.innerWidth)
    {
        document.getElementById("navbar").style.visibility = "visible";
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos < currentScrollPos) 
        {
            document.getElementById("navbar").style.top = "0";
            document.getElementById("logo").style.visibility = "hidden";
        }
        else 
        {
            document.getElementById("navbar").style.top = "-300px";
            document.getElementById("logo").style.visibility = "visible";
        }
        prevScrollpos = currentScrollPos;
    }
    else
    {
        document.getElementById("navbar").style.top = "0";
        document.getElementById("navbar").style.visibility = "visible";
        document.getElementById("logo").style.visibility = "hidden";
    }
}

/*load a text file into html document*/
function loadText(tagID, fileLocation)
{
    $(tagID).load(fileLocation);
}



