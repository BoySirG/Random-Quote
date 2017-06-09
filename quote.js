$(document).ready(function(){
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
			
		},
		error:function(){
			alert("Error");
		}
		});
	$("#newquote").on("click",function(){
		$.ajax({
		url:"http://api.forismatic.com/api/1.0/?method=getQuote&key=XXXXX&format=jsonp&jsonp=?&lang=en",
		dataType: "json",
		success:function(json){
			$("#bring").text(json.quoteText);
			$(".author").text(" -- "+json.quoteAuthor);
		
		},
		error:function(){
			alert("Error");
		}
		});
	});	
});
