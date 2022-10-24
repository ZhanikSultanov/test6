menu.onclick = function myFunction() {
    var x = document.getElementById('muTopnav');
    
    if (x.className === "topnav"){
        x.className += " responsive";
    } else {
        x.className ="topnav";
    } 
}