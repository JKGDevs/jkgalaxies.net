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

//urlrs and hashes - these need to get updated per release by hand, since hashing automatically isn't possible and none of the mirrors have apis we can leverage :(

//mirror urls
const bin_win_url = "https://uvu.box.com/shared/static/gd59kdk6jpc592uccbrje5fmus7c5yq8.zip";
const bin_lin_url = "";
const bin_osx_url = "";

//hash of bin release
const bin_win_hash_release = "12c10fe854f5728de37e5fcbff5d5adf0a1594e974c396c65bcaf0fa2bea567d";
const bin_lin_hash_release = "";
const bin_osx_hash_release = "";
const bin_hash_release_array = [bin_win_hash_release, bin_lin_hash_release, bin_osx_hash_release];

//hash of bin beta
const bin_win_hash_beta = "09514263bc77d7b453677157c30ce2f7ccb23a66a9dde8a963c9e885c4c5b93d";
const bin_lin_hash_beta = "c461c3f750128b53521d4993477699c689e0ea6f44a787a1bbbbbd7888491074";
const bin_osx_hash_beta = "";
const bin_hash_beta_array = [bin_win_hash_beta, bin_lin_hash_beta, bin_osx_hash_beta];

//asset urls and hash
const asset_url_release1 = "https://uvu.box.com/shared/static/z1j68r0v1m15v03ergfidtm3somp5ce2.zip";
const asset_url_release2 = "";
const asset_release_hash = "a007b9dde2bc9d44a1deff52701b7bc8bb592b07d7d40d3936279153af521320"; //sha256 hashes of mostly "fixed" files, fixme: autocalculate :(

//beta asset urls and hash
const asset_url_beta = "https://uvu.box.com/shared/static/v0366gndu6340m28z5p0rvrqkoeh626l.zip";
const asset_beta_hash = "d9f66a135eb8f2bc84e3251a24323f8ccff160c248fcad853ce5e140f6461c1a"

//map pack urls and hashes
const mapPack01_url_jkhub = "https://jkhub.org/files/file/2652-jedi-knight-galaxies-map-bundle-1/";
const mapPack01_url_moddb = "";
const mapPack01_hash = "eccb1b4a060628f6e5990f59aa0d0fbe81d0f41cf7a11850400804e8fabb60cd";

    
window.onload = function()
{
    var github_repo = "JKGDevs/JediKnightGalaxies"; //location of github repo

    DetectClientOS();
    GetLatestReleaseInfo(github_repo, "test"); //test is for pre-release table, stable is for latest stable release
    GetLatestReleaseInfo(github_repo, "stable");
    loadDirectoryText();
    //testVirusTotal();
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

//test if virustotal api can scan releases for viruses/provide sha256
function testVirusTotal()
{
    //trying to do: https://developers.virustotal.com/reference#url-scan
       /*$.ajax({
        url: "https://www.virustotal.com/vtapi/v2/url/report",
        beforeSend: function(xhr) { 
          xhr.setRequestHeader("apikey", "7f08443b45b13d1b7eb6a3aa54a6bd4108dd69a6d26540c15f324abbd0a4a137"); 
        },
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        processData: false,
        data: '{"apikey":"7f08443b45b13d1b7eb6a3aa54a6bd4108dd69a6d26540c15f324abbd0a4a137","url":"https://github.com/JKGDevs/JediKnightGalaxies/releases/download/Version1.3.18/jkgalaxies_v1.3.18_win.zip"}',
        success: function (data) 
        {
          alert(JSON.stringify(data));
        },
        error: function(jqXHR, textStatus, errorThrown) 
        {
            alert(jqXHR.status);
            alert(textStatus);
            alert(errorThrown);
        }
    });*/
}

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
            if(timeAgo == 1)
                timeAgo += " hour ago";
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
    var assetMap01Hash = mapPack01_hash;    //hash of map pack01
    //additional Map Packs go here
    
    
    if (releasetype == "test") 
    {
        assetHash = asset_beta_hash; 
        whichTable = "#tableTestDownload";
        binHashArr = bin_hash_beta_array;
    }

    else if(releasetype == "stable")
    {
        assetHash = asset_release_hash;
        whichTable = "#tablePrimaryDownload";
        binHashArr = bin_hash_release_array;
    }

    //wtf are you doing
    else
    {
        console.log("Invalid release type detected, unable to draw table!")
        return;
    }

    //update binaries on table 
    for (var i = 0, bin_mirror_url = ""; i < 3; i++) 
    {
        var OSName_temp = OSName; //store detected OS
        var binHash = "";
        switch (i) 
        {
            case 0:
                OSName = "Windows";
                bin_mirror_url = bin_win_url;
                binHash = binHashArr[0];
                break;
            case 1:
                OSName = "Linux";
                bin_mirror_url = bin_lin_url;
                binHash = binHashArr[1];
                break;
            case 2:
                OSName = "OSX";
                bin_mirror_url = bin_osx_url;
                binHash = binHashArr[2];
                break;
        }
        build_type = obtainBuildType(OS_builds, version);

        if (build_type >= 0) {
            asset = release.assets[build_type];
            var fileSize = formatBytes(asset.size);

            var cellContent0 = "";
            if (whichTable == "#tablePrimaryDownload")
                cellContent0 = '<td><a href="' + bin_mirror_url + '" >ModDB.org</a></td>';

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
                            .text("Github.com")
                        )
                    )
                    .append(cellContent0)
                );
        }
        OSName = OSName_temp; //restore originally detected OS.
    }

    //assets for table
    var cellContent1 = "";
    if(whichTable == "#tablePrimaryDownload")
        cellContent1 = '<td><a href="' + asset_url_release2 + '" >ModDB.org</a></td>'; 

    $(whichTable + " tbody")
        .append($("<tr>")
            .append($("<td>")
                .text("Assets")
            )
            .append($("<td>")
                .text("All")
            )
            .append($("<td>")
                .text("223.4 MB")
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
                .text("2018-07-07")
            )
            .append($("<td>")
                .append($("<a>")
                    .attr("href", asset_url_release1)
                    .text("Box.com")
                )
            )
            .append(cellContent1)
        );


    //map packs for table
    var cellContent2 = "";
    if(whichTable == "#tablePrimaryDownload")
        cellContent2 = '<td><a href="' + mapPack01_url_moddb + '" >ModDB.org</a></td>'; 

    $(whichTable + " tbody")
        .append($("<tr>")
            .append($("<td>")
                .text("Map Pack #1")
            )
            .append($("<td>")
                .text("All")
            )
            .append($("<td>")
                .text("244 MB")
            )
            .append($("<td>")
                .text("-")
            )
            .append($("<td>")
                .append($("<a>")
                    .attr("href", ("#" + assetMap01Hash))
                    .text("eccb1b4")
                    .attr("title", ("SHA-256: " + assetMap01Hash))
                )
            )
            .append($("<td>")
                .text("2016-11-03")
            )
            .append($("<td>")
                .append($("<a>")
                    .attr("href", mapPack01_url_jkhub)
                    .text("JKHub.org")
                )
            )
            .append(cellContent2)
        );

}