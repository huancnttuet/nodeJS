var mydata = JSON.parse(data);
var string = `<table><tr><th>name</th><th>Age</th></tr>`
mydata.map((value, index) => {
   string += `<tr><td>${value.name}</td><td>${value.age}</td></tr>`

})
string+=`</table>`
document.getElementById("tb").innerHTML= string
