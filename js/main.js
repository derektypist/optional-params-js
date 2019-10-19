// Define Function

function getFontInfo(name, colour="black", size=11)
{
    return "The font " + name + " is " + colour + " in colour.  It size is " + size + "point.";
}

// Define Variables
let txt = "";

// Increment txt
txt += getFontInfo("Calibri", "green", 14) + "<br>";
txt += getFontInfo("Arial") + "<br>";
txt += getFontInfo("Roboto", "purple") + "<br>";
txt += getFontInfo("Verdana", "blue", 12) + "<br>";

// Display txt in the browser window
document.getElementById("demo").innerHTML = txt;