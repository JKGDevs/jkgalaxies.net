
window.addEventListener('load', function ()
{
        /*reveal navbar by clicking logo*/
        $('.logo').click(function()
        {
            window.scrollBy(0, 301);
            window.scrollBy(0, -301);
            loadNavBar();               //call this directly in case the resolution of the screen is big enough there's no scrollbar
        });

        //if you want different behavior between mobile/desktop
        /*
        if( $(window).width() < 769 && (window.innerHeight > window.innerWidth) )
        {
            $('.logo').click(function()
            {
                window.scrollBy(0, 301);
                window.scrollBy(0, -301);
                loadNavBar();
            });
        }
        else
        {
            $('.logo').click(function()
            {
                window.scrollBy(0, 301);
                loadNavBar();
            });
        }
        */
});



$(document).ready(function()
{
    /*load text from file into webpage*/
    if($('body').hasClass("IndexPage"))
    {
        loadText("#manualNews", "text/newsFeed.txt");
        loadText("welcomemsg", "text/welcomeText.txt");
    }
    
    if($('body').hasClass("FAQPage"))
        loadText("#minRequirements", "text/minRequirements.txt");

    if($('body').hasClass("CreditsPage"))
    {
        loadText("#activeDevs", "text/activeDevs.txt");
        loadText("#retiredDevs", "text/retiredDevs.txt");
        loadText("#communityContributors", "text/communityContributors.txt");
        loadText("#resourceContributors", "text/resourceContributors.txt");
    }

    if($('body').hasClass("404Page"))
    {
        select404Error();
    }

    if($('body').hasClass("AboutPage"))
    {
        handleImageModal();
    }

    if($('body').hasClass("DiscordPage"))
    {
        window.onload = function() {
            window.location.replace("https://discord.gg/YuG8Zks"); // similar to a redirect
        }
    }

    
    if($('body').hasClass("IndexPage"))
    {
        //handle hovering dwnload btn
        let hover_dwnload_btn = document.getElementById('downloadHoverButton');
        hover_dwnload_btn.onmouseover = hover_dwn_btn;
        hover_dwnload_btn.onmouseleave = unhover_dwn_btn
        hover_dwn_btn_text = "";
        
        function hover_dwn_btn(btn)
        {
            dwn_btn_text = btn.currentTarget.innerHTML;
            btn.currentTarget.innerHTML = "Get<br>JKG!";
            
        }
        
        function unhover_dwn_btn(btn)
        {
            btn.currentTarget.innerHTML = dwn_btn_text;
        }

        //only win10 currently supports extended unicode :( so nobody else gets fancy download arrow yet
        if ((window.navigator.userAgent.indexOf("Windows NT 10.0") !=-1))
        {
            document.getElementById("downloadHoverButton").innerHTML = "&#11123;";
        }
            
    }

    /*resize window before load is complete (for mobile)*/
    if ((window.innerHeight > window.innerWidth) && ($(window).width() < 768)) 
    {
        
        $(".maindiv").css("margin", "0%");
        $(".centerdivbig").css("margin", "0%");
        $(".centerdiv").css("margin", "0%");
        $(".centerdiv").css("margin", "0%");

        $("#navbarLogoImg").hide();
        $("#navbar").css("font-size", 18);
        $("#navbar a").css("padding-top", 15);
        $("#downloadHoverButton").hide();

        //resize widgetbot frame
        if($("body").hasClass("IndexPage"))
        {
            $("#widgetbotframe").width(330);
        }

        //reposition arrows on carousel
        if($("body").hasClass("AboutPage"))
        {
            $("#image-carousel").css("width", "auto");
            $("#image-carousel").css("margin-left", "auto"); 
            $("#image-inner-carousel").css("width", "auto"); 
            $("#image-inner-carousel").css("margin-left", "auto");
        }
    }

});

