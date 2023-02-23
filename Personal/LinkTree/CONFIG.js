window.onload = function() {
    OnStart();
   };
    //-----------Header Things----------\\
    var ProfilePicture = "Pfp Link";
    //-----------Button Names----------\\
    var Button1Name = "BUTTON1 NAME HERE";
    var Button2Name = "BUTTON2 NAME HERE";
    var Button3Name = "BUTTON3 NAME HERE";
    var Button4Name = "BUTTON4 NAME HERE";
    //-----------Button Links----------\\
    var Button1Link = "";
    var Button2Link = "";
    var Button3Link = "";
    var Button4Link = "";
    //-----------Footer----------\\
    var Copyright = "© Copyright [Year], [Copmany], [Rights]";
    //----------------------------↓↓↓ The Boring Stuff ↓↓↓--------------------------------\\
    //If you care about this you can scroll down
    var doc = document;

function OnStart(){ 
    doc.getElementById("Button1").value=Button1Name;
    doc.getElementById("Button2").value=Button2Name;
    doc.getElementById("Button3").value=Button3Name;
    doc.getElementById("Button4").value=Button4Name;
    document.getElementById("Button1").addEventListener("click", ButtonOpen1);
    document.getElementById("Button2").addEventListener("click", ButtonOpen2);
    document.getElementById("Button3").addEventListener("click", ButtonOpen3);
    document.getElementById("Button4").addEventListener("click", ButtonOpen4);
    doc.getElementById("IMG").src = ProfilePicture;
    doc.getElementById("H!").innerHTML=Copyright;
 }
 function ButtonOpen1()
 {
   window.open(Button1Link)
 }
 function ButtonOpen2()
 {
   window.open(Button2Link)
 }
 function ButtonOpen3()
 {
   window.open(Button3Link)
 }
 function ButtonOpen4()
 {
   window.open(Button4Link)
 }
 