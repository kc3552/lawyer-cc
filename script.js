


var left="[";
var right="]";
var msg="- AV.Çiğdem Çalış ÇAĞAN - Sitemize Hoş geldiniz! -";
var speed=200;

function scroll_title() {
        document.title=left+msg+right;
        msg=msg.substring(1,msg.length)+msg.charAt(0);
        setTimeout("scroll_title()",speed);
}
scroll_title();
 
var title = document.title;
var alttitle = "Buraya gelir misin lütfen";
window.onblur = function () { document.title = alttitle; };
window.onfocus = function () { document.title = title; };


function displayMenu(){
        var link=document.getElementById("nav-b");
        link.classList.toggle("responsive");
}
 


