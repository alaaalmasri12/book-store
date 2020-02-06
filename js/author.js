
function author()
{
    var author=Array('William Shakespeare','Emily Dickinson',' H. P. Lovecraft','Leo Tolstoy');
    for(var i=0;i<=author.length;i++)
    {
        // alert("author name as been displayed in the console");
       // console.log(author[i]);

        document.write("<h5>your faviourite author is</h5>" +" "+ author[i]);
    }

}
author();