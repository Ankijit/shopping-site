var bar1 = document.getElementById("line1");
var bar2 = document.getElementById("line2");
var bar3 = document.getElementById("line3");
var menumain = document.getElementById("sidemenu");
function openmenu() {
    if (bar3.style.display != 'none') {
        bar3.style.display = 'none';
        bar1.style.transform = 'rotate(-53deg)'
        bar2.style.transform = 'rotate(53deg)'
        bar2.style.margin = '-2px 0 0 0';
        menumain.style.left = '0px';
        bar1.style.margin = '8px 0 0 0';
    }
    else {
        bar3.style.display = 'block';
        bar1.style.transform = 'rotate(0deg)'
        bar2.style.transform = 'rotate(0deg)'
        bar2.style.margin = '8px 0 0 0'
        menumain.style.left = '-200px';
        bar1.style.margin="0 0 0 0"
       
    }
}