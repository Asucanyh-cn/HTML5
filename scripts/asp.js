var myImage=document.querySelector('img');
myImage.onclick=function(){
    var src=myImage.getAttribute('src');
    if(src==='images/firefox-icon.png'){
        myImage.setAttribute('src','images/gawr_gura.png');
    }else{
        myImage.setAttribute('src','images/firefox-icon.png');
    };
};