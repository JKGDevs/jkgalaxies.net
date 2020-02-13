//downloads.js
//Futuza
/*
    Script for getting github release info automatically (mostly)
    based on https://getsharex.com/downloads/
*/

/*
Global Vars Links
Edit when assets are updated.
*/
var OSName = "Unknown";

//urlrs and hashes - these need to get updated per release by hand, since hashing automatically isn't possible and none of the mirrors ('cept Github) have apis we can leverage :(

//mirror urls for bin release 

//names
const mirror0 = "Github.com";
const mirror1 = "Box.com";
const mirror2 = "ModDB.com";
const mirror3 = "JK2T.ddns.net";
const mirror4 = "JKHub.org";

//hash of bin release
const bin_win_hash_release = "12C10FE854F5728DE37E5FCBFF5D5ADF0A1594E974C396C65BCAF0FA2BEA567D"; //sha256 hashes of mostly "fixed" files, fixme: autocalculate :(
const bin_lin_hash_release = "C461C3F750128B53521D4993477699C689E0EA6F44A787A1BBBBBD7888491074";
const bin_osx_hash_release = "54641EA28CFBE9B0AD5A9DA3D8C695587B520A4224597043A7CDE13E4CA35847";
const bin_hash_release_array = [bin_win_hash_release, bin_lin_hash_release, bin_osx_hash_release];

//hash of bin beta
const bin_win_hash_beta = "38A4F971DAF764318CE48F23F9244BF9F68B468225458275BC57CE74DFB7BCA5";
const bin_lin_hash_beta = "1EDE0D6239A21CABAE89EA473636FE65B776969110D4969B7E9F55C9DC272467";
const bin_osx_hash_beta = "C4F0DC7A5D58011FA48549A44B698C38DC978A87E8AAD4776A4754E6D6EAE28E";
const bin_hash_beta_array = [bin_win_hash_beta, bin_lin_hash_beta, bin_osx_hash_beta];

//binary urls
const bin_win_url1 = "https://uvu.box.com/shared/static/gd59kdk6jpc592uccbrje5fmus7c5yq8.zip";
const bin_lin_url1 = ""; //for box
const bin_osx_url1 =  ""; //for box
const bin_win_url2 = ""; //for moddb
const bin_lin_url2 = ""; //for moddb
const bin_osx_url2 = ""; //for moddb
const bin_win_url3 = "https://jk2t.ddns.net/Windows/jkgalaxies_winx86.zip";  //note we start on "2", because 1 is the main source generated automatically
const bin_lin_url3 = "https://jk2t.ddns.net/Linux/jkgalaxies_linuxx64.zip";
const bin_osx_url3 = "https://jk2t.ddns.net/macOS/jkgalaxies_macosxx86_64.zip";

//asset urls and hash
const asset_url_release1 = "https://uvu.box.com/shared/static/z1j68r0v1m15v03ergfidtm3somp5ce2.zip";
const asset_url_release2 = ""; //for moddb
const asset_url_release3 = "https://jk2t.ddns.net/jkgfiles/z1j68r0v1m15v03ergfidtm3somp5ce2.zip";
const asset_release_hash = "A007B9DDE2BC9D44A1DEFF52701B7BC8BB592B07D7D40D3936279153AF521320";
const asset_size_release = "223.4 MB";
const asset_date_release = "2018-07-07";

//beta asset urls and hash
const asset_url_beta = "https://uvu.box.com/shared/static/lztt5mayu4daj9szvg8v0rtds6vwmnmq.zip";
const asset_beta_hash = "95124AA88281D79A1B08C205200074ED2E233901F80FDAD3BEFAF324F1C61D88";
const asset_size_beta = "240.8 MB";
const asset_date_beta = "2020-02-08";