window.onload = function()
{
    /*resize window after loading all content (for mobile)*/
    if ((window.innerHeight > window.innerWidth) && ($(window).width() < 768)) 
    {
        
        $(".maindiv").css("margin", "0%");
        $(".centerdivbig").css("margin", "0%");
        $(".centerdiv").css("margin", "0%");
        $(".centerdiv").css("margin", "0%");

        $("#navbarLogoImg").hide();
        $("#navbar").css("font-size", 18);
        $("#navbar a").css("padding-top", 15);
        $("#downloadHoverButton").hide();
    }

        //don't play vids till the page has loaded - autoplay should do this, don't need this
        /*for(let i=0; i<3; i++)
        {
            $("video")[i].play();
        }*/
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
        $("#downloadHoverButton").hide();

        //resize widgetbot frame
        if($("body").hasClass("IndexPage"))
        {
            $("#widgetbotframe").width(330);
        }

        if($("body").hasClass("AboutPage"))
        {
            $("#image-carousel").css("width", "auto");
            $("#image-carousel").css("margin-left", "auto"); 
            $("#image-inner-carousel").css("width", "auto"); 
            $("#image-inner-carousel").css("margin-left", "auto");
        }
    }

    if ($(window).width() > 768 || (window.innerHeight < window.innerWidth) )
    {
        $(".maindiv").css("margin", "auto 15%");
        $(".centerdivbig").css("margin", "auto 15%");
        $(".centerdiv").css("margin", "auto 15%");
        $(".centerdiv").css("margin", "auto 15%");

        //show navbar on load from desktop?  Nah...not anymore.
        //$("#navbarLogoImg").show();
        $("#navbar").css("font-size", 25);
        $("#navbar a").css("padding-top", 20);
        $("#downloadHoverButton").show();

        //resize widgetbot frame back to full
        if($("body").hasClass("IndexPage"))
        {
            $("#widgetbotframe").width(480);
        }


        if($("body").hasClass("AboutPage"))
        {
            $("#image-carousel").css("width", "125%");
            $("#image-carousel").css("margin-left", "-10%"); 
            $("#image-inner-carousel").css("width", "80%"); 
            $("#image-inner-carousel").css("margin-left", "10%");
        }
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
    var currentScrollPos = window.pageYOffset;
    document.getElementById("navbar").style.visibility = "visible";
    if(prevScrollPos < currentScrollPos)
    {
        document.getElementById("navbar").style.top = "-300px";

        //only shift the modal window down on the about page
        if($('body').hasClass("AboutPage"))
        {
            document.getElementById("myModalCloser").style.setProperty("top", "10px");
            document.getElementById("MediaModalCloser").style.setProperty("top", "10px");
        }
    }
    else
    {
        var pixelsdown = "60px"; //for determing how far down the modal close btn should be
        document.getElementById("navbar").style.top = "0";
        if($(window).width() < 769 && window.innerHeight > window.innerWidth) 
        {
            pixelsdown = "80px"; //go further down on mobile screens so its not covered by the navbar
        }

        if($('body').hasClass("AboutPage"))
        {
            document.getElementById("myModalCloser").style.setProperty("top", pixelsdown);
            document.getElementById("MediaModalCloser").style.setProperty("top", "60px");
        }
    }
    prevScrollPos = currentScrollPos;

    //if you want different behavior for desktop/mobile (old way of doing it)
    /*
        //show navbar if scrolling up on mobile
        if( $(window).width() < 769 && (window.innerHeight > window.innerWidth) )
        {
            var currentScrollPos = window.pageYOffset;
            document.getElementById("navbar").style.visibility = "visible";
            if(prevScrollPos < currentScrollPos)
            {
                document.getElementById("navbar").style.top = "-300px";
                //document.getElementById("logo").style.visibility = "visible";
            }
            else
            {
                document.getElementById("navbar").style.top = "0";
                //document.getElementById("logo").style.visibility = "hidden";
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
                //document.getElementById("logo").style.visibility = "hidden";
            } 
            else 
            {
                document.getElementById("navbar").style.top = "-300px";
                //document.getElementById("logo").style.visibility = "visible";
            }
            prevScrollPos = currentScrollPos;
        }
    */
}

/* randomly choose a 404 error message to display*/
function select404Error()
{
    //if you add new 404 error jokes, each array needs to stay the same size
    var fofimages = ["https://i.imgur.com/TwgFzdm.gif", "https://i.imgur.com/JlliXwt.gif", "https://i.imgur.com/6fWJhKw.gif"];      //holds image
    var fofalt = ["Move along.  Move along.", "Perhaps the archives are incomplete...", "No ALderaan?"];                            //holds the alt text for the image
    var foftext =  ["This is not the page you're looking for.", "If an item does not appear in our records, it does not exist.", "It's not on any of the charts."]; //holds the title text
    var select = Math.floor(Math.random() * fofimages.length);
    
    $("#TextJoke").text(foftext[select]);
    $("#ImgJoke").attr("src",fofimages[select]);
    $("#ImgJoke").attr("alt", fofalt[select]);
}

/*load a text file into html document*/
function loadText(tagID, fileLocation)
{
    $(tagID).load(fileLocation);
}


/*
Handle 3rd party cookie GDPR
Generic function for just hiding an element (doesn't block any resources).
*/
function acceptCookies(elementToReveal, elementToHide, link)
{
    if(document.getElementById(elementToReveal))
    {
        document.getElementById(elementToHide).style.display = 'none';
        document.getElementById(elementToReveal).style.display = 'block';
    }
    else
    {
        console.log("Error: '" + elementtoReveal +"' not found, unable to accept.")
    }
}

