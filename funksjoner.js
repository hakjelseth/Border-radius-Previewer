function kopier(){

    var copyText = document.getElementById("borderRadius");
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
    document.execCommand("copy");
    document.getElementById("borderRadius").innerHTML = "BSAHS";

}

function endreTekstBoks(){
    var string = ""
    if(document.getElementById("rcorners").style.borderTopLeftRadius.valueOf()!=""){
        var topLeft = "border-top-left-radius: " + document.getElementById("rcorners").style.borderTopLeftRadius.valueOf() + ";";
        string += topLeft
    }
    if(document.getElementById("rcorners").style.borderTopRightRadius.valueOf()!=""){
        var topRight = "border-top-right-radius: " + document.getElementById("rcorners").style.borderTopRightRadius.valueOf() + ";";
        string += "\n" + topRight
    }
    if(document.getElementById("rcorners").style.borderBottomLeftRadius.valueOf()!=""){
        var bottomLeft = "border-bottom-left-radius: " + document.getElementById("rcorners").style.borderBottomLeftRadius.valueOf() + ";";
        string += "\n" + bottomLeft
    }
    if(document.getElementById("rcorners").style.borderBottomRightRadius.valueOf()!=""){
        var bottomRight = "border-bottom-right-radius: " + document.getElementById("rcorners").style.borderBottomRightRadius.valueOf() + ";";
        string += "\n" + bottomRight
    }
    document.getElementById("borderRadius").value = string;
}

function endreRadius1(value) {
    document.getElementById("rcorners").style.borderTopLeftRadius = value+"px";
    endreTekstBoks();
}

function endreRadius2(value) {
    document.getElementById("rcorners").style.borderTopRightRadius = value+"px";
    endreTekstBoks();
}

function endreRadius3(value) {
    document.getElementById("rcorners").style.borderBottomLeftRadius = value+"px";
    endreTekstBoks();
}

function endreRadius4(value) {
    document.getElementById("rcorners").style.borderBottomRightRadius = value+"px";
    endreTekstBoks();
}