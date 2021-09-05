# JKGalaxies.net Readme
Jedi Knight Galaxies Website (www.jkgalaxies.net)

This contains public website code.  Private information, such as api security keys etc. should NOT be uploaded to this repository.  If you're looking for the game's repository itself, go here: https://github.com/JKGDevs/JediKnightGalaxies

## Branches and Commits ##
Right now there are two branches: master and gh-pages.  The gh-pages branch is what actually shows up on the real webpage, master is just a copy of the code.  Make small changes directly to master, but if there are any huge significant things you want to try, please make a branch first and then merge it back into master when it's been tested and is ready for review.  When you're ready to make your changes live, merge them into gh-pages and Github will automatically publish them to jkgalaxies.net.  Definetly test your code in at least 3 different browsers and on mobile and desktop before merging to gh-pages.

## File Organization ##
How the site code is organized.  Note that some directories contain multiple instances of the same file (for example scripts contains scripts.js and scripts.max.js), this is because one of them is a stripped down minimized version for optimization and reducing file size loaded by the actual site while the other contains comments and coder-friendly formatting.  In the future it'd be nice to make a script that strips out the extra/readable/.max files from gh-pages branch whenever you merge them into gh-pages.

#### root ####
Contains the main parts of the web page.  
* html files (such as index.html, about.html, etc.)  
* index.html the primary web page, just contains a brief description and announcement feeds, directs to other pages.  
* about.html explains what the mod is and has some media showing the mod off, also links to the faq page.
* faq.html answers common questions about the mod and provides general information and links to resources.
* contributors.html lists all the developers and volunteers that have worked on the mod.  
* download.html contains download links to the test and stable releases for the mod.  
* legal.html a boring page with legal crap required by law.  
* update.index.html will serve as a splash page, if someone tries to go to update.jkgalaxies.net - right now it doesn't really serve a real purpose until someone fixes the launcher.  For now it simply displays the latest version string of the game.
* styles.css (overrides styles for the site, most pages use this, additional css styling pages can also be added to root, however, the primary css file is styles.css and you should try to just update that if possible before adding new style sheets.

#### text ####
Contains easy-to-update .txt files that contain textual blobs that can be/are inserted into the site such as newsFeed.txt this does support html text technically, so you can do formatting if you want.
* activeDevs.txt lists active devs for the contributors page
* communityContributors.txt list community contributors for the contributors page
* directoryText.txt shows how the install directory should look for the download page's install tutorial
* minRequirements.txt shows the minimum requirements to install JKG (for the faq page)
* newsFeed.txt the news feed for the home page (index.html)
* resourceContributors.txt lists attribution credits for resources used for assets for the contributors page
* retiredDevs.txt lists inactive/retired developers for the contributors page
* welcomeText.txt welcome message for the home page (index.html)

#### scripts ####
Contains site javascript files.  
* downloads.js is specialized for download.html and contains logic for autoupdating download page, this is probably the most important script. 
* scripts.js is a common script shared among most web pages.  Keep in mind that any changes used here will globally affect things unless you control it to affect certain pages only.
* jquery 3.6.0 is also contained here (most pages load it from a CDN, but this one is a fallback since jquery is critical to the site's functionality).  Some brief testing on jquery's latest stable release should be done about once every few months, to ensure we can update to the later versions.  The primary motivation for updating is mostly just for security fixes and compatibility with other libraries (such as Bootstrap).
* steam_sale.js an experimental javascript for querying the steam api and checking if Jedi Academy is on sale.

#### images ####
Contain site images such as the banner, or icons.
* screens directory contains screenshots used on the about page.
* media_icons directory contains logos for 3rd party sites such as Github or Youtube where we have a presence.

#### videos ####
Contains site videos, such as the carousel feed videos on the about page.  Most likely the largest directory, do not upload uncompressed video to the repo!  Use [handbrake](https://handbrake.fr/) or something similar to reduce the size first, if your video is longer than 2 minutes, sufficiently large, or has sound, it should be a youtube video and be hosted there, not directly on the webpage.

#### fonts ####
Contains specialized fonts for the website.


## Technology ##
The site is designed for [github static web pages](https://pages.github.com/), which means we are restricted to client side technology such as html, css, and javascript.  Currently the site incorporates use of bootstrap 4.5.2 (just the css version) and jquery 3.6.0.  Note also that the site incorporates use of a discord bot called [Widgetbot](https://widgetbot.io/) (through an iframe), so it can see the announcements channel of the JKG Discord.  

We may eventually add django/php/something else on the serverside, but we will need a real web server for that and not github pages.  I do want to eventually move to a real web server so we can use server-side scripts (eezstreet suggests [Node](https://nodejs.org/en/)) to implement things like Launcher downloads and generating data for a wiki/databank from the game's json files.  Preferrably if someone else, like a sponsor is paying for the webserver (hint hint) and the site can be self sufficient.  Right now the functionality is not required.  

## Site Organization ##
www.jkgalaxies.net is the primary site and the only piece available at the moment.  update.jkgalaxies.net will be a subdomain used by the launcher to perform updates.  databank.jkgalaxies.net will include a wiki database of game information.  At the moment subdomains don't work with github pages, so these won't do anything for now.

## License ##
Coming eventually.

