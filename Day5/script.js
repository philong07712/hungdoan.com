var picid = document.getElementById('hinh-1');
var picid2 = document.getElementById('hinh-2');
var picid3 = document.getElementById('hinh-3');
var main = document.getElementById('main');
console.log(main);
var present_color = 'black';
console.log(present_color);
function set_color() {
    present_color = getComputedStyle(this).backgroundColor;
    console.log(present_color);
}
function change_color() {
    this.style.backgroundColor = present_color;
}
picid.addEventListener("click", set_color);
picid2.addEventListener("click", set_color);
picid3.addEventListener("click", set_color);
main.addEventListener("click", change_color);