//map pack urls and hashes
const mapPack01_url_jkhub = "https://jkhub.org/files/file/2652-jedi-knight-galaxies-map-bundle-1/";
const mapPack01_url_ddns = "https://jk2t.ddns.net/jkgfiles/jkgalaxies-maps-v1.2.zip";
const mapPack01_url_box = "https://uvu.box.com/shared/static/iw9gkh7p80wt0y28h1sd46lvk54v8bdv.zip";
const mapPack01_url_moddb = "";

const mapPack01_hash = "ECCB1B4A060628F6E5990F59AA0D0FBE81D0F41CF7A11850400804E8FABB60CD";
const mapPack_size = "244 MB";

    
window.onload = function()
{
    var github_repo = "JKGDevs/JediKnightGalaxies"; //location of github repo

    DetectClientOS();
    GetLatestReleaseInfo(github_repo, "test"); //test is for pre-release table, stable is for latest stable release
    GetLatestReleaseInfo(github_repo, "stable");
    loadDirectoryText();
    //testVirusTotal("https://github.com/JKGDevs/JediKnightGalaxies/releases/download/Version1.3.20/jkgalaxies_v1.3.20_win.zip");
    resizeMarginsVertMode();
}

//ensures that margins will be as wide as possible, if in vertical viewing mode
function resizeMarginsVertMode()
{
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

function revealInstructionsSpoiler()
{
    if(document.getElementById('instructionBody') .style.display=='none')
    {
        document.getElementById('instructionBody') .style.display='';
    }

    else
    {
        document.getElementById('instructionBody') .style.display='none';
    }
}

//test virustotal api
/*function testVirusTotal(urlToScan)
{
    //trying to do: https://developers.virustotal.com/reference#url-report
    var guestAPIKey = "e2513a75f92a4169e8a47b4ab1df757f83ae45008b4a8a49903450c8402add4d";  //this is a public key
    var url = "https://www.virustotal.com/vtapi/v2/url/report";

    url = url+"?"+"apikey="+guestAPIKey+"&"+"resource="+urlToScan+"&"+"allinfo=0"+"&"+"scan=1"; //add the url together

    $.get( url, function( data ) {
        alert( "Data Loaded: " + data );
      });

    alert(url);

    //will have to process json stuff eventually if this works
    $.getJSON( url, function( data ) {
        var items = [];
        $.each( data, function( key, val ) {
          items.push( "<li id='" + key + "'>" + val + "</li>" );
        });
       
        
    });
}*/

function loadDirectoryText()
{
    $("#directoryText").load("text/directoryText.txt");
}

//based on: https://stackoverflow.com/questions/15900485/correct-way-to-convert-size-in-bytes-to-kb-mb-gb-in-javascript
function formatBytes(bytes, decimals = 2) 
{
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

/* Detect User's OS and adjust page appropriately*/
function DetectClientOS()
{
    /*setup up asset link, may be changed by specific OS below*/
    document.getElementById("downloadAssetBtn").href=asset_url_release1;
    document.getElementById("downloadAssetBtnSm").href=asset_url_release1;
    document.getElementById("downloadAssetBtnTestSm").href=asset_url_beta; 

    document.getElementById("downloadType").innerHTML += "<br>";
    if (window.navigator.userAgent.indexOf("Windows NT 10.0")!= -1) OSName="Windows";
    if (window.navigator.userAgent.indexOf("Windows NT 6.2") != -1) OSName="Windows";
    if (window.navigator.userAgent.indexOf("Windows NT 6.1") != -1) OSName="Windows";
    if (window.navigator.userAgent.indexOf("Windows NT 6.0") != -1) OSName="Windows";
    if (window.navigator.userAgent.indexOf("Windows NT 5.1") != -1) OSName="WindowsXP";
    if (window.navigator.userAgent.indexOf("Mac")            != -1) OSName="OSX";
    if (window.navigator.userAgent.indexOf("Linux")          != -1) OSName="Linux";

    if(OSName == "Windows")
    {
        document.getElementById("downloadType").innerHTML += " Windows";
    }
    else if(OSName == "WindowsXP")
    {
        document.getElementById("downloadType").innerHTML += " Windows XP";
        alert("Warning, Windows XP is depreciated and unsupported.")
    }
    else if(OSName == "OSX")
    {
        document.getElementById("downloadType").innerHTML += " OSX";
    }
    else if(OSName == "Linux")
    {
        document.getElementById("downloadType").innerHTML += " Linux";
    }
    else
        document.getElementById("downloadType").innerHTML = "Download";

    console.log(OSName + " detected.")
    document.getElementById("downloadType").innerHTML += " Client";
}

function obtainBuildType(OS_builds, version)
{
    var jkgtag = "jkgalaxies_"; //what the build download name starts with

        //determine which index is this?
        if(OSName == "Windows")
        {
            build_type = OS_builds.indexOf(jkgtag+version+"_win.zip"); //format: jkgalaxies_vx.x.x_os.zip
        }
        else if(OSName == "WindowsXP")
        {
            build_type = OS_builds.indexOf(jkgtag+version+"_winXP.zip");
        }
        else if(OSName == "Linux")
        {
            build_type = OS_builds.indexOf(jkgtag+version+"_linux.zip");
        }
        else if(OSName == "OSX")
        {
            build_type = OS_builds.indexOf(jkgtag+version+"_osx.zip");
        }
        else
            build_type = -1;

    return build_type;
    // -1 == not found, 0>= specific OS found
}


/* Update links with Latest (stable) Github Release binaries*/
function GetLatestReleaseInfo(repo, releasetype) 
{
    if(releasetype == "test" || releasetype == "beta")
    {
        repo = "https://api.github.com/repos/" + repo + "/releases";
        releasetype = "test"; //don't deal with beta, its the same as test
    }
    else if(releasetype == "stable" || releasetype == "final")
    {
        repo = "https://api.github.com/repos/" + repo + "/releases/latest";
        releasetype = "stable";
    }
    else
    {
        console.log("Invalid release info request: type == " + releasetype.toLocaleString());
        return;
    }

    $.getJSON(repo).done(function(json) 
    {
        var release = json; //set release equal to json
        if(releasetype == "test")
        {
            var totalDownloadCount = 0;
            var release = json[0];  //includes pre-releases, we only care about json[0] the most recent
        }

        var OS_builds =[]; //list of asset builds
        var build_type = 0; //determines index for OS_Builds
        var downloadCount = 0; //how many total downloads
        var version = release.tag_name; //which version the tag is
        version = version.replace("Version", "v");
        var asset = ""; //holds object data for a specific instance of a release.asset[]

        /*count downloads and create OS_builds list*/
        for (var i = 0; i < release.assets.length; i++) 
        {
            downloadCount += release.assets[i].download_count;
            OS_builds.push(release.assets[i].name);
        }

        //determine which index is this?
        build_type = obtainBuildType(OS_builds, version);
        
        
        if(build_type < 0)  //if not found
        {
            //revert to default of jumping to table
            if(releasetype == "test")
            {
                document.getElementById("downloadBinBtn").href = "#tableTestDownload";
            }
            if(releasetype == "stable")
            {
                document.getElementById("downloadBinBtn").href = "#tablePrimaryDownload";
            }
            
            asset = release.assets[0]; //default
        }

        else
        {
            asset = release.assets[build_type];

            if(releasetype == "test")
            {
                document.getElementById("downloadBinBtnTestSm").href=asset.browser_download_url;
            }
            if(releasetype == "stable")
            {
                document.getElementById("downloadBinBtn").href=asset.browser_download_url;
                document.getElementById("downloadBinBtnSm").href=asset.browser_download_url;
            }
            
        }

        /*time stuff*/
        var oneHour = 60 * 60 * 1000;
        var oneDay = 24 * oneHour;
        var oneYear = 365 * oneDay;
        var dateDiff = new Date() - new Date(asset.updated_at);
        var timeAgo;
        if (dateDiff < oneDay) 
        {
            timeAgo = (dateDiff / oneHour).toFixed(1);
            if(timeAgo <= 1)
            {
                timeAgo = " within the hour";
            }
            else
                timeAgo += " hours ago";
        } 
        else if (dateDiff < oneYear)
        {
            timeAgo = (dateDiff / oneDay).toFixed(0);
            if(timeAgo == 1)
                timeAgo += " day ago";
            else
                timeAgo += " days ago";
        }
        else
        {
            timeAgo = (dateDiff / oneYear).toFixed(1);
            if(timeAgo == 1)
                timeAgo += " year ago";
            else
                timeAgo += " years ago";
        }

        
        var releaseInfo = version + " last updated " + timeAgo +".";
        if(downloadCount > 0)
        {
            if(releasetype == "test")
            {
                document.getElementById("test-download-count").innerHTML += downloadCount.toLocaleString();
            }
            if(releasetype == "stable")
            {
                document.getElementById("download-count").innerHTML += downloadCount.toLocaleString();
            }
            
        }

        //draw last update info.
        if(releasetype == "stable")
        {
            $(".release-info").text(releaseInfo);
            $(".patchnotes").attr("href", release.html_url);

            drawTable(version, release, asset, OS_builds, releasetype);
        }

        if(releasetype == "test")
        {
            $(".test-release-info").text(releaseInfo);
            $(".test-patchnotes").attr("href", release.html_url);
            
            drawTable(version, release, asset, OS_builds, releasetype);
   
        }
    });
}

/* draws tables on download page, filling them dynamically (somewhat) with content*/
function drawTable(version, release, asset, OS_builds, releasetype)
{
    //sha256 hashes of mostly "fixed" files, fixme: autocalculate these somehow
    
    var assetHash = "";     //hash of assets, there are two types of assets (beta or release)
    var binHashArr = [];       //hash of binaries, there are two main types (beta or release) and 3 sub types (win, osx, linux)
    var whichTable = "";    //which table flag (doubles as as fillable html)  
    var asset_size = "0 MB";                //size of the asset download
    var asset_url = "";                     //url to the asset mirror
    var asset_date = "0000-00-00";          //date the asset was updated
    var assetMap01Hash = mapPack01_hash;    //hash of map pack01
    //additional Map Packs go here
    
    
    if (releasetype == "test") 
    {
        assetHash = asset_beta_hash; 
        whichTable = "#tableTestDownload";
        binHashArr = bin_hash_beta_array;
        asset_size = asset_size_beta;
        asset_url = asset_url_beta;
        asset_date = asset_date_beta;
    }

    else if(releasetype == "stable")
    {
        assetHash = asset_release_hash;
        whichTable = "#tablePrimaryDownload";
        binHashArr = bin_hash_release_array;
        asset_size = asset_size_release;
        asset_url = asset_url_release1;
        asset_date = asset_date_release;
    } 

    //wtf are you doing
    else
    {
        console.log("Invalid release type detected, unable to draw table!")
        return;
    }

    //update binaries on table 
    for (var i = 0, bin_mirror_url2 = "", bin_mirror_url3 = ""; i < 3; i++) 
    {
        var OSName_temp = OSName; //store detected OS
        var binHash = "";
        switch (i) 
        {
            case 0:
                OSName = "Windows";
                bin_mirror_url2 = bin_win_url1;
                bin_mirror_url3 = bin_win_url3;
                binHash = binHashArr[0];
                break;
            case 1:
                OSName = "Linux";
                bin_mirror_url2 = bin_lin_url1;
                bin_mirror_url3 = bin_lin_url3;
                binHash = binHashArr[1];
                break;
            case 2:
                OSName = "OSX";
                bin_mirror_url2 = bin_osx_url1;
                bin_mirror_url3 = bin_osx_url3;
                binHash = binHashArr[2];
                break;
        }
        build_type = obtainBuildType(OS_builds, version);
        assetHash = assetHash.toLowerCase();
        assetMap01Hash = assetMap01Hash.toLowerCase();   
        binHash = binHash.toLowerCase();

        if (build_type >= 0) {
            asset = release.assets[build_type];
            var fileSize = formatBytes(asset.size);

            var cellContent0_1 = "";
            var cellContent0_2 = "";
            if (whichTable == "#tablePrimaryDownload")
            {
                cellContent0_1 = '<td><a href="' + bin_mirror_url2 + '" >' + mirror1 + '</a></td>';
                cellContent0_2 = '<td><a href="' + bin_mirror_url3 + '" >' + mirror3 + '</a></td>';
            }

            $(whichTable + " tbody")
                .append($("<tr>")
                    .append($("<td>")
                        .text("Binaries")
                    )
                    .append($("<td>")
                        .text(OSName)
                    )
                    .append($("<td>")
                        .text(fileSize)
                    )
                    .append($("<td>")
                        .text(asset.download_count)
                    )
                    .append($("<td>")
                        .append($("<a>")
                            .attr("href", ("#" + binHash))
                            .text(binHash.substring(0, 7))
                            .attr("title", ("SHA-256: " + binHash))
                        )
                    )
                    .append($("<td>")
                        .text(asset.updated_at.substring(0, 10))
                    )
                    .append($("<td>")
                        .append($("<a>")
                            .attr("href", asset.browser_download_url)
                            .text(mirror0)
                        )
                    )
                    .append(cellContent0_1)
                    .append(cellContent0_2)
                );
        }
        OSName = OSName_temp; //restore originally detected OS.
    }

    //assets for table
    var cellContent1_0 = '<td><a href="' + asset_url + '" >' + mirror1 +'</a></td>'; 
    if(whichTable == "#tablePrimaryDownload")
    {
        var cellContent1_1 = '<td><a href="' + asset_url_release1 + '" >' + mirror1 +'</a></td>'; 
        var cellContent1_2 = '<td><a href="' + asset_url_release3 + '" >' + mirror3 +'</a></td>'; 
    }

    $(whichTable + " tbody")
        .append($("<tr>")
            .append($("<td>")
                .text("Assets")
            )
            .append($("<td>")
                .text("All")
            )
            .append($("<td>")
                .text(asset_size)
            )
            .append($("<td>")
                .text("-")
            )
            .append($("<td>")
                .append($("<a>")
                    .attr("href", ("#" + assetHash))
                    .text(assetHash.substring(0, 7))
                    .attr("title", ("SHA-256: " + assetHash))
                )
            )
            .append($("<td>")
                .text(asset_date)
            )
            .append(cellContent1_0)
            .append(cellContent1_1)
            .append(cellContent1_2)
        );


    //map packs for table
    var cellContent2_0 = '<td><a href="' + mapPack01_url_jkhub + '" >' + mirror4 +'</a></td>';
    if(whichTable == "#tablePrimaryDownload")
    {
        var cellContent2_1 = '<td><a href="' + mapPack01_url_box + '" >' + mirror1 +'</a></td>';
        var cellContent2_2 = '<td><a href="' + mapPack01_url_ddns + '" >' + mirror3 +'</a></td>'; 
    }
        
    $(whichTable + " tbody")
        .append($("<tr>")
            .append($("<td>")
                .text("Map Pack #1")
            )
            .append($("<td>")
                .text("All")
            )
            .append($("<td>")
                .text(mapPack_size)
            )
            .append($("<td>")
                .text("-")
            )
            .append($("<td>")
                .append($("<a>")
                    .attr("href", ("#" + assetMap01Hash))
                    .text(assetMap01Hash.substring(0, 7))
                    .attr("title", ("SHA-256: " + assetMap01Hash))
                )
            )
            .append($("<td>")
                .text("2016-11-03")
            )
            .append(cellContent2_0)
            .append(cellContent2_1)
            .append(cellContent2_2)
        );

}
