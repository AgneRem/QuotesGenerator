$(document).ready(function(){
  var randomQuote;
  var randomNum;
  var author;
  getQuote();
  function getQuote (){
    /* var quotes = ["Hello World", "Hello Sea", "Tralialia"];
    var author1 = ["-Author1", "-Author2", "-Author3"];

    randomNum = Math.floor((Math.random()*quotes.length));
    randomQuote = quotes[randomNum];
    author = author1[randomNum];

    $(".quote").text(randomQuote);
    $(".author").text(author)*/

    var colors = ["rgb(141, 42, 42)", "rgb(121, 225, 204)", "rgb(121, 142, 225)", "rgb(110, 21, 101)"];
    randomNum = Math.floor((Math.random()*colors.length));
    var color = colors[randomNum];

    var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
    $.getJSON(url, function(data){
      $(".quote").html('"'+data.quoteText+'"');
      $(".author").html("-"+data.quoteAuthor);
      randomQuote = data.quoteText;
      author = data.quoteAuthor;
      $("body").css({backgroundColor:color,
                    "transition":"background-color 1000ms linear"});
      $(".quotes").css({"color":color,
                        "transition":"color 1000ms linear"});
      $(".fa").css({backgroundColor:color,
                   color:'white',
                   border:'1px solid lightgrey'});
      $(".btn").css("color", color);
      $(".fa").on("mouseover", function(){
        this.style.backgroundColor = "white",
        this.style.color = color
  });
       $(".fa").on("mouseleave", function(){
        this.style.backgroundColor = color,
        this.style.color = "white"
  });
    });
  };

  $("#tweet").on("click", function(){
    window.open("https://twitter.com/intent/tweet?text="+randomQuote+" -"+author);
  });

  $("#newQuote").on("click", function(){
    getQuote();
  });

});
