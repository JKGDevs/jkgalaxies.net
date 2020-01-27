# JKGalaxies.net Readme
Jedi Knight Galaxies Website (jkgalaxies.net)

This contains public website code.  Private information, such as api security keys etc. should NOT be uploaded to this repository.  If you're looking for the game's repository itself, go here: https://github.com/JKGDevs/JediKnightGalaxies

## File Organization ##
How the site code is organized.

#### root ####
Contains the main parts of the web page.  
* html files (such as index.html, about.html, etc.)  
* index.html the primary web page, just contains a brief description and announcement feeds, directs to other pages.  
* about.html explains what the mod is and has some media showing the mod off, also links to the faq page.
* faq.html answers common questions about the mod and provides general information and links to resources.
* contributors.html lists all the developers and volunteers that have worked on the mod.  
* download.html contains download links to the test and stable releases for the mod.  
* legal.html a boring page with legal crap required by law.  
* update.index.html will serve as a splash page, if someone tries to go to update.jkgalaxies.net - right now it doesn't really serve a purpose until someone fixes the launcher.  
* styles.css (overrides styles for the site, most pages use this, additional css styling pages can also be added to root, however, the primary css file is styles.css and you should try to just update that if possible before adding new style sheets.

#### text ####
Contains easy-to-update .txt files that contain textual blobs that can be/are inserted into the site such as newsFeed.txt this does support html text technically, so you can do formatting if you want.

#### scripts ####
Contains site javascript files.  
* downloads.js is specialized for download.html and contains logic for autoupdating download page, this is probably the most important script. 
* scripts.js is a common script shared among most web pages  
* jquery 3.4.1 is also contained here (but most pages load it from a CDN, this one is a fallback since jquery is critical to the site's functionality.  Some brief testing on jquery's latest stable release should be done about once every few months, to ensure we can update to the later versions.  The primary motivation for updating is mostly just for security fixes and compatibility with other libraries (such as Bootstrap).  

#### images ####
Contain site images such as the banner, or icons.

#### videos ####
Contains site videos, such as the carousel feed videos on the about page.  Most likely the largest directory, do not upload uncompressed video to the repo!  Use handbrake or something similar to reduce the size first, if your video is longer than 2 minutes, sufficiently large, or has sound, it should be a youtube video and be hosted there not directly on the webpage.

#### fonts ####
Contains specialized fonts for the website.


## Technology ##
The site is designed for github static web pages, which means we are restricted to client side technology such as html, css, and javascript.  Currently the site incorporates use of bootstrap 4.3.1 (just the css version) and jquery 3.4.1.  Note also that the site incorporates use of a discord bot (through an iframe), so it can see the announcements channel of the JKG discord.

I may eventually add django on the serverside or php, but we will need a real web server for that and not github pages.  Right now the functionality is not required.  

## Site Organization ##
jkgalaxies.net is the primary site and the only piece available at the moment.  update.jkgalaxies.net is a subdomain used by the launcher to perform updates.  databank.jkgalaxies.net will include a wiki database of game information maybe.

## License ##
Coming soon.

