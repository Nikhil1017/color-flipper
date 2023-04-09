var array = [ 'lime', 'yellow', 'aqua', 'burlywood', 'chocolate', 'aquamarine', 'deeppink', 'gold', 'tomato'];
var i = 0;
function simple() {     
    document.body.style.backgroundColor=array[i];
    string =array[i];
    i += 1;
    if (i == array.length)
    {
        i=0;
    } 
    document.getElementsByClassName("spam")[0].innerText=string;
    document.getElementsByClassName("spam")[0].style.color=string;
    document.getElementsByClassName("spam")[0].style.letterSpacing="2px";

}

