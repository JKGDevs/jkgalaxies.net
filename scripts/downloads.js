var OSName="Unknown";const mirror0="Github.com",mirror1="Box.com",mirror2="ModDB.com",mirror3="JK2T.ddns.net",mirror4="JKHub.org",bin_win_hash_release="C2A812AA0D80293F95FED73A24069D910C87B5E703615FDDE836F3A120450DA5",bin_lin_hash_release="0FE4DAD5159808236180669C4BBA54A0B680A7EE4C76D5D2F6D79C307BE49ED7",bin_osx_hash_release="42B533831AE0A4B2323B5BF840F51C9A2464ACB2F076328FB0C4ADD10C7651DF",bin_hash_release_array=[bin_win_hash_release,bin_lin_hash_release,bin_osx_hash_release],bin_win_hash_beta="F7E9D2D8E79B65D740171E15CAF07F932875FEE6AC91ABDD4E780454A5447525",bin_lin_hash_beta="D74266B63C53A185AE097CA9D5CB73F61BAC050761EF681FE66EE43433C287CB",bin_osx_hash_beta="",bin_hash_beta_array=[bin_win_hash_beta,bin_lin_hash_beta,""],bin_win_url1="https://uvu.box.com/shared/static/qzj1ewi28g2k8glv4arparbxp36gwzjq.zip",bin_lin_url1="https://uvu.box.com/shared/static/dds514xxoh9xgg8tsuutugd16ve53837.zip",bin_osx_url1="https://uvu.box.com/shared/static/6s9azfhatnyxhm1wlni7t5r4ygpzx47j.zip",bin_win_url2="https://www.moddb.com/mods/jkgalaxies/downloads/jkgalaxies-v1322a-win",bin_lin_url2="https://www.moddb.com/mods/jkgalaxies/downloads/jkgalaxies-v1-3-22a-linux",bin_osx_url2="https://www.moddb.com/mods/jkgalaxies/downloads/jkgalaxies-v1-3-22a-osx",bin_win_url3="https://jk2t.ddns.net/Windows/jkgalaxies_v1.3.22a_win.zip",bin_lin_url3="https://jk2t.ddns.net/Linux/jkgalaxies_v1.3.22a_linux.zip",bin_osx_url3="https://jk2t.ddns.net/macOS/jkgalaxies_v1.3.22a_osx.zip",bin_win_beta_url3="https://uvu.box.com/shared/static/l3eo6vduufz26kwiioumeem8xup16a3i.zip",bin_lin_beta_url3="https://uvu.box.com/shared/static/hjbaon0bfi15xu3beyscq37cmywpe7t6.zip",bin_osx_beta_url3="",asset_url_release1="https://uvu.box.com/shared/static/ctdly3jwnhjcji560sx1czfdgnahbtzi.zip",asset_url_release2="https://www.moddb.com/mods/jkgalaxies/downloads/jedi-knight-galaxies-v1322-assets",asset_url_release3="https://jk2t.ddns.net/jkgfiles/ctdly3jwnhjcji560sx1czfdgnahbtzi.zip",asset_release_hash="B6792B130E52313BFCE44963D3000411261570B9B20647217211C80B9679911B",asset_size_release="243 MB",asset_date_release="2020-07-01",asset_url_beta1="https://uvu.box.com/shared/static/geejtm8xcovvcyt9jra4e6f585beatx1.zip",asset_url_beta2="",asset_beta_hash="B0449F1068EB67832AE6D4073A40979D28137CBB79CD423881C0FFA1FCDC3C50",asset_size_beta="257 MB",asset_date_beta="2022-08-25",mapPack01_url_jkhub="https://jkhub.org/files/file/2652-jedi-knight-galaxies-map-bundle-1/",mapPack01_url_ddns="",mapPack01_url_box="https://uvu.box.com/shared/static/2wm4soep000wcffah9rra7xpsqfwzit7.zip",mapPack01_url_moddb="",mapPack02_url_jkhub="https://jkhub.org/files/file/3778-jedi-knight-galaxies-map-bundle-2/",mapPack02_url_ddns="",mapPack02_url_box="https://uvu.box.com/shared/static/beqd7odfuqj2yzh72i55tw6ls2110x3w.zip",mapPack02_url_moddb="",mapPack01_hash="1FAAD62441894D7A1284F75DC9B62EEDEBC1A0ABAC03DE913B32D0BF954CC61A",mapPack01_size="243 MB",mapPack02_hash="1AA44880D607A2E331BE5F41D8EF1657D3E3F60AC15DF9B1DF46CB7150859DC7",mapPack02_size="113 MB";function resizeMarginsVertMode(){window.innerHeight>window.innerWidth&&$(window).width()<768&&($(".maindiv").css("margin","0%"),$(".centerdivbig").css("margin","0%"),$(".centerdiv").css("margin","0%"),$(".centerdiv").css("margin","0%"),$("#navbarLogoImg").hide(),$("#navbar").css("font-size",18),$("#navbar a").css("padding-top",15))}function revealInstructionsSpoiler(){"none"==document.getElementById("instructionBody").style.display?document.getElementById("instructionBody").style.display="":document.getElementById("instructionBody").style.display="none"}function loadDirectoryText(){$("#directoryText").load("text/directoryText.txt")}function formatBytes(bytes,decimals=2){if(0===bytes)return"0 Bytes";const k=1024,dm=decimals<0?0:decimals,sizes=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],i=Math.floor(Math.log(bytes)/Math.log(k));return parseFloat((bytes/Math.pow(k,i)).toFixed(dm))+" "+sizes[i]}function DetectClientOS(){document.getElementById("downloadAssetBtn").href=asset_url_release1,document.getElementById("downloadAssetBtnSm").href=asset_url_release1,document.getElementById("downloadAssetBtnTestSm").href=asset_url_beta1,document.getElementById("downloadType").innerHTML+="<br>",-1!=window.navigator.userAgent.indexOf("Windows NT 10.0")&&(OSName="Windows"),-1!=window.navigator.userAgent.indexOf("Windows NT 6.2")&&(OSName="Windows"),-1!=window.navigator.userAgent.indexOf("Windows NT 6.1")&&(OSName="Windows"),-1!=window.navigator.userAgent.indexOf("Windows NT 6.0")&&(OSName="Windows"),-1!=window.navigator.userAgent.indexOf("Windows NT 5.1")&&(OSName="WindowsXP"),-1!=window.navigator.userAgent.indexOf("Mac")&&(OSName="OSX"),-1!=window.navigator.userAgent.indexOf("Linux")&&(OSName="Linux"),"Windows"==OSName?document.getElementById("downloadType").innerHTML+=" Windows":"WindowsXP"==OSName?(document.getElementById("downloadType").innerHTML+=" Windows XP",alert("Warning, Windows XP is depreciated and unsupported.")):"OSX"==OSName?document.getElementById("downloadType").innerHTML+=" OSX":"Linux"==OSName?document.getElementById("downloadType").innerHTML+=" Linux":document.getElementById("downloadType").innerHTML="Download",console.log(OSName+" detected."),document.getElementById("downloadType").innerHTML+=" Client"}function obtainBuildType(OS_builds,version){var jkgtag="jkgalaxies_";return build_type="Windows"==OSName?OS_builds.indexOf(jkgtag+version+"_win.zip"):"WindowsXP"==OSName?OS_builds.indexOf(jkgtag+version+"_winXP.zip"):"Linux"==OSName?OS_builds.indexOf(jkgtag+version+"_linux.zip"):"OSX"==OSName?OS_builds.indexOf(jkgtag+version+"_osx.zip"):-1,build_type}function GetLatestReleaseInfo(repo,releasetype){if("test"==releasetype||"beta"==releasetype)repo="https://api.github.com/repos/"+repo+"/releases",releasetype="test";else{if("stable"!=releasetype&&"final"!=releasetype)return void console.log("Invalid release info request: type == "+releasetype.toLocaleString());repo="https://api.github.com/repos/"+repo+"/releases/latest",releasetype="stable"}$.getJSON(repo).done((function(json){var release=json;if("test"==releasetype)var totalDownloadCount=0,release=json[0];var OS_builds=[],build_type=0,downloadCount=0,version=release.tag_name;version=version.replace("Version","v");for(var asset="",i=0;i<release.assets.length;i++)downloadCount+=release.assets[i].download_count,OS_builds.push(release.assets[i].name);(build_type=obtainBuildType(OS_builds,version))<0?("test"==releasetype&&(document.getElementById("downloadBinBtn").href="#tableTestDownload"),"stable"==releasetype&&(document.getElementById("downloadBinBtn").href="#tablePrimaryDownload"),asset=release.assets[0]):(asset=release.assets[build_type],"test"==releasetype&&(document.getElementById("downloadBinBtnTestSm").href=asset.browser_download_url),"stable"==releasetype&&(document.getElementById("downloadBinBtn").href=asset.browser_download_url,document.getElementById("downloadBinBtnSm").href=asset.browser_download_url));var oneHour=36e5,oneDay=864e5,oneYear=31536e6,dateDiff=new Date-new Date(asset.updated_at),timeAgo;dateDiff<864e5?(timeAgo=(dateDiff/36e5).toFixed(1))<=1?timeAgo=" within the hour":timeAgo+=" hours ago":dateDiff<31536e6?(timeAgo=(dateDiff/864e5).toFixed(0),timeAgo+=1==timeAgo?" day ago":" days ago"):(timeAgo=(dateDiff/31536e6).toFixed(1),timeAgo+=1==timeAgo?" year ago":" years ago");var releaseInfo=version+" last updated "+timeAgo+".";downloadCount>0&&("test"==releasetype&&(document.getElementById("test-download-count").innerHTML+=downloadCount.toLocaleString()),"stable"==releasetype&&(document.getElementById("download-count").innerHTML+=downloadCount.toLocaleString())),"stable"==releasetype&&($(".release-info").text(releaseInfo),$(".patchnotes").attr("href",release.html_url),drawTable(version,release,asset,OS_builds,releasetype)),"test"==releasetype&&($(".test-release-info").text(releaseInfo),$(".test-patchnotes").attr("href",release.html_url),drawTable(version,release,asset,OS_builds,releasetype))}))}function drawTable(version,release,asset,OS_builds,releasetype){var assetHash="",binHashArr=[],whichTable="",asset_size="0 MB",asset_url="",asset_date="0000-00-00",assetMap01Hash=mapPack01_hash,assetMap02Hash=mapPack02_hash;if("test"==releasetype)assetHash=asset_beta_hash,whichTable="#tableTestDownload",binHashArr=bin_hash_beta_array,asset_size="257 MB",asset_url=asset_url_beta1,asset_date="2022-08-25";else{if("stable"!=releasetype)return void console.log("Invalid release type detected, unable to draw table!");assetHash=asset_release_hash,whichTable="#tablePrimaryDownload",binHashArr=bin_hash_release_array,asset_size="243 MB",asset_url=asset_url_release1,asset_date="2020-07-01"}for(var i=0,bin_mirror_url1="",bin_mirror_url2="",bin_mirror_url3="",bin_test_mirror_url="";i<3;i++){var OSName_temp=OSName,binHash="";switch(i){case 0:OSName="Windows",bin_mirror_url1=bin_win_url1,bin_mirror_url2=bin_win_url2,bin_mirror_url3=bin_win_url3,bin_test_mirror_url=bin_win_beta_url3,binHash=binHashArr[0];break;case 1:OSName="Linux",bin_mirror_url1=bin_lin_url1,bin_mirror_url2=bin_lin_url2,bin_mirror_url3=bin_lin_url3,bin_test_mirror_url=bin_lin_beta_url3,binHash=binHashArr[1];break;case 2:OSName="OSX",bin_mirror_url1=bin_osx_url1,bin_mirror_url2=bin_osx_url2,bin_mirror_url3=bin_osx_url3,bin_test_mirror_url="",binHash=binHashArr[2]}if(build_type=obtainBuildType(OS_builds,version),assetHash=assetHash.toLowerCase(),assetMap01Hash=assetMap01Hash.toLowerCase(),assetMap02Hash=assetMap02Hash.toLowerCase(),binHash=binHash.toLowerCase(),build_type>=0){var fileSize=formatBytes((asset=release.assets[build_type]).size),cellContent0_1="",cellContent0_2="";"#tablePrimaryDownload"==whichTable&&(cellContent0_1='<td><a href="'+bin_mirror_url1+'" >'+mirror1+"</a></td>",cellContent0_2='<td><a href="'+bin_mirror_url2+'" >'+mirror2+"</a></td>",cellContent0_3='<td><a href="'+bin_mirror_url3+'" >'+mirror3+"</a></td>"),"#tableTestDownload"==whichTable&&(cellContent0_1='<td><a href="'+bin_test_mirror_url+'" >'+mirror1+"</a></td>",cellContent0_3=""),$(whichTable+" tbody").append($("<tr>").append($("<td>").text("Binaries")).append($("<td>").text(OSName)).append($("<td>").text(fileSize)).append($("<td>").text(asset.download_count)).append($("<td>").append($("<a>").attr("href","#"+binHash).text(binHash.substring(0,7)).attr("title","SHA-256: "+binHash))).append($("<td>").text(asset.updated_at.substring(0,10))).append($("<td>").append($("<a>").attr("href",asset.browser_download_url).text(mirror0))).append(cellContent0_1).append(cellContent0_2).append(cellContent0_3))}OSName=OSName_temp}var cellContent1_0='<td><a href="'+asset_url+'" >'+mirror1+"</a></td>";if("#tablePrimaryDownload"==whichTable)var cellContent1_1='<td><a href="'+asset_url_release1+'" >'+mirror1+"</a></td>",cellContent1_2='<td><a href="'+asset_url_release2+'" >'+mirror2+"</a></td>",cellContent1_3='<td><a href="'+asset_url_release3+'" >'+mirror3+"</a></td>";if("#tableTestDownload"==whichTable)var cellContent1_1='<td><a href="" >'+mirror3+"</a></td>";$(whichTable+" tbody").append($("<tr>").append($("<td>").text("Assets")).append($("<td>").text("All")).append($("<td>").text(asset_size)).append($("<td>").text("-")).append($("<td>").append($("<a>").attr("href","#"+assetHash).text(assetHash.substring(0,7)).attr("title","SHA-256: "+assetHash))).append($("<td>").text(asset_date)).append(cellContent1_0).append(cellContent1_1).append(cellContent1_2).append(cellContent1_3));var cellContent2_0='<td><a href="'+mapPack01_url_jkhub+'" >'+mirror4+"</a></td>",cellContent3_0='<td><a href="'+mapPack02_url_jkhub+'" >'+mirror4+"</a></td>";if("#tablePrimaryDownload"==whichTable)var cellContent2_1='<td><a href="'+mapPack01_url_box+'" >'+mirror1+"</a></td>",cellContent2_2='<td><a href="" >ModDB.com</a></td>',cellContent2_3='<td><a href="" >'+mirror3+"</a></td>",cellContent3_1='<td><a href="'+mapPack02_url_box+'" >'+mirror1+"</a></td>",cellContent3_2='<td><a href="" >ModDB.com</a></td>',cellContent3_3='<td><a href="" >'+mirror3+"</a></td>";if("#tableTestDownload"==whichTable)var cellContent2_1='<td><a href="" >'+mirror3+"</a></td>",cellContent3_1='<td><a href="" >'+mirror3+"</a></td>";$(whichTable+" tbody").append($("<tr>").append($("<td>").text("Map Pack #1")).append($("<td>").text("All")).append($("<td>").text("243 MB")).append($("<td>").text("-")).append($("<td>").append($("<a>").attr("href","#"+assetMap01Hash).text(assetMap01Hash.substring(0,7)).attr("title","SHA-256: "+assetMap01Hash))).append($("<td>").text("2016-11-03")).append(cellContent2_0).append(cellContent2_1).append(cellContent2_2).append(cellContent2_3)).append($("<tr>").append($("<td>").text("Map Pack #2")).append($("<td>").text("All")).append($("<td>").text("113 MB")).append($("<td>").text("-")).append($("<td>").append($("<a>").attr("href","#"+assetMap02Hash).text(assetMap02Hash.substring(0,7)).attr("title","SHA-256: "+assetMap02Hash))).append($("<td>").text("2020-02-13")).append(cellContent3_0).append(cellContent3_1).append(cellContent3_2).append(cellContent3_3))}window.onload=function(){var github_repo="JKGDevs/JediKnightGalaxies";DetectClientOS(),GetLatestReleaseInfo(github_repo,"test"),GetLatestReleaseInfo(github_repo,"stable"),loadDirectoryText(),resizeMarginsVertMode()};