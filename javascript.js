function test(message) {

    alert(message);
}
function sample() {

    document.write("Hello from sample.js!")

}
function sayhi(n) {
    document.write(n + "is");
}
function mouseover() {
    document.images["im1"].src = "logo.png";
}
function mouseout() {
    document.images["im1"].src = "logorouge.png";
}
function load() {
    document.images["im1"].src = "logorouge.png";
}
age = prompt("user age  ");
while ((isNaN(age)) || (age > 100)) {
    alert("erreur");
    age = prompt("user age  ");
}
var person = {
    fname: "John",
    lname: "Doe", age: 25
};
var text = "";
var x;
for (x in person) {
    text += person[x];
}
function affichjour() {
    d = new Date().getDay();
    console.log(d);
    switch (d) {
        case 0:
            document.getElementById("p1").innerHTML = "sunday";
            break;
        case 1:
            document.getElementById("p1").innerHTML = "monday";
            break;
        case 2:
            document.getElementById("p1").innerHTML = "tuesdayday";
            break;
        case 3:
            document.getElementById("p1").innerHTML = "wednsday";
            break;
        case 4:
            document.getElementById("p1").innerHTML = "thursday";
            break;
        case 5:
            document.getElementById("p1").innerHTML = "friday";
            break;
        case 6:
            document.getElementById("p1").innerHTML = "saturday";
            break;
    }

}
alert("accepter les coockies");
function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
/*var uid = prompt("user id ");
var pwd = prompt("password");
if (uid == "rahma") {
    alert("welcome");
}
else { alert("unvalid user "); };

alert("9" + 9);
alert(parseInt("9") + 9);
var myName = "You can use both single or double quotes for strings";
var test = "some string";

alert(test[7]);

alert(test.charAt(5));
alert("test".charAt(1));

alert("test".substring(1, 3));*/
