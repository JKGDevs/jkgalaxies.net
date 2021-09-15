
window.addEventListener('load', function ()
{
        /*reveal navbar by clicking logo*/
        $('#logo').click(function()
        {
            window.scrollBy(0, 301);
            window.scrollBy(0, -301);
        });

        //if you want different behavior between mobile/desktop
        /*
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
        /*$("#navbarLogoImg").show();
        $("#navbar").css("font-size", 25);
        $("#navbar a").css("padding-top", 20);*/
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
    }
    else
    {
        document.getElementById("navbar").style.top = "0";
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
                break;
            //key press: left
            case 37:
                showSlides(slideIndex += -1);
                break;
            //key press: right
            case 39:
                showSlides(slideIndex += 1);
                break;
        }
    });
}

/* Open the Modal*/
function openModal() 
{
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