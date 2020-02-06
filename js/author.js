
function author()
{
    
    var authors=window.prompt("whats your author name");
    var author=Array('William Shakespeare','Emily Dickinson',' H. P. Lovecraft','Leo Tolstoy','alaa');
    for(var i=0;i<=author.length;i++)
    {
        // alert("author name as been displayed in the console");
       // console.log(author[i]);
       if(author[i] === authors)
        document.write("<h5 style='text-align:center;">your faviourite author is</h5>" +" "+ author[i]);
    }

}
author();