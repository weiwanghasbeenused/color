$(document).ready(function(){
	var colors = ["blue","red","yellow","green","black","purple","orange"];

	$(".colors").click(function(){
		var wc = $(this).attr("id").substring(5);
		wc = colors[parseInt(wc)-1];
            console.log(wc);
      // $.ajax({
      //   type: "POST",
      //   url: "/portfolio_color.php",
      //   data: wc,
      //   cache: false,
      //   success: function(html){
      //       console.log("ya");
      //   } 
      // });
		$.post("portfolio_color.php", JSON.stringify(wc),
	    function(result) {
	    	console.log("yaya");
	    });

   });

	
});