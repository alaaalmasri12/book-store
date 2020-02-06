
function price()
{
    var name=window.prompt("whats your name???");
var price=window.prompt("what is your expected price book on this site?");
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
<<<<<<< HEAD
var catagory=window.prompt("whats your favourite catagory");
=======
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

>>>>>>> 29c8a419a76cb95c8cce56e20a109d5c52530d7c
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


/*function booksuggest()
{
    var booktype=window.prompt("what kind of books do you like?")
    var age=window.prompt("whats your age");

    var bookcatagory=Array('horror','drama','comedy','thiriller');
    var i=0;
    while(i<=bookcatagory.length)
    {
    
        if(bookcatagory[i] === booktype  && age>25)
        {
 var message=alert("most sold horror book is Dracula check it out  kids are not allowed to read it!");
 break;
        }
       
        else if (bookcatagory[i] === booktype)
        {
           var message= alert("most sold drama book is Dracula check it out !");
           break;

        }
         else if (bookcatagory[i] == booktype)
        {
            var message=alert("most sold comedy book is Bossypants check it out !");
            break;
        }
        else if (bookcatagory[i] == booktype)
        {
            var message=alert("most sold comedy book is thiriler check it out !");
            break;
        }
        
    
        i++;   
}
}

*/
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
