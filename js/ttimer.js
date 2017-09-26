var t0 = document.getElementById("languages");
var t1 = document.getElementById("ide");
var t2 = document.getElementById("other");
var n = 0;

function show(i) {
  if (i == 0) {
    t0.style.display = "none";
    t2.style.display = "none";
    t1.style.display = "block";
  } else if (i==1) {
    t0.style.display = "none";
    t1.style.display = "none";
    t2.style.display = "block";
  } else {
    t1.style.display = "none";
    t2.style.display = "none";
    t0.style.display = "block";
  }
}
