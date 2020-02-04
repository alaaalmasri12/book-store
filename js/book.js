var name=window.prompt("whats your name???");
var age=window.prompt("whats your age");
var price=window.prompt("what is your expected price book on this site?");
var catagory=window.prompt("whats your favourite catagory");
if(price>=200)
{
alert("that an expensive book mr" +" "+name);
}
else if(price<=100 && price >50)
{
    alert("thats a good book to buy");
}
else
{
    alert("you are poor go to work and get money");
}
var randombook1=Math.floor(Math.random()*6)+1;
var randombook2=Math.floor(Math.random()*6)+1;

var randomimage1="book" + randombook1 + ".jpg";
var randomimage2="book" + randombook2 + ".jpg";

var imagesource1= "images/" + randomimage1;
var imagesource2= "images/" + randomimage2;

var image1=document.querySelectorAll(".book-img1")[0];
var image2=document.querySelectorAll(".book-img2")[0];
image1.setAttribute("src",imagesource1);
image2.setAttribute("src",imagesource2)
if(randombook1>randombook2)
{
    document.querySelector("h1").innerHTML="book1 is the winner";
}
else
{
    document.querySelector("h1").innerHTML="book2 is the winner"
}

