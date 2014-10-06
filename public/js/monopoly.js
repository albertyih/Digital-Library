window.onload = function(e){

  // Define Team Position Offest
  $('#team-A').css("left", $("#grid-1").offset().left+10);
  $('#team-B').css("left", $("#grid-1").offset().left+40);
  $('#team-C').css("left", $("#grid-1").offset().left+10);
  $('#team-C').css("top", $("#grid-1").offset().top+30);
  $('#team-D').css("left", $("#grid-1").offset().left+40);
  $('#team-D').css("top", $("#grid-1").offset().top+30);
  $('#team-E').css("left", $("#grid-1").offset().left+10);
  $('#team-E').css("top", $("#grid-1").offset().top+60);
  $('#team-F').css("left", $("#grid-1").offset().left+40);
  $('#team-F').css("top", $("#grid-1").offset().top+60);
  $('#team-G').css("left", $("#grid-1").offset().left+60);
  $('#team-G').css("top", $("#grid-1").offset().top);

	var distance = $("#grid-2").offset().left-$("#team-A").offset().left;
	var distance2 = $("#grid-12").offset().top-$("#grid-6").offset().top;
	var distance3 = $("#team-A").offset().left-$("#grid-2").offset().left;
    var distance4 = $("#grid-6").offset().top-$("#grid-12").offset().top;
	var displayWidth = $('#right-top').offset().left - $('#left-top').offset().left + $('#right-top').outerWidth();
	var displayHeight = $('#left-btm').offset().top - $('#left-top').offset().top + $('#right-top').outerHeight();
	
	// Set The Position, Width, Height of displayArea
	$('.displayArea').css("left", $('#left-top').offset().left);
	$('.displayArea').css("top", $('#left-top').offset().top);
	$('.displayArea').css("width", displayWidth);
	$('.displayArea').css("height", displayHeight);

	// Set The Position, Width, Height of event-front
	$('.event-front').css("left", $('#left-top').offset().left);
	$('.event-front').css("top", $('#left-top').offset().top);
	$('.event-front').css("width", displayWidth);
	$('.event-front').css("height", displayHeight);

	// Set The Position, Width, Height of event-back
	$('.event-back').css("left", $('#left-top').offset().left);
	$('.event-back').css("top", $('#left-top').offset().top);
	$('.event-back').css("width", displayWidth);
	$('.event-back').css("height", displayHeight);

	// Replace the Conetent of event-front
	// $('.event-front').find('h2').html('');


	$('.event').css("left", $('#left-top').offset().left);
	$('.event').css("top", $('#left-top').offset().top);
	$('.event').css("width", displayWidth);
	$('.event').css("height", displayHeight);
    $('.event').css("background-color", 'red');
    $('.event').css("display", "none");

	var Left=[$("#team-A").offset().left,$("#team-B").offset().left,$("#team-C").offset().left,$("#team-D").offset().left,$("#team-E").offset().left,$("#team-F").offset().left,$("#team-G").offset().left];
	var Top=[$("#team-A").offset().top,$("#team-B").offset().top,$("#team-C").offset().top,$("#team-D").offset().top,$("#team-E").offset().top,$("#team-F").offset().top,$("#team-G").offset().top];
	var A,B,C,D,E,F,G;
    var HRBB={





    }

    var step_on;
  $(".building").click(function()
  {

    socket.emit("click_poster",$(this).attr('id'));

  });
 socket.on('poster', function(data){
	$(".grid-img").each(function(index, val) {

		if(index<data.length)
	       $(this).find('img').attr('src',data[index]);
	   //alert("!!");
	});


 });
 socket.on("returninfo",function(data)
 	{ //alert(data.title);
 			//$("#right-pic").html(" title: "+data.title +"</br> time: "+data.time+"</br> category:"+data.category+"</br> building posted: "+data.building);
 			if(data.title.length!=0)
 				$("#tit").html(data.title);
 			else
 				$("#tit").html("&nbsp");
 			if(data.time.length!=0)
 				$("#time").html(data.time);
 			else
 				$("#time").html("&nbsp");
 			if(data.category.length!=0)
 				$("#category").html(data.category);
 			else
 				$("#category").html("&nbsp");
 			if(data.building.length!=0)
 				$("#building").html(data.building);
 			else
 				$("#building").html("&nbsp");


 	});
 
    $('.butpro').click(function() {

          var im=$(this).find('img').attr('src');
          //alert(im);
          $(".displayArea").find('img').attr('src',im);
          socket.emit("nowclick", im);


        });


	function check(select_team,steps,now_steps){
		
		$("div.butpro.butstyle").each(function(index,object) {
			if($(select_team).offset().left>=$(this).offset().left&&$(select_team).offset().left<=($(this).offset().left+distance))
				if($(select_team).offset().top>=$(this).offset().top&&$(select_team).offset().top<=($(this).offset().top+distance2))
				{
					//$(".displayArea").text($(this).find(".sub").find('h2').text());	
					step_on=$(this).find(".sub").find('h2').text();	
					$(".event").text($(this).find(".sub").find('h2').text());	

				}
			});

		if(steps==now_steps+1)
			flips();


	}
//$('#flip').click(function() {
	function flips(){
		 //$( ".event" ).fadeIn( 100, function() {});

	 		setTimeout(function(){
			$ (".event").flip({
				direction: 'lr',
				content: "",
				onAnimation: function(){},
				onEnd: function(){
					$('.event').css("background-image", "url(\"images/card/tax.jpg\")")
					$('.event').css("background-color", 'red');
				}
			})}, 1000);

	 	// $ (".event").revertFlip();
	 	flip=true;
		}

//);



}





