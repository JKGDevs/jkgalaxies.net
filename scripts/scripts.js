window.addEventListener("load",(function(){$("#logo").click((function(){window.scrollBy(0,301),window.scrollBy(0,-301)}))})),$(document).ready((function(){if($("body").hasClass("IndexPage")&&(loadText("#manualNews","text/newsFeed.txt"),loadText("welcomemsg","text/welcomeText.txt")),$("body").hasClass("FAQPage")&&loadText("#minRequirements","text/minRequirements.txt"),$("body").hasClass("CreditsPage")&&(loadText("#activeDevs","text/activeDevs.txt"),loadText("#retiredDevs","text/retiredDevs.txt"),loadText("#communityContributors","text/communityContributors.txt"),loadText("#resourceContributors","text/resourceContributors.txt")),$("body").hasClass("404Page")&&select404Error(),$("body").hasClass("AboutPage")&&handleImageModal(),$("body").hasClass("IndexPage")){let hover_dwnload_btn=document.getElementById("downloadHoverButton");function hover_dwn_btn(btn){dwn_btn_text=btn.currentTarget.innerHTML,btn.currentTarget.innerHTML="Get<br>JKG!"}function unhover_dwn_btn(btn){btn.currentTarget.innerHTML=dwn_btn_text}hover_dwnload_btn.onmouseover=hover_dwn_btn,hover_dwnload_btn.onmouseleave=unhover_dwn_btn,hover_dwn_btn_text="",-1!=window.navigator.userAgent.indexOf("Windows NT 10.0")&&(document.getElementById("downloadHoverButton").innerHTML="&#11123;")}window.innerHeight>window.innerWidth&&$(window).width()<768&&($(".maindiv").css("margin","0%"),$(".centerdivbig").css("margin","0%"),$(".centerdiv").css("margin","0%"),$(".centerdiv").css("margin","0%"),$("#navbarLogoImg").hide(),$("#navbar").css("font-size",18),$("#navbar a").css("padding-top",15),$("#downloadHoverButton").hide(),$("body").hasClass("IndexPage")&&$("#widgetbotframe").width(330),$("body").hasClass("AboutPage")&&($("#image-carousel").css("width","auto"),$("#image-carousel").css("margin-left","auto"),$("#image-inner-carousel").css("width","auto"),$("#image-inner-carousel").css("margin-left","auto")))})),window.onload=function(){window.innerHeight>window.innerWidth&&$(window).width()<768&&($(".maindiv").css("margin","0%"),$(".centerdivbig").css("margin","0%"),$(".centerdiv").css("margin","0%"),$(".centerdiv").css("margin","0%"),$("#navbarLogoImg").hide(),$("#navbar").css("font-size",18),$("#navbar a").css("padding-top",15),$("#downloadHoverButton").hide())},$(window).resize((function(){$(window).width()<769&&($(".maindiv").css("margin","0%"),$(".centerdivbig").css("margin","0%"),$(".centerdiv").css("margin","0%"),$(".centerdiv").css("margin","0%"),$("#navbarLogoImg").hide(),$("#navbar").css("font-size",18),$("#navbar a").css("padding-top",15),$("#downloadHoverButton").hide(),$("body").hasClass("IndexPage")&&$("#widgetbotframe").width(330),$("body").hasClass("AboutPage")&&($("#image-carousel").css("width","auto"),$("#image-carousel").css("margin-left","auto"),$("#image-inner-carousel").css("width","auto"),$("#image-inner-carousel").css("margin-left","auto"))),($(window).width()>768||window.innerHeight<window.innerWidth)&&($(".maindiv").css("margin","auto 15%"),$(".centerdivbig").css("margin","auto 15%"),$(".centerdiv").css("margin","auto 15%"),$(".centerdiv").css("margin","auto 15%"),$("#navbar").css("font-size",25),$("#navbar a").css("padding-top",20),$("#downloadHoverButton").show(),$("body").hasClass("IndexPage")&&$("#widgetbotframe").width(480),$("body").hasClass("AboutPage")&&($("#image-carousel").css("width","125%"),$("#image-carousel").css("margin-left","-10%"),$("#image-inner-carousel").css("width","80%"),$("#image-inner-carousel").css("margin-left","10%")))}));var prevScrollPos=window.pageYOffset;function loadNavBar(){var currentScrollPos=window.pageYOffset;document.getElementById("navbar").style.visibility="visible",document.getElementById("navbar").style.top=prevScrollPos<currentScrollPos?"-300px":"0",prevScrollPos=currentScrollPos}function select404Error(){var fofimages=["https://i.imgur.com/TwgFzdm.gif","https://i.imgur.com/JlliXwt.gif","https://i.imgur.com/6fWJhKw.gif"],fofalt=["Move along.  Move along.","Perhaps the archives are incomplete...","No ALderaan?"],foftext=["This is not the page you're looking for.","If an item does not appear in our records, it does not exist.","It's not on any of the charts."],select=Math.floor(Math.random()*fofimages.length);$("#TextJoke").text(foftext[select]),$("#ImgJoke").attr("src",fofimages[select]),$("#ImgJoke").attr("alt",fofalt[select])}function loadText(tagID,fileLocation){$(tagID).load(fileLocation)}function handleImageModal(){slideIndex=1,showSlides(slideIndex),$(document).keydown((function(e){switch(e.keyCode){case 27:closeModal();break;case 37:showSlides(slideIndex+=-1);break;case 39:showSlides(slideIndex+=1)}}))}function openModal(){window.scrollBy(0,25),document.getElementById("myModal").style.display="block",document.getElementById("video-carousel-indicators").style.visibility="hidden"}function closeModal(){document.getElementById("myModal").style.display="none",document.getElementById("video-carousel-indicators").style.visibility="visible"}function plusSlides(n){showSlides(slideIndex+=n)}function currentSlide(n){showSlides(slideIndex=n)}function showSlides(n){var i,slides=document.getElementsByClassName("mySlides"),captionText=document.getElementById("captionText");for(n>slides.length&&(slideIndex=1),n<1&&(slideIndex=slides.length),i=0;i<slides.length;i++)slides[i].style.display="none";slides[slideIndex-1].style.display="block",captionText.innerHTML=slides[slideIndex-1].querySelector("img").title}function openModalMediaShare(){window.scrollBy(0,25),document.getElementById("MediaShareModal").style.display="block",document.getElementById("video-carousel-indicators").style.visibility="hidden",document.getElementById("clipNotify").style.display="none",document.getElementById("clipNotify").style.visibility="hidden"}function closeModalMediaShare(){document.getElementById("MediaShareModal").style.display="none",document.getElementById("video-carousel-indicators").style.visibility="visible"}function copyMediaShare(){navigator.clipboard.writeText(document.getElementById("rawtext").innerHTML),document.getElementById("clipNotify").style.display="block",document.getElementById("clipNotify").style.visibility="visible"}window.onscroll=function(){loadNavBar()};