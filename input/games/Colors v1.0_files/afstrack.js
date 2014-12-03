var T=Math.random();
var Ref=document.referrer;
if (typeof(parent.document)!="unknown")
{
var F=parent.document.URL;
if (document.referrer==F) Ref=parent.document.referrer;
}
var S="usr="+AFS_Account+"P"+AFS_Tracker+"&js=1";
if (typeof AFS_Page == "undefined") var AFS_Page="unknown";
if (typeof AFS_Url == "undefined") var AFS_Url="unknown";
if (AFS_Page=="DetectName") {AFS_Page=document.title;}
if (AFS_Url=="DetectUrl") {AFS_Url=window.document.URL;}
S+="&title="+encodeURIComponent(AFS_Page);
S+="&url="+encodeURIComponent(AFS_Url);
S+="&refer="+encodeURIComponent(Ref);
S+="&rua=0";
if(typeof(screen)=="object")
{
S+="&resolution="+screen.width+"x"+screen.height;
S+="&color="+screen.colorDepth;
}
S+="&Tips="+T;
document.write("<a href=\"http://new.addfreestats.com/?usr="+AFS_Account+"\" >");
document.write("<img border=0 src=\"http://"+AFS_Server+".addfreestats.com/cgi-bin/connect.cgi?");
document.write(S);
document.write("\" border=0 alt=\"\" rel=\"nofollow\"></a>");
function afspause(x)
{
var now = new Date();
var stop = now.getTime() + (x || clicky_custom.timer || 500);
while (now.getTime() < stop) var now = new Date();
};
var elements;
var temp=window.location.href.split("/");
var domain=temp[2].toLowerCase();
function afsstlogc()
{
if (window.status!="") click=window.status;
var click=this.href.toLowerCase();
var bug = document.createElement('img');
bug.src="";
bug.src = 'http://' + AFS_Server + '.addfreestats.com/cgi-bin/click.cgi?usr=' + AFS_Account + '&exit='+encodeURIComponent(click);
afspause(20);
}
if(document.getElementsByTagName)
 {
  elements = document.getElementsByTagName("a");
   for (var i = 0; i < elements.length; i++)
   {
    var click=elements[i].href.toLowerCase();
    var flag=0;
    if ((click.indexOf(domain)!= -1) || (click.indexOf('mailto:') != -1) || (click.indexOf('javascript:') != -1))  flag=1;
if (flag==0) elements[i].onfocus = afsstlogc; 
   }
 }
var isOverIFrame = false;
var name="iFrame click"; 
function afsprocessMouseOut()
{
isOverIFrame = false;
top.parent.focus();
}
function afsprocessMouseOver()
{
ifname=this.name.toLowerCase();
    if (ifname=="")
    {
      if (this.src.indexOf('http')==-1)
      {
      temp=window.location.href.split("/");
      var local=temp[2].toLowerCase();
      }
      else
      {
      temp=this.src.split("/");
      mydomain=temp[2].toLowerCase();
      if (mydomain=="") ifname='iframe->undefined';
      else ifname='iframe->'+mydomain;
      }
    }
isOverIFrame = true;
}
function afsprocessIFrameClick()
{
        if(isOverIFrame)
        {
        window.focus();
        click=this.ifname;
if (click.indexOf('google_ads_frame') != -1)
{
var click='Adsense->Slot-'+click.charAt(click.length-1);
}
         if (click.indexOf('aswift') != -1)
         {
         var numstr=click.charAt(click.length-1);
         var click='Adsense->Slot-';
         var num=numstr.charCodeAt();
         click=click+String.fromCharCode(num+1);
         }
         var bug = document.createElement('img');
        bug.src = 'http://' + AFS_Server + '.addfreestats.com/cgi-bin/click.cgi?usr=' + AFS_Account + '&exit='+encodeURIComponent(click);
         afspause(30);
        }
}
 function afsattachOnloadEvent(func, obj)
 {
 	if(typeof window.addEventListener != "undefined")
         {
         window.addEventListener("load", func, false);
         }
 	else if (typeof document.addEventListener != "undefined")
         {
         document.addEventListener("load", func, false);
         }
         else if (typeof window.attachEvent != "undefined")
         {
        window.attachEvent("onload", func);
         }
        else
       {
                 if (typeof window.onload == "function")
                {
                var oldonload = onload;
                        window.onload = function()
                        {
                        oldonload();
                        func();
                        };
                 }
                 else
                 {
                 window.onload = func;
                 }
         }
 }
function afsinit()
{
 var element = document.getElementsByTagName("iframe");
var temp=window.location.href.split("/");
var domain=temp[2].toLowerCase();
 for (var i=0; i<element.length; i++) {
 flag=0;
 if (element[i].name.indexOf("notracking")!=-1) flag=1;
 if (element[i].src!=undefined)
 {
 if (element[i].src.indexOf(domain)!=-1) flag=1;
  if (element[i].src.indexOf('javascript:')!=-1) flag=1;
  if (element[i].src.indexOf('mailto:')!=-1) flag=1;
 }
 else flag=1;
 if (flag==0)
 {
 element[i].onmouseover = afsprocessMouseOver;
 element[i].onmouseout = afsprocessMouseOut;
 }
 }
 if (typeof window.attachEvent !="undefined") {
 top.attachEvent("onblur", afsprocessIFrameClick);
 }
 else if (typeof window.addEventListener !="undefined") { 
      top.addEventListener("blur", afsprocessIFrameClick, false);
      }
 }
afsattachOnloadEvent(afsinit);
