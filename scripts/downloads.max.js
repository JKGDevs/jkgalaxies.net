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
var stableVersion = "v0.0.0";   //version string of release/stable

//urlrs and hashes - these need to get updated per release by hand, since hashing automatically isn't possible (while hosted through Github pages) and none of the mirrors ('cept Github) have apis we can leverage :(

//mirror urls for bin release 

//names
const mirror0 = "Github.com";
const mirror1 = "Icedrive.net";
const mirror2 = "ModDB.com";
const mirror3 = "JK2T.ddns.net";
const mirror4 = "JKHub.org";

//hash of bin release/stable
const bin_win_hash_release = "F7E9D2D8E79B65D740171E15CAF07F932875FEE6AC91ABDD4E780454A5447525"; //sha256 hashes zip files, fixme: autocalculate :(
const bin_lin_hash_release = "D74266B63C53A185AE097CA9D5CB73F61BAC050761EF681FE66EE43433C287CB";
const bin_mac_hash_release = "";
const bin_hash_release_array = [bin_win_hash_release, bin_lin_hash_release, bin_mac_hash_release];

//hash of bin beta/test
const bin_win_hash_beta = "F7E9D2D8E79B65D740171E15CAF07F932875FEE6AC91ABDD4E780454A5447525";
const bin_lin_hash_beta = "D74266B63C53A185AE097CA9D5CB73F61BAC050761EF681FE66EE43433C287CB";
const bin_mac_hash_beta = "";
const bin_hash_beta_array = [bin_win_hash_beta, bin_lin_hash_beta, bin_mac_hash_beta];

//binary urls release/stable
const bin_win_url1 = "https://icedrive.net/s/u1V6WFb4RtN6QgYVXX21b4PaS9SA"; //for icedrive
const bin_lin_url1 = "https://icedrive.net/s/hwVF1RaNNP9k6Wk63fYVPFvbFZAN"; //for icedrive
const bin_mac_url1 = ""; //for icedrive
const bin_win_url2 = "https://www.moddb.com/mods/jkgalaxies/downloads/jkgalaxies-v1-3-23-win"; //for moddb
const bin_lin_url2 = "https://www.moddb.com/mods/jkgalaxies/downloads/jkgalaxies-v1-3-23-linux"; //for moddb
const bin_mac_url2 = ""; //for moddb
const bin_win_url3 = "https://jk2t.ddns.net/jkgalaxies/jkgalaxies_v1.3.23_win.zip";  //for jk2t
const bin_lin_url3 = "https://jk2t.ddns.net/jkgalaxies/jkgalaxies_v1.3.23_linux.zip";  //for jk2t
const bin_mac_url3 = "";    //for jk2t

//binary urls beta/test
const bin_win_beta_url3 = "https://icedrive.net/s/u1V6WFb4RtN6QgYVXX21b4PaS9SA";  //icedrive is probably the only mirror we'll have for test releases, add em here
const bin_lin_beta_url3 = "https://icedrive.net/s/hwVF1RaNNP9k6Wk63fYVPFvbFZAN";
const bin_mac_beta_url3 = "";

//release/stable asset urls and hash
const asset_url_release1 = "https://icedrive.net/s/CfgDhyf1BSwNbQ9bWgQWu7y22CvQ";  //for icedrive
const asset_url_release2 = "https://www.moddb.com/mods/jkgalaxies/downloads/jedi-knight-galaxies-v1-3-23-assets"; //for moddb
const asset_url_release3 = "https://jk2t.ddns.net/jkgalaxies/geejtm8xcovvcyt9jra4e6f585beatx1.zip";
const asset_url_release4 = "https://jkhub.org/files/file/3116-jedi-knight-galaxies/";     //for jkhub, note: download contains both assets and binaries
const asset_release_hash = "B0449F1068EB67832AE6D4073A40979D28137CBB79CD423881C0FFA1FCDC3C50";
const asset_size_release = "257 MB";
const asset_date_release = "2022-08-25";

