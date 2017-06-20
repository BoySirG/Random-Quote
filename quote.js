
		$.ajax({
			url:"http://api.forismatic.com/api/1.0/?method=getQuote&key=XXXXX&format=jsonp&jsonp=?&lang=en",
			dataType: "json",
			success:function(json){
				$("#bring").text(json.quoteText);
				if(json.quoteAuthor === ''){
					$(".author").text(" -- Unknown");
				}else{
					$(".author").text(" -- "+json.quoteAuthor);
				}
			 tweeturl = "https://twitter.com/intent/tweet?text="+json.quoteText+" by "+json.quoteAuthor+"&hashtags=famousQuotes";
			 $(".twitter-share-button").attr("href", tweeturl);
			},
			error:function(){
				alert("A problem occurred and we couldnt retrieve a new quote. please try again");
			}
			});
		
	
}
$(document).ready(function(){
	newquote();
	$("#newquote").on("click",function(){
		newquote();
	});	
});

