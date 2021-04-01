var firstPlayerName = prompt("Enter Your Name:");

var randomNumber = Math.floor(Math.random() * 6) + 1;

var randomImage = "dice" + randomNumber + ".png";

var randomImageSurce = "images/" + randomImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSurce);

var secondPlayerName = prompt("Enter Opponent Name: ");

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImage2 = "dice" + randomNumber2 + ".png";

var randomImageSurce2 = "images/" + randomImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSurce2);

document.querySelector(".firstPlayerName").innerHTML=firstPlayerName;

document.querySelector(".secondPlayerName").innerHTML=secondPlayerName;

if (randomNumber > randomNumber2) {
    alert(firstPlayerName + "🎈🎈won🎈🎈");
} else if (randomNumber < randomNumber2) {
    alert(secondPlayerName + " 🎈🎈won🎈🎈");
} else {
    alert("😂Match Draw😂");
}
