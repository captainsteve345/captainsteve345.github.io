function randomImg(){
    var randomNumber = Math.floor(Math.random() * 25) + 1;
    var imgName = "img_" + randomNumber + ".jpg";
    document.getElementById("greenbox").src= "IMG Path" + "/" + imgName ;
 }
