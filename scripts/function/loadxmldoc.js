function loadXMLDoc(docName){
    if(window.XMLHttpRequest){
        xhttp=new XMLHttpRequest();
    }
    else{
        xhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.open("GET",docName,false);
    xhttp.send();
    return xhttp.responseXML
}