//beta/test asset urls and hash
const asset_url_beta1 = "https://jkhub.org/files/file/3126-jedi-knight-galaxies-assets-beta/";      //for jkhub (currently disabled)
const asset_url_beta2 = "https://icedrive.net/s/CfgDhyf1BSwNbQ9bWgQWu7y22CvQ";   //for icedrive
const asset_beta_hash = "B0449F1068EB67832AE6D4073A40979D28137CBB79CD423881C0FFA1FCDC3C50";
const asset_size_beta = "257 MB";
const asset_date_beta = "2022-08-25";

//map pack urls and hashes
const mapPack01_url_jkhub = "https://jkhub.org/files/file/2652-jedi-knight-galaxies-map-bundle-1/";
const mapPack01_url_ddns = "https://jk2t.ddns.net/jkgalaxies/2wm4soep000wcffah9rra7xpsqfwzit7.zip";
const mapPack01_url_icedrive = "https://icedrive.net/s/Dt5tGzx9ihNhzZjxGky9g9w3SPQ5";
//const mapPack01_url_box = "https://uvu.box.com/shared/static/2wm4soep000wcffah9rra7xpsqfwzit7.zip"; //Box no longer in use
const mapPack01_url_moddb = "https://www.moddb.com/mods/jkgalaxies/addons/jkgalaxies-maps1-v1-03";
const mapPack01_hash = "1FAAD62441894D7A1284F75DC9B62EEDEBC1A0ABAC03DE913B32D0BF954CC61A";
const mapPack01_size = "243 MB";

const mapPack02_url_jkhub = "https://jkhub.org/files/file/3778-jedi-knight-galaxies-map-bundle-2/";
const mapPack02_url_ddns = "https://jk2t.ddns.net/jkgalaxies/beqd7odfuqj2yzh72i55tw6ls2110x3w.zip";
const mapPack02_url_icedrive = "https://icedrive.net/s/Wk6kP2i436CAg7jStzSghQNhj1u7";
//const mapPack02_url_box = "https://uvu.box.com/shared/static/beqd7odfuqj2yzh72i55tw6ls2110x3w.zip"; //Box no longer in use
const mapPack02_url_moddb = "https://www.moddb.com/mods/jkgalaxies/addons/jkgalaxies-maps2-v1-03";
const mapPack02_hash = "1AA44880D607A2E331BE5F41D8EF1657D3E3F60AC15DF9B1DF46CB7150859DC7";
const mapPack02_size = "113 MB";

    
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
    document.getElementById("downloadAssetBtnTestSm").href=asset_url_beta2; //note: use box.com for this specifically cause it looks nicer

    document.getElementById("downloadType").innerHTML += "<br>";
    if (window.navigator.userAgent.indexOf("Windows NT 11.0")!= -1) OSName="Windows";   //note win11, still uses NT 10.0, but this might change in the future one day...maybe
    if (window.navigator.userAgent.indexOf("Windows NT 10.0")!= -1) OSName="Windows";
    if (window.navigator.userAgent.indexOf("Windows NT 6.2") != -1) OSName="Windows";
    if (window.navigator.userAgent.indexOf("Windows NT 6.1") != -1) OSName="Windows";
    if (window.navigator.userAgent.indexOf("Windows NT 6.0") != -1) OSName="Windows";
    if (window.navigator.userAgent.indexOf("Windows NT 5.1") != -1) OSName="WindowsXP";
    if (window.navigator.userAgent.indexOf("MacIntel")       != -1) OSName="Mac";
    if (window.navigator.userAgent.indexOf("Mac")            != -1) OSName="Mac";
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
    else if(OSName == "Mac")
    {
        document.getElementById("downloadType").innerHTML += " Mac";
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
        else if(OSName == "Mac")
        {
            build_type = OS_builds.indexOf(jkgtag+version+"_mac.zip");
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
            stableVersion = version; //update stableVersion
            $(".release-info").text(releaseInfo);
            $(".patchnotes").attr("href", release.html_url);

            drawTable(version, release, asset, OS_builds, releasetype);
        }

        if(releasetype == "test")
        {
            //if test/beta is same as stable, don't show it
            if(version == stableVersion)
            {
                $("#testdiv").hide(); 
            }
            else
            {
                $(".test-release-info").text(releaseInfo);
                $(".test-patchnotes").attr("href", release.html_url);
                drawTable(version, release, asset, OS_builds, releasetype);
            }
   
        }
    });
}

