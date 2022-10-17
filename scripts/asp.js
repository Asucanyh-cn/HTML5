var myImage=document.querySelector("img");
myImage.onclick=function(){
    var mySrc=myImage.getAttribute('src');
    if(mySrc=='images/firefox-icon.png'){
        myImage.setAttribute('src','images/firefox-icon-0.png');
    }else{
        myImage.setAttribute('src','images/firefox-icon.png');
    };
};
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('请输入你的名字。');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla 酷毙了，' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hello，' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
 }