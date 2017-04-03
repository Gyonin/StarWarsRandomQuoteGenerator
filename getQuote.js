$(document).ready(function(){
  
  var randomQuote, randomAuthor;
 
  getQuote();
  
  function getQuote(){
    
    var quotes = ["It’s not my fault.", "Your focus determines your reality.", "Do. Or do not. There is no try.", 
	"In my experience there is no such thing as luck.", "Fear leads to anger, anger leads to hate, hate leads to suffering.", 
	"Women always figure out the truth. Always."]
    var authors = ["- Han Solo", "– Qui-Gon Jinn", "-Yoda", "- Obi-Wan Kenobi", "-Yoda", "- Han Solo"]

    var number = Math.floor((Math.random()*quotes.length));
    randomQuote = quotes[number];
    randomAuthor = authors[number];

    $(".quote").text(randomQuote);
    $(".author").text(randomAuthor);

  };
    
  $("#quoteButton").on("click", function(){ 
    getQuote();
  });

  $("#tweetButton").on("click", function(){ 
    window.open("https://twitter.com/intent/tweet?text="+randomQuote+" "+randomAuthor);
  });
  
  
});