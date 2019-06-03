var mydata = JSON.parse(data);
var string = `<table><tr><th>name</th><th>Age</th></tr>`
mydata.sort(function (a, b) {
  return(a.age - b.age)
})
mydata.map((value, index) => {
   string += `<tr><td>${value.name}</td><td>${value.age}</td></tr>`

})
string+=`</table>`

document.getElementById("tb1").innerHTML= string
document.getElementById("tb2").innerHTML= `<table><tr><th>name</th><th>Age</th></tr></table>`
document.getElementById("tb1").style.display = "none";
document.getElementById("tb2").style.display = "none";

function myFunction() {
  var tb1 = document.getElementById("tb1");
  var tb2 = document.getElementById("tb2");
  if (tb1.style.display === "none") {
    tb1.style.display = "block";
    tb2.style.display = "none"
  } else {
    tb1.style.display = "none";
    tb2.style.display = "block";
  }
}
