/*load text from file into webpage*/
window.addEventListener('load', function ()
{
        /*reveal navbar*/
        if( $(window).width() < 769 && (window.innerHeight > window.innerWidth) )
        {
            $('#logo').click(function()
            {
                window.scrollBy(0, 301);
                window.scrollBy(0, -301);
            });
        }
        else
        {
            $('#logo').click(function()
            {
                window.scrollBy(0, 301);
            });
        }
});


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

    if ((window.innerHeight > window.innerWidth) && ($(window).width() < 768)) 
    {
        $(".maindiv").css("margin", "0%");
        $(".centerdivbig").css("margin", "0%");
        $(".centerdiv").css("margin", "0%");
        $(".centerdiv").css("margin", "0%");

        $("#navbarLogoImg").hide();
        $("#navbar").css("font-size", 18);
        $("#navbar a").css("padding-top", 15);
        
    }
}

$(window).resize(function() 
{


    if ($(window).width() < 769)
    {
        $(".maindiv").css("margin", "0%");
        $(".centerdivbig").css("margin", "0%");
        $(".centerdiv").css("margin", "0%");
        $(".centerdiv").css("margin", "0%");

        $("#navbarLogoImg").hide();
        $("#navbar").css("font-size", 18);
        $("#navbar a").css("padding-top", 15);
    }
    /*else if( ($(window).width() > 768) )
    {
        $(".maindiv").css("margin", "15%");
        $(".centerdivbig").css("margin", "15%");
        $(".centerdiv").css("margin", "15%");
        $(".centerdiv").css("margin", "15%");
    }*/

    if ($(window).width() > 768 || (window.innerHeight < window.innerWidth) )
    {
        $("#navbarLogoImg").show();
        $("#navbar").css("font-size", 25);
        $("#navbar a").css("padding-top", 45);
    }

});
        
/*When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar*/
var prevScrollPos = window.pageYOffset;
window.onscroll = function() 
{
    loadNavBar();
}

function loadNavBar()
{
        //show navbar if scrolling up on mobile
        if( $(window).width() < 769 && (window.innerHeight > window.innerWidth) )
        {
            var currentScrollPos = window.pageYOffset;
            document.getElementById("navbar").style.visibility = "visible";
            if(prevScrollPos < currentScrollPos)
            {
                document.getElementById("navbar").style.top = "-300px";
                document.getElementById("logo").style.visibility = "visible";
            }
            else
            {
                document.getElementById("navbar").style.top = "0";
                document.getElementById("logo").style.visibility = "hidden";
            }
            prevScrollPos = currentScrollPos;
        }
    
        //show navbar if scrolling down on desktop
        else
        {
            document.getElementById("navbar").style.visibility = "visible";
            var currentScrollPos = window.pageYOffset;
            if (prevScrollPos < currentScrollPos) 
            {
                document.getElementById("navbar").style.top = "0";
                document.getElementById("logo").style.visibility = "hidden";
            } 
            else 
            {
                document.getElementById("navbar").style.top = "-300px";
                document.getElementById("logo").style.visibility = "visible";
            }
            prevScrollPos = currentScrollPos;
        }
}


/*load a text file into html document*/
function loadText(tagID, fileLocation)
{
    $(tagID).load(fileLocation);
}



