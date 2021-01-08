var mesx, yearx, mesy, yeary, totalx, totaly;

totalx=0;
totaly=999999;

var inputyearY = document.getElementById("iyearY");
var inputyearX = document.getElementById("iyearX");
var inputMesY = document.getElementById("iMesY");
var inputMesX = document.getElementById("iMesX");

inputyearX.onchange = function(){
    yearx = parseInt(inputyearX.value) ;
    totalx = mesx+yearx;
}

inputyearY.onchange = function(){
    yeary = parseInt(inputyearY.value);
    totaly = mesy+yeary;
}

inputMesX.onchange = function(){
    mesx = parseInt(inputMesX.value) ;
    totalx = parseInt(mesx+yearx) ;
}

inputMesY.onchange = function(){
    mesy = parseInt(inputMesY.value) ;
    totaly = mesy+yeary;
}

