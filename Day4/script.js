var robert = document.getElementById('Robert');
var olsen = document.getElementById('Olsen');
var chris = document.getElementById('Chris');

robert.addEventListener("click", Appear);
olsen.addEventListener("click", Appear);
chris.addEventListener("click", Appear);

function Appear() {
    var picid = this.getAttribute('data-img');
    var pic = document.getElementById(picid);
    var x = document.querySelectorAll("img");
    var dem = 0;
    for (var i = 0; i < x.length; i++) {
        if (x[i] == pic && pic.className != "hide") dem++;
        x[i].className = "hide";
    }
    if (dem == 0) {
        if (pic.className == "imageAll") pic.className = "hide";
        else pic.className = "imageAll";
    }
}