/*
Handle 3rd party cookie GDPR
This is a generic element for iframes.
*/
//elementToReveal is the element on the page that is hidden until agreeing to allow cookies
//elementToHide is typically the cookie banner (it goes away after you press hide)
//link is the url to the embedded iframe
//id specifies what div id to look at
function acceptCookiesIframe(elementToReveal, elementToHide, link, id)
{
    if(document.getElementById(elementToReveal))
    {
        document.getElementById(elementToHide).style.display = 'none';
        document.getElementById(elementToReveal).style.display = 'block';
    }
    else
    {
        console.log("Error: '" + elementtoReveal +"' not found, unable to accept.")
        return;
    }

    if(link === undefined || typeof(link) === undefined || id == undefined || typeof(id) === undefined)
        return;
    else
    {

        if(document.getElementById(id))
        {
            document.getElementById(id).src = link;
        }
    }
}

/*
Handle 3rd party cookie GDPR
This is specifically for embedded Youtube Videos.
*/
//elementToReveal is the element on the page that is hidden until agreeing to allow cookies
//elementToHide is typically the cookie banner (it goes away after you press hide)
//link is the url to the youtube embedded video
//id specifies what div id to look at
function acceptCookiesYoutube(elementToReveal, elementToHide, link, id)
{
    if(document.getElementById(elementToReveal))
    {
        document.getElementById(elementToHide).style.display = 'none';
        document.getElementById(elementToReveal).style.display = 'block';
    }
    else
    {
        console.log("Error: '" + elementtoReveal +"' not found, unable to accept.")
        return;
    }

    if(link === undefined || typeof(link) === undefined || id == undefined || typeof(id) === undefined)
        return;
    else
    {

        if(document.getElementById(id))
        {
            document.getElementById(id).firstElementChild.src = link;
        }
    }
}

/*
Handle 3rd party cookie GDPR
This is specifically for embedded widgetbot.
*/
//elementToReveal is the element on the page that is hidden until agreeing to allow cookies
//elementToHide is typically the cookie banner (it goes away after you press hide)
//link is the url to the embedded javascript (usually handled as an iframe under the hood)
function acceptCookiesJavascript(elementToReveal, elementToHide, link)
{
    if(document.getElementById(elementToReveal))
    {
        document.getElementById(elementToHide).style.display = 'none';
        document.getElementById(elementToReveal).style.display = 'block';
    }
    else
    {
        console.log("Error: '" + elementtoReveal +"' not found, unable to accept.")
        return;
    }

    if(link === undefined || typeof(link) === undefined)
        return;
    else
    {

        var s = document.createElement("script");
        s.async = true;
        s.defer = true;
        s.type = "text/javascript";
        s.src = link;
        $("head").append(s);

    }
}

/*Modal Stuff*/
function handleImageModal()
{
    slideIndex = 1;
    showSlides(slideIndex);

    //for keypress events
    $(document).keydown(function(e)
    {  
        switch(e.keyCode)
        {
            //key press: esc
            case 27:
                closeModal();
                closeModalMediaShare();
                break;
            //key press: left or a
            case 37:
            case 65:
                showSlides(slideIndex += -1);
                break;
            //key press: right or d
            case 39:
            case 68:
                showSlides(slideIndex += 1);
                break;
        }
    });
}

/* Open the Modal*/
function openModal() 
{
    window.scrollBy(0, 25);
    document.getElementById("myModal").style.display = "block";
    document.getElementById("video-carousel-indicators").style.visibility = "hidden";
}

/* Close the Modal*/
function closeModal() 
{
    document.getElementById("myModal").style.display = "none";
    document.getElementById("video-carousel-indicators").style.visibility = "visible";
}

/* Next/previous controls */
function plusSlides(n) 
{
    showSlides(slideIndex += n);
}
  
// Thumbnail image controls
function currentSlide(n) 
{
    showSlides(slideIndex = n);
}

/*displays the modal image slides */
function showSlides(n) 
{
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var captionText = document.getElementById("captionText");
  if (n > slides.length) 
    {
        slideIndex = 1
    }

  if (n < 1) 
    {
        slideIndex = slides.length
    }

  for (i = 0; i < slides.length; i++) 
  {
      slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
  captionText.innerHTML = slides[slideIndex-1].querySelector("img").title;
}



/* Open the Modal*/
function openModalMediaShare() 
{
    window.scrollBy(0, 25);
    document.getElementById("MediaShareModal").style.display = "block";
    document.getElementById("video-carousel-indicators").style.visibility = "hidden";
    document.getElementById("clipNotify").style.display = "none";
    document.getElementById("clipNotify").style.visibility = "hidden";
}

/* Close the Modal*/
function closeModalMediaShare() 
{
    document.getElementById("MediaShareModal").style.display = "none";
    document.getElementById("video-carousel-indicators").style.visibility = "visible";
}

function copyMediaShare()
{
    navigator.clipboard.writeText(document.getElementById("rawtext").innerHTML);
    document.getElementById("clipNotify").style.display = "block";
    document.getElementById("clipNotify").style.visibility = "visible";
}