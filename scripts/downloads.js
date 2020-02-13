var OSName="Unknown";const mirror0="Github.com",mirror1="Box.com",mirror2="ModDB.com",mirror3="JK2T.ddns.net",mirror4="JKHub.org",bin_win_hash_release="12C10FE854F5728DE37E5FCBFF5D5ADF0A1594E974C396C65BCAF0FA2BEA567D",bin_lin_hash_release="C461C3F750128B53521D4993477699C689E0EA6F44A787A1BBBBBD7888491074",bin_osx_hash_release="54641EA28CFBE9B0AD5A9DA3D8C695587B520A4224597043A7CDE13E4CA35847",bin_hash_release_array=[bin_win_hash_release,bin_lin_hash_release,bin_osx_hash_release],bin_win_hash_beta="38A4F971DAF764318CE48F23F9244BF9F68B468225458275BC57CE74DFB7BCA5",bin_lin_hash_beta="1EDE0D6239A21CABAE89EA473636FE65B776969110D4969B7E9F55C9DC272467",bin_osx_hash_beta="C4F0DC7A5D58011FA48549A44B698C38DC978A87E8AAD4776A4754E6D6EAE28E",bin_hash_beta_array=[bin_win_hash_beta,bin_lin_hash_beta,bin_osx_hash_beta],bin_win_url1="https://uvu.box.com/shared/static/gd59kdk6jpc592uccbrje5fmus7c5yq8.zip",bin_lin_url1="",bin_osx_url1="",bin_win_url2="",bin_lin_url2="",bin_osx_url2="",bin_win_url3="https://jk2t.ddns.net/Windows/jkgalaxies_winx86.zip",bin_lin_url3="https://jk2t.ddns.net/Linux/jkgalaxies_linuxx64.zip",bin_osx_url3="https://jk2t.ddns.net/macOS/jkgalaxies_macosxx86_64.zip",asset_url_release1="https://uvu.box.com/shared/static/z1j68r0v1m15v03ergfidtm3somp5ce2.zip",asset_url_release2="",asset_url_release3="https://jk2t.ddns.net/jkgfiles/z1j68r0v1m15v03ergfidtm3somp5ce2.zip",asset_release_hash="A007B9DDE2BC9D44A1DEFF52701B7BC8BB592B07D7D40D3936279153AF521320",asset_size_release="223.4 MB",asset_date_release="2018-07-07",asset_url_beta="https://uvu.box.com/shared/static/lztt5mayu4daj9szvg8v0rtds6vwmnmq.zip",asset_beta_hash="95124AA88281D79A1B08C205200074ED2E233901F80FDAD3BEFAF324F1C61D88",asset_size_beta="240.8 MB",asset_date_beta="2020-02-08",mapPack01_url_jkhub="https://jkhub.org/files/file/2652-jedi-knight-galaxies-map-bundle-1/",mapPack01_url_ddns="https://jk2t.ddns.net/jkgfiles/jkgalaxies-maps-v1.2.zip",mapPack01_url_box="https://uvu.box.com/shared/static/iw9gkh7p80wt0y28h1sd46lvk54v8bdv.zip",mapPack01_url_moddb="",mapPack01_hash="ECCB1B4A060628F6E5990F59AA0D0FBE81D0F41CF7A11850400804E8FABB60CD",mapPack_size="244 MB";function resizeMarginsVertMode(){window.innerHeight>window.innerWidth&&$(window).width()<768&&($(".maindiv").css("margin","0%"),$(".centerdivbig").css("margin","0%"),$(".centerdiv").css("margin","0%"),$(".centerdiv").css("margin","0%"),$("#navbarLogoImg").hide(),$("#navbar").css("font-size",18),$("#navbar a").css("padding-top",15))}function revealInstructionsSpoiler(){"none"==document.getElementById("instructionBody").style.display?document.getElementById("instructionBody").style.display="":document.getElementById("instructionBody").style.display="none"}function loadDirectoryText(){$("#directoryText").load("text/directoryText.txt")}function formatBytes(e,t=2){if(0===e)return"0 Bytes";const a=t<0?0:t,n=Math.floor(Math.log(e)/Math.log(1024));return parseFloat((e/Math.pow(1024,n)).toFixed(a))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][n]}function DetectClientOS(){document.getElementById("downloadAssetBtn").href=asset_url_release1,document.getElementById("downloadAssetBtnSm").href=asset_url_release1,document.getElementById("downloadAssetBtnTestSm").href=asset_url_beta,document.getElementById("downloadType").innerHTML+="<br>",-1!=window.navigator.userAgent.indexOf("Windows NT 10.0")&&(OSName="Windows"),-1!=window.navigator.userAgent.indexOf("Windows NT 6.2")&&(OSName="Windows"),-1!=window.navigator.userAgent.indexOf("Windows NT 6.1")&&(OSName="Windows"),-1!=window.navigator.userAgent.indexOf("Windows NT 6.0")&&(OSName="Windows"),-1!=window.navigator.userAgent.indexOf("Windows NT 5.1")&&(OSName="WindowsXP"),-1!=window.navigator.userAgent.indexOf("Mac")&&(OSName="OSX"),-1!=window.navigator.userAgent.indexOf("Linux")&&(OSName="Linux"),"Windows"==OSName?document.getElementById("downloadType").innerHTML+=" Windows":"WindowsXP"==OSName?(document.getElementById("downloadType").innerHTML+=" Windows XP",alert("Warning, Windows XP is depreciated and unsupported.")):"OSX"==OSName?document.getElementById("downloadType").innerHTML+=" OSX":"Linux"==OSName?document.getElementById("downloadType").innerHTML+=" Linux":document.getElementById("downloadType").innerHTML="Download",console.log(OSName+" detected."),document.getElementById("downloadType").innerHTML+=" Client"}function obtainBuildType(e,t){var a="jkgalaxies_";return build_type="Windows"==OSName?e.indexOf(a+t+"_win.zip"):"WindowsXP"==OSName?e.indexOf(a+t+"_winXP.zip"):"Linux"==OSName?e.indexOf(a+t+"_linux.zip"):"OSX"==OSName?e.indexOf(a+t+"_osx.zip"):-1,build_type}function GetLatestReleaseInfo(e,t){if("test"==t||"beta"==t)e="https://api.github.com/repos/"+e+"/releases",t="test";else{if("stable"!=t&&"final"!=t)return void console.log("Invalid release info request: type == "+t.toLocaleString());e="https://api.github.com/repos/"+e+"/releases/latest",t="stable"}$.getJSON(e).done(function(e){var a=e;if("test"==t)a=e[0];var n,s=[],d=0,r=a.tag_name;r=r.replace("Version","v");for(var i="",o=0;o<a.assets.length;o++)d+=a.assets[o].download_count,s.push(a.assets[o].name);(n=obtainBuildType(s,r))<0?("test"==t&&(document.getElementById("downloadBinBtn").href="#tableTestDownload"),"stable"==t&&(document.getElementById("downloadBinBtn").href="#tablePrimaryDownload"),i=a.assets[0]):(i=a.assets[n],"test"==t&&(document.getElementById("downloadBinBtnTestSm").href=i.browser_download_url),"stable"==t&&(document.getElementById("downloadBinBtn").href=i.browser_download_url,document.getElementById("downloadBinBtnSm").href=i.browser_download_url));var l,_=new Date-new Date(i.updated_at);_<864e5?(l=(_/36e5).toFixed(1))<=1?l=" within the hour":l+=" hours ago":_<31536e6?(l=(_/864e5).toFixed(0),l+=1==l?" day ago":" days ago"):(l=(_/31536e6).toFixed(1),l+=1==l?" year ago":" years ago");var p=r+" last updated "+l+".";d>0&&("test"==t&&(document.getElementById("test-download-count").innerHTML+=d.toLocaleString()),"stable"==t&&(document.getElementById("download-count").innerHTML+=d.toLocaleString())),"stable"==t&&($(".release-info").text(p),$(".patchnotes").attr("href",a.html_url),drawTable(r,a,i,s,t)),"test"==t&&($(".test-release-info").text(p),$(".test-patchnotes").attr("href",a.html_url),drawTable(r,a,i,s,t))})}function drawTable(e,t,a,n,s){var d="",r=[],i="",o="0 MB",l="",_="0000-00-00",p=mapPack01_hash;if("test"==s)d=asset_beta_hash,i="#tableTestDownload",r=bin_hash_beta_array,o=asset_size_beta,l=asset_url_beta,_=asset_date_beta;else{if("stable"!=s)return void console.log("Invalid release type detected, unable to draw table!");d=asset_release_hash,i="#tablePrimaryDownload",r=bin_hash_release_array,o=asset_size_release,l=asset_url_release1,_=asset_date_release}for(var u=0,m="",b="";u<3;u++){var h=OSName,c="";switch(u){case 0:OSName="Windows",m=bin_win_url1,b=bin_win_url3,c=r[0];break;case 1:OSName="Linux",m=bin_lin_url1,b=bin_lin_url3,c=r[1];break;case 2:OSName="OSX",m=bin_osx_url1,b=bin_osx_url3,c=r[2]}if(build_type=obtainBuildType(n,e),d=d.toLowerCase(),p=p.toLowerCase(),c=c.toLowerCase(),build_type>=0){var w=formatBytes((a=t.assets[build_type]).size),B="",g="";"#tablePrimaryDownload"==i&&(B='<td><a href="'+m+'" >'+mirror1+"</a></td>",g='<td><a href="'+b+'" >'+mirror3+"</a></td>"),$(i+" tbody").append($("<tr>").append($("<td>").text("Binaries")).append($("<td>").text(OSName)).append($("<td>").text(w)).append($("<td>").text(a.download_count)).append($("<td>").append($("<a>").attr("href","#"+c).text(c.substring(0,7)).attr("title","SHA-256: "+c))).append($("<td>").text(a.updated_at.substring(0,10))).append($("<td>").append($("<a>").attr("href",a.browser_download_url).text(mirror0))).append(B).append(g))}OSName=h}var x='<td><a href="'+l+'" >'+mirror1+"</a></td>";if("#tablePrimaryDownload"==i)var y='<td><a href="'+asset_url_release1+'" >'+mirror1+"</a></td>",f='<td><a href="'+asset_url_release3+'" >'+mirror3+"</a></td>";$(i+" tbody").append($("<tr>").append($("<td>").text("Assets")).append($("<td>").text("All")).append($("<td>").text(o)).append($("<td>").text("-")).append($("<td>").append($("<a>").attr("href","#"+d).text(d.substring(0,7)).attr("title","SHA-256: "+d))).append($("<td>").text(_)).append(x).append(y).append(f));var A='<td><a href="'+mapPack01_url_jkhub+'" >'+mirror4+"</a></td>";if("#tablePrimaryDownload"==i)var E='<td><a href="'+mapPack01_url_box+'" >'+mirror1+"</a></td>",D='<td><a href="'+mapPack01_url_ddns+'" >'+mirror3+"</a></td>";$(i+" tbody").append($("<tr>").append($("<td>").text("Map Pack #1")).append($("<td>").text("All")).append($("<td>").text(mapPack_size)).append($("<td>").text("-")).append($("<td>").append($("<a>").attr("href","#"+p).text(p.substring(0,7)).attr("title","SHA-256: "+p))).append($("<td>").text("2016-11-03")).append(A).append(E).append(D))}window.onload=function(){DetectClientOS(),GetLatestReleaseInfo("JKGDevs/JediKnightGalaxies","test"),GetLatestReleaseInfo("JKGDevs/JediKnightGalaxies","stable"),loadDirectoryText(),resizeMarginsVertMode()};