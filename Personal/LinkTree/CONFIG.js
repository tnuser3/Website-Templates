window.onload = function() {
    OnStart();
   };
function OnStart(){ 
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
    //If you care about this you can scroll down
    var doc = document;

    doc.getElementById("Button1").value=Button1Name;
    doc.getElementById("Button2").value=Button2Name;
    doc.getElementById("Button3").value=Button3Name;
    doc.getElementById("Button4").value=Button4Name;
    document.getElementById("Button1").addEventListener("click", OpenWindow);
    document.getElementById("Button2").addEventListener("click", OpenWindow);
    document.getElementById("Button3").addEventListener("click", OpenWindow);
    document.getElementById("Button4").addEventListener("click", OpenWindow);
 }
 function OpenWindow(Link)
 {
   window.open(Link)
   if (Button1Link=="")
   {

   }
 }