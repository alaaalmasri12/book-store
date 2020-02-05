
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
if(randombook1>randombook2)
{
    document.querySelector("h1").innerHTML="book1 is the winner";
}
else
{
    document.querySelector("h1").innerHTML="book2 is the winner"
}

switch(catagory)
{
    case "drama":
        var randomimage1="drama" + randombook1 + ".jpg";
        var randomimage2="drama" + randombook2 + ".jpg";
        
        var imagesource1= "images/drama/" + randomimage1;
        var imagesource2= "images/drama/" + randomimage2;
        var image1=document.querySelectorAll(".book-img1")[0];
var image2=document.querySelectorAll(".book-img2")[0];
image1.setAttribute("src",imagesource1);
image2.setAttribute("src",imagesource2);
break;
case "fantasy":
    var randomimage1="fantasy" + randombook1 + ".jpg";
    var randomimage2="fantasy" + randombook2 + ".jpg";
    
    var imagesource1= "images/fantasy/" + randomimage1;
    var imagesource2= "images/fantasy/" + randomimage2;
    var image1=document.querySelectorAll(".book-img1")[0];
var image2=document.querySelectorAll(".book-img2")[0];
image1.setAttribute("src",imagesource1);
image2.setAttribute("src",imagesource2)
break;
case"kids":
var randomimage1="kids" + randombook1 + ".jpg";
var randomimage2="kids" + randombook2 + ".jpg";

var imagesource1= "images/kids/" + randomimage1;
var imagesource2= "images/kids/" + randomimage2;
var image1=document.querySelectorAll(".book-img1")[0];
var image2=document.querySelectorAll(".book-img2")[0];
image1.setAttribute("src",imagesource1);
image2.setAttribute("src",imagesource2)
break;
default:
var randomimage1="book" + randombook1 + ".jpg";
var randomimage2="book" + randombook2 + ".jpg";

var imagesource1= "images/" + randomimage1;
var imagesource2= "images/" + randomimage2;
var image1=document.querySelectorAll(".book-img1")[0];
var image2=document.querySelectorAll(".book-img2")[0];
image1.setAttribute("src",imagesource1);
image2.setAttribute("src",imagesource2)
}
function delivery() {
    var payment=window.prompt("how do you prefer buying books");
    switch (payment) {
        case "credit":
            var firstname = window.prompt("whats your first name")
var lastname =window.prompt("whats your last name");
var text3 = firstname.concat(" ", lastname);
            var creditnumber=window.prompt("enter your credit number ");
            var air=confirm("do you prefer shipping it through a plane");
            var transport=confirm("do you prefer shipping it through a shipping compeny");
            if(creditnumber.length<4)
            {
                alert("the credit number must be at least 16 number")
            }
            
            alert("your shippment will be arriving soon " +" " +text3);
            break;
            case "cash":
                alert("vist our store in amman garden street");
                break;
        default:
            alert("your shippment will take some time keep in contact" + ""+text3);
            break;
    }
}