/* draws tables on download page, filling them dynamically (somewhat) with content*/
function drawTable(version, release, asset, OS_builds, releasetype)
{
    //sha256 hashes of mostly "fixed" files, fixme: autocalculate these somehow
    
    var assetHash = "";     //hash of assets, there are two types of assets (beta or release)
    var binHashArr = [];       //hash of binaries, there are two main types (beta or release) and 3 sub types (win, mac, linux)
    var whichTable = "";    //which table flag (doubles as as fillable html)  
    var asset_size = "0 MB";                //size of the asset download
    var asset_url = "";                     //url to the asset mirror
    var asset_date = "0000-00-00";          //date the asset was updated
    var assetMap01Hash = mapPack01_hash;    //hash of map pack01
    var assetMap02Hash = mapPack02_hash;    //hash of map pack02
    //additional Map Packs go here
    
    
    if (releasetype == "test") 
    {
        assetHash = asset_beta_hash; 
        whichTable = "#tableTestDownload";
        binHashArr = bin_hash_beta_array;
        asset_size = asset_size_beta;
        asset_url = asset_url_beta1;
        asset_date = asset_date_beta;
    }

    else if(releasetype == "stable")
    {
        assetHash = asset_release_hash;
        whichTable = "#tablePrimaryDownload";
        binHashArr = bin_hash_release_array;
        asset_size = asset_size_release;
        asset_url = asset_url_release4;
        asset_date = asset_date_release;
    } 

    //wtf are you doing
    else
    {
        console.log("Invalid release type detected, unable to draw table!")
        return;
    }

    //update binaries on table 
    for (var i = 0, bin_mirror_url1 = "", bin_mirror_url2 = "", bin_mirror_url3 = "", bin_test_mirror_url = ""; i < 3; i++) 
    {
        var OSName_temp = OSName; //store detected OS
        var binHash = "";
        switch (i) 
        {
            case 0:
                OSName = "Windows";
                bin_mirror_url1 = bin_win_url1;
                bin_mirror_url2 = bin_win_url2;
                bin_mirror_url3 = bin_win_url3;
                bin_test_mirror_url = bin_win_beta_url3;
                binHash = binHashArr[0];
                break;
            case 1:
                OSName = "Linux";
                bin_mirror_url1 = bin_lin_url1;
                bin_mirror_url2 = bin_lin_url2;
                bin_mirror_url3 = bin_lin_url3;
                bin_test_mirror_url = bin_lin_beta_url3;
                binHash = binHashArr[1];
                break;
            case 2:
                OSName = "Mac";
                bin_mirror_url1 = bin_mac_url1;
                bin_mirror_url2 = bin_mac_url2;
                bin_mirror_url3 = bin_mac_url3;
                bin_test_mirror_url = bin_mac_beta_url3;
                binHash = binHashArr[2];
                break;
        }
        build_type = obtainBuildType(OS_builds, version);
        assetHash = assetHash.toLowerCase();
        assetMap01Hash = assetMap01Hash.toLowerCase();
        assetMap02Hash = assetMap02Hash.toLowerCase();
        binHash = binHash.toLowerCase();

        if (build_type >= 0) {
            asset = release.assets[build_type];
            var fileSize = formatBytes(asset.size);

            var cellContent0_1 = "";
            var cellContent0_2 = "";
            if (whichTable == "#tablePrimaryDownload")
            {
                cellContent0_1 = '<td><a href="' + bin_mirror_url1 + '" >' + mirror1 + '</a></td>';
                cellContent0_2 = '<td><a href="' + bin_mirror_url2 + '" >' + mirror2 + '</a></td>';
                cellContent0_3 = '<td><a href="' + bin_mirror_url3 + '" >' + mirror3 + '</a></td>';
            }

            if(whichTable == '#tableTestDownload')
            {
                cellContent0_1 = '<td><a href="' + bin_test_mirror_url + '" >' + mirror1 + '</a></td>';
                cellContent0_3 = '';
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
                    .append(cellContent0_3)
                );
        }
        OSName = OSName_temp; //restore originally detected OS.
    }

    //assets for table
    var cellContent1_0 = '<td><a href="' + asset_url + '" >' + mirror4 +'</a></td>'; 
    if(whichTable == "#tablePrimaryDownload")
    {
        var cellContent1_1 = '<td><a href="' + asset_url_release1 + '" >' + mirror1 +'</a></td>';
        var cellContent1_2 = '<td><a href="' + asset_url_release2 + '" >' + mirror2 +'</a></td>';
        var cellContent1_3 = '<td><a href="' + asset_url_release3 + '" >' + mirror3 +'</a></td>'; 
    }

    if(whichTable == '#tableTestDownload')
    {
        var cellContent1_1 = '<td><a href="' + asset_url_beta2 + '" >' + mirror1 +'</a></td>'; 
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
            .append(cellContent1_3)
        );


    //map packs for table
    var cellContent2_0 = '<td><a href="' + mapPack01_url_jkhub + '" >' + mirror4 +'</a></td>';
    var cellContent3_0 = '<td><a href="' + mapPack02_url_jkhub + '" >' + mirror4 +'</a></td>';
    if(whichTable == "#tablePrimaryDownload")
    {
        var cellContent2_1 = '<td><a href="' + mapPack01_url_icedrive + '" >' + mirror1 +'</a></td>';
        var cellContent2_2 = '<td><a href="' + mapPack01_url_moddb + '" >' + mirror2 +'</a></td>'; 
        var cellContent2_3 = '<td><a href="' + mapPack01_url_ddns + '" >' + mirror3 +'</a></td>'; 
        var cellContent3_1 = '<td><a href="' + mapPack02_url_icedrive + '" >' + mirror1 +'</a></td>';
        var cellContent3_2 = '<td><a href="' + mapPack02_url_moddb + '" >' + mirror2 +'</a></td>'; 
        var cellContent3_3 = '<td><a href="' + mapPack02_url_ddns + '" >' + mirror3 +'</a></td>';
    }

    if(whichTable == "#tableTestDownload")
    {
        var cellContent2_1 = '<td><a href="' + mapPack01_url_icedrive + '" >' + mirror1 +'</a></td>';
        var cellContent3_1 = '<td><a href="' + mapPack02_url_icedrive + '" >' + mirror1 +'</a></td>'; 
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
                .text(mapPack01_size)
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
                .text("2022-08-25")
            )
            .append(cellContent2_0)
            .append(cellContent2_1)
            .append(cellContent2_2)
            .append(cellContent2_3)
        )
        .append($("<tr>")
            .append($("<td>")
                .text("Map Pack #2")
            )
            .append($("<td>")
            .text("All")
            )
            .append($("<td>")
                .text(mapPack02_size)
            )
            .append($("<td>")
                .text("-")
            )
            .append($("<td>")
                .append($("<a>")
                    .attr("href", ("#" + assetMap02Hash))
                    .text(assetMap02Hash.substring(0, 7))
                    .attr("title", ("SHA-256: " + assetMap02Hash))
                )
            )
            .append($("<td>")
                .text("2022-08-25")
            )
            .append(cellContent3_0)
            .append(cellContent3_1)
            .append(cellContent3_2)
            .append(cellContent3_3) 
        );

}