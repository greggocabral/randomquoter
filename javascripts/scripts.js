var quote = ""; 
var author = "";

function getQuote() {
  
  $("#quote").html("Loading quote...");
  $("#author").html("");
  
  $.get( "https://crossorigin.me/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en", function( data )       {
      quote = '"' + data.quoteText + '"';
      author = ' - ' + data.quoteAuthor;
      $("#quote").html(quote);
      $("#author").html(author);
   });
}

$(document).ready(function() {
        
   getQuote();
      
   $("#nextQuote").on("click", function() {
     getQuote();
   });
   
   $("#tweet").on("click", function() {
     var twtLink = 'http://twitter.com/home?status=' +encodeURIComponent(quote+author);
     window.open(twtLink,'_blank');
   });
});

