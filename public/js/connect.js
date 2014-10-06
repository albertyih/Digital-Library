 $(function () {
  //   var flip=false;
  //   var nowCoutdown=false;
  //   var firstleft = $("#grid-6").offset().left;
  //   var firsttop =$("#grid-12").offset().top;
  //   var secondtop=$("#grid-35").offset().top;
  //   var secondleft=$("#grid-30").offset().left;
  //   var thirdleft=$("#grid-31").offset().left;
  //   var thirdtop=$("#grid-7").offset().top;
  //   var count_in;
  //   var distance = $("#grid-2").offset().left-$("#team-A").offset().left;
  //   var distance2 = $("#grid-12").offset().top-$("#grid-6").offset().top;
  //   var distance3 = $("#team-A").offset().left-$("#grid-2").offset().left;
  //   var distance4 = $("#grid-6").offset().top-$("#grid-12").offset().top;
  //   var grid_id = [
  //   "grid-1",
  //   "grid-2",
  //   "grid-3",
  //   "grid-4",
  //   "grid-5",
  //   "grid-6",
  //   "grid-12",
  //   "grid-18",
  //   "grid-24",
  //   "grid-29",
  //   "grid-35",
  //   "grid-34",
  //   "grid-33",
  //   "grid-32",
  //   "grid-31",
  //   "grid-30",
  //   "grid-25",
  //   "grid-19",
  //   "grid-13",
  //   "grid-7"
  // ]
  $("#team-A").hide();
  $("#team-B").hide();
  $("#team-C").hide();
  $("#team-D").hide();
  $("#team-E").hide();
  $("#team-F").hide();
  $("#team-G").hide();
  //       var displayWidth = $('#right-top').offset().left - $('#left-top').offset().left + $('#right-top').outerWidth();
  //   var displayHeight = $('#left-btm').offset().top - $('#left-top').offset().top + $('#right-top').outerHeight();
    
  //   var Left=[$("#team-A").offset().left,$("#team-B").offset().left,$("#team-C").offset().left,$("#team-D").offset().left,$("#team-E").offset().left,$("#team-F").offset().left,$("#team-G").offset().left];
  //   var Top=[$("#team-A").offset().top,$("#team-B").offset().top,$("#team-C").offset().top,$("#team-D").offset().top,$("#team-E").offset().top,$("#team-F").offset().top,$("#team-G").offset().top];
  //   var TeamName=["#team-A","#team-B","#team-C","#team-D","#team-E","#team-F","#team-G"];
  //   var location=[0,0,0,0,0,0,0];
  //   var currentscore=[0,0,0,0,0,0];
  //   var currentlocation=[0,0,0,0,0,0];
  //   var flag=false;
  //   var data = [[0, 0],[1, 0],[2, 0],[3, 0],[4, 0],[5, 0]];
  //   var growing=[0,0,0,0,0,0];
  //   var now_complete=0;
  //       var dataset = [{ label: "", data: data, color: " #0005ff" }];
  //       var ticks = [[0, "搖桿隊"], [1, "鞋子隊"], [2, "甜甜圈隊"], [3, "卡車隊"],[4, "保齡球隊"], [5, "電池隊"]];
  //       var MAX=0;
  //       var options = {
  //           colors: ["#029710", "#bbe44b", "#88e8a9", "#ffcb05"],
   
    
  //           series: {
  //               bars: {
  //                   show: true
  //               }
  //           },
  //           bars: {
  //               align: "center",
  //               barWidth: 0.5,
  //               fill: .80
  //           },
  //           xaxis: {
  //               axisLabel: "team",
  //               axisLabelUseCanvas: true,
  //               axisLabelFontSizePixels: 12,
  //               axisLabelFontFamily: 'Verdana, Arial',
  //               axisLabelPadding: 10,
  //               ticks: ticks

  //           },
  //           yaxis: {
  //             max: 50
  //           },
  //           // yaxis: {
  //           //     axisLabel: "Average Temperature",
  //           //     axisLabelUseCanvas: true,
  //           //     axisLabelFontSizePixels: 12,
  //           //     axisLabelFontFamily: 'Verdana, Arial',
  //           //     axisLabelPadding: 3,
  //           //     tickFormatter: function (v, axis) {
  //           //         return v + "°C";
  //           //     }
  //           // },
  //           legend: {
  //               noColumns: 0,
  //               labelBoxBorderColor: "#000000",
  //               position: "nw"
  //           },
  //           grid: {
  //               //hoverable: true,
  //               autoHighlight: true,
  //               borderWidth: 2,
  //               backgroundColor: { colors: ["#ffffff", "#ffffff"] }
  //           }
  //       };
  //        $.plot($("#flot-placeholder"), dataset, options);
    socket = io.connect('localhost:3000');
//     $('#flot-placeholder').hide();
//      socket.on('date', function(data) {
        
//        $('#flip').text(data.date);
//       });
//       socket.on('scorefirst', function(data) {
//         for (var i=0; i<6; i++){
//              var k = i+1;

//             currentscore[i] = data.score[i];
//            $('#team-'+k+'-score').find('button').html(currentscore[i]);
//         }
//  //alert(currentscore);
//       });
     
//       socket.on('flot', function(data) {
//        if($('#flot-placeholder').is(":visible") )  {
//           $('#flot-placeholder').hide();
//           $(".displayScore").show();

//        }
//        else{
//         clearInterval(count_in);
//         nowCoutdown=false;;
//           $(".event-front").hide();
//          $(".event-back").hide();
//          $("#q-answer").hide();
//           $('#flot-placeholder').show();
//           $(".displayScore").hide();
//           var different ;
//           var max = Math.max.apply(null, currentscore);
//           var max_index=currentscore.indexOf(max);
//            var min = Math.min.apply(null, currentscore);
//           var min_index=currentscore.indexOf(min);
//         ///alert(min_index);
//           var Flotcolor=["green","green","green","green","green","green"];
//           options.yaxis["max"]=parseInt(max)+parseInt(max/10);
//           now_complete=0;
//           different=parseInt(max)/30;
//           growing=[0,0,0,0,0,0];
//           // data = [[0, parseInt(currentscore[0])],[1, parseInt(currentscore[1])],[2, currentscore[2]],[3, currentscore[3]],[4, currentscore[4]],[5, currentscore[5]]];
//           // dataset = [{ label: "", data: data, color: "#5482FF" }];
//           // $.plot($("#flot-placeholder"), dataset, options);
          
//             var j= setInterval(function ()
//              {
              
//                now_complete=0;
//                for(var i=0;i<6;i++)
//                {
//                  if((growing[i]+different)<currentscore[i])
//                     growing[i]+=different;
//                 else
//                    {
//                     growing[i]=currentscore[i];
//                     now_complete+=1;
//                     }

//                 if(now_complete==6)
//                 {  Flotcolor[max_index]="gold";
//                    Flotcolor[min_index]="red";
//                    clearInterval(j);
//                 }
//                }
//          // data = [[0, parseInt(growing[0]), color: "red"],[1, parseInt(growing[1]), color: "green"],[2, growing[2], color: "red"],[3, growing[3], color: "green"],[4, growing[4], color: "red"],[5, growing[5], color: "red"]];
         
//           data = [{data: [[0,parseInt(growing[0])]], color: Flotcolor[0]}, 
//             {data: [[1,parseInt(growing[1])]], color: Flotcolor[1]},
//             {data: [[2,parseInt(growing[2])]], color: Flotcolor[2]},
//              {data: [[3,parseInt(growing[3])]], color: Flotcolor[3]},
//             {data: [[4,parseInt(growing[4])]], color: Flotcolor[4]},
//              {data: [[5,parseInt(growing[5])]], color: Flotcolor[5]}];



//           //dataset = [{ label: "", data: data }];
//           $.plot($("#flot-placeholder"), data, options);
//              }, 100);
//         }
        
//       });



//       socket.on('locationfirst', function(data) {
        
//       for(var j=0;j<7;j++) {
//           for(var i=0;i<data.locat[j];i++) {
//             if(location[j]<5)
//             {
//               $(TeamName[j]).css("left", $(TeamName[j]).offset().left+distance);
//               location[j]++;         
//             }
//             else if(location[j]>=5&&location[j]<10)
//             {
//               $(TeamName[j]).css("top", $(TeamName[j]).offset().top+distance2);     
//               location[j]++; 
//             }
//             else if(location[j]>=10&&location[j]<15)
//             {
//               $(TeamName[j]).css("left", $(TeamName[j]).offset().left+distance3);
//               location[j]++; 
//             }
//             else if(location[j]>=15&&location[j]<20)
//             {
//               $(TeamName[j]).css("top", $(TeamName[j]).offset().top+distance4);
//               location[j]++; 
//             }
//           }
//         }
//         for(var k=0;k<6;k++)
//           currentlocation[k]=location[k];
// //$("#test").text(location[0]);
          
//       });

//     // Listion to new score and update it
//     socket.on('score', function(data) {
//       $('#flot-placeholder').hide();
//       $(".displayScore").show();
//       $("#q-answer").hide();
//       $(".event-front").hide();
//         $( ".event-back" ).fadeOut('slow', function() {
//             //var j={};
//             var old = 25;
//             //var i = 0;
//             var point;
//             for (i=0; i<6; i++) {
//                 var k = i+1;
//                 point = data.score[i];
//                 if(currentscore[i] != point) {
//                     var nowscore = currentscore[i];
//                     var different = parseInt((point - currentscore[i]) / 10 );
//                     if(different==0)
//                       different=1;
//                     $("#test").text(different);
//                     if(different>0){
//                       for (var j = nowscore; j<point; j=j+different )
//                       {
//                         var end = point;
//                         var a = i+1;
//                         var b = a-1;
//                         var now = nowscore;
//                         $('#team-'+a+'-score').find('button').animate({fontSize: '+=1'}, 100, function() {
//                             $('#team-'+a+'-score').find('button').removeClass("btn-success");
//                             $('#team-'+a+'-score').find('button').addClass("btn-danger");
//                             now+=different;
//                             $('#team-'+a+'-score').find('button').html(now);
//                             if(now >= end) {  
//                                 $('#team-'+a+'-score').find('button').html(end);
//                                 $('#team-'+a+'-score').find('button').animate({fontSize: old});
//                                 $('#team-'+a+'-score').find('button').removeClass("btn-danger");
//                                 $('#team-'+a+'-score').find('button').addClass("btn-success");
//                             }
//                         });
//                       }
//                     }
//                       else{

//                       for (var j = nowscore; j>point; j=j+different )
//                       {
//                         var end = point;
//                         var a = i+1;
//                         var b = a-1;
//                         var now = nowscore;
//                         $('#team-'+a+'-score').find('button').animate({fontSize: '+=1'}, 100, function() {
//                             $('#team-'+a+'-score').find('button').removeClass("btn-success");
//                             $('#team-'+a+'-score').find('button').addClass("btn-danger");
//                             now+=different;
//                             $('#team-'+a+'-score').find('button').html(now);
//                             if(now <= end) {  
//                                 $('#team-'+a+'-score').find('button').html(end);
//                                 $('#team-'+a+'-score').find('button').animate({fontSize: old});
//                                 $('#team-'+a+'-score').find('button').removeClass("btn-danger");
//                                 $('#team-'+a+'-score').find('button').addClass("btn-success");
//                             }
//                         });
//                       }



//                       }

//                 }
//             currentscore[i]= point;
//             }
//         });
//     });
       
//     $('.butpro butstyle grid-img').click(function(event) {
//       alert("@@@");
//     //$('#displayArea').text($(this).)
//     });
//      var answer;
//      socket.on('Question', function(data) {
//        var ur='url('+data.url+')';
//        answer=data.A;

//        $('.q-img').attr("src", "");
//        $('#q-body').html('<img src="" class="q-img">');
//        $('#q-answer-text').html("");
//        $('.event-front').css("background-color", "#f8f8f8");

//        // show no more pic if priority < 0
//        if(parseInt(data.priority) < 0 && data.type != "Destiny" && data.type != "Opportunity"){
//          $('#q-title').html(data.type);
//          $('#q-score').html("沒有題目了...");
//          $('.event-front').css("background-image", 'url("/images/nomore.png")');
//          $(".event-front" ).fadeIn( 600, function(){});
//        } else {
//          $('.q-img').attr("src", "");
//          $('#q-body').html('<img src="" class="q-img">');
//          $('#q-answer-text').html("");
//          $('.event-front').css("background-color", "#f8f8f8");
//          $('.event-front').css("background-image", 'url("/images/card/geo_back.png")');
//          $('#q-title').html(data.type);
//          $('#q-score').html(data.score);
//           $( ".event-front" ).fadeIn( 600, function() {
//             // set question content
//             var question;
//             $('#q-title2').html(data.title);
//             $('#q-title2').css('font-size', '40px');
//             $('#q-title2').css('line-height', '40px');
//             if($('#q-title2').html().length > 11) {
//               if($('#q-title2').html().length > 21) {
//                 $('#q-title2').css('font-size', '30px');
//                 $('#q-title2').css('line-height', '30px');
//               } else {
//                 $('#q-title2').css('font-size', '32px');
//                 $('#q-title2').css('line-height', '32px');
//               }
//             }
//             if(data.Q.hasOwnProperty("text")) {
//               if(data.Q.text.length > 0)
//                 $('#q-body').html(data.Q.text);
//             } else if(data.Q.hasOwnProperty("list")) {
//               var que = "<ol>";
//               data.Q.list.forEach(function(k, i){
//                 que += "<li>" + k +"</li><br></br>";
//               });
//               que += "</ol>";
//               $('#q-body').html(que);
//             } else if(data.Q.hasOwnProperty("url")) {
//               var ur='url('+data.Q.url+')';
//               $('.q-img').attr("src", data.Q.url);
//             }

//             setTimeout(function(){
//             $ (".event-front").flip({
//                 speed: 300,
//                 direction: 'lr',
//                 //content: "this is "+data.Title,
//                 content: question,
//                 onBefore: function(){
//                   $("#overlay-back").show();
//                 },
//                 onEnd: function(){
//                   $('.event-front').hide();
//                   $('.event-back').show();
//                   $('.event-back').css("background-color", "#f8f8f8");
//                   $("#overlay-back").hide();
//                   $('#q-answer').hide();
//                   if(data.type == "Destiny" || data.type == "Opportunity"){
//                     $('#q-answer-text').html(answer.text);
//                     $('#q-answer').show();
//                   }
//                 }
//             })}, 2500);
//             });
         
//           flip=true;
//        }
//       });

//       socket.on('countdown', function(data) {
//                 countdown(10);
//                  });


//         function countdown(times)
//         {
//             //alert(flip + nowCoutdown);
//             if(flip==true&&nowCoutdown==false)
//                     {
//                        //var times=20;
//                        nowCoutdown=true;
//                        count_in= setInterval(function ()
//                        {
//                           if(times==0)
//                            { 
//                             $('#q-answer-text').html("time up!");
//                             nowCoutdown=false;;
//                             clearInterval(count_in);
//                            }

//                           $('#q-answer-text').empty();
//                           $('#q-answer-text').html(times);
//                           $('#q-answer').show();
//                           times--;
                         
//                       }, 1000);
                      
//                     }


//         }






//          socket.on('next', function(data) {
//                  clearInterval(count_in);
//                  nowCoutdown=false;;
//                  if(flip==true&&nowCoutdown==false)
//                     {
//                       if(answer.hasOwnProperty("text")) {
//                        // $('.event-back').append("<br>"+answer.text+"</br>");
//                         $('#q-answer-text').html(answer.text);
//                         $('#q-answer').show();
//                       } else if(answer.hasOwnProperty("list")) {
//                       } else if(answer.hasOwnProperty("url")) {
//                         var ur='url('+answer.url+')';
//                         // $('.event-back').css("background-image", ur);
//                         $('.q-img').attr("src", answer.url);
//                       }
//                     }
//                  });

//        socket.on('Steps', function(data) {
//         //$('#flip').text(data.steps);
//               // console.log(data.team);
//               // console.log(data.steps);
//          $('#flot-placeholder').hide();
//          $(".displayScore").show();
//          clearInterval(count_in);
//          nowCoutdown=false;;
//        if(flip==true){
//          $(".event-back").flip({
//             speed: 100,
//                 direction: 'lr',
//                 content: "",
//                 onAnimation: function(){},
//                 onEnd: function(){
//                 }
//             });
//          flip=false;  
//         }
//         $(".event-front").hide();
//         $(".event-back").hide();
//         $("#q-answer").hide();
//         var strUser= data.steps;
//         var select_team;
//         var team=data.team;
//         index=team-1;
     
//        select_team=TeamName[index];
//          var k=0;

// if(strUser>=0){
//    if((parseInt(location[index])+parseInt(strUser))>=20)
//         {flag=true;
//           // alert("終點！"+location[index]+strUser+(location[index]+strUser));
//         }
//     for(var i=0;i<strUser;i++) {
//         if(location[index]<5)
//         {
//         $(select_team).animate({ left:"+="+distance }, "slow",function(){
//           currentlocation[index]++;
//           check(select_team,strUser,k,index);k++;
          
//         });
//         location[index]++;         

//         }
//         else if(location[index]>=5&&location[index]<10)
//         {
//         $( select_team).animate({ 'marginTop':"+="+distance2 }, "slow" ,function(){
//            currentlocation[index]++;
//            check(select_team,strUser,k,index);k++;
           
//         });            
//         location[index]++; 
//         }
//         else if(location[index]>=10&&location[index]<15)
//         {
//         $(select_team).animate({ left:"+="+distance3 }, "slow" ,function(){
//           currentlocation[index]++;
//           check(select_team,strUser,k,index);k++;

//         });
//         location[index]++; 
//         }
   
//         else if(location[index]>=15&&location[index]<20)
//         {
//         $(select_team).animate({ 'marginTop':"+="+distance4 }, "slow" ,function(){
//           currentlocation[index]++;
//           check(select_team,strUser,k,index);k++;
          
//         });
//         location[index]++; 
//         }
//         if(location[index]==20)
//             location[index]=0;


//        //$("teststep").text(currentlocation[index]);   

//     }



// }
// else
// {   
//     strUser=strUser*(-1);

//     for(var i=0;i<strUser;i++) {
//         if(0<location[index]&&location[index]<=5)
//         {
//         $(select_team).animate({ left:"-="+distance }, "slow",function(){
//           currentlocation[index]--;
//           check(select_team,strUser,k,index);k++;
           
//         });
//         location[index]--;         

//         }
//         else if(location[index]>5&&location[index]<=10)
//         {
//         $( select_team).animate({ 'marginTop':"-="+distance2 }, "slow" ,function(){
//           currentlocation[index]--;
//           check(select_team,strUser,k,index);k++;
          
//         });            
//         location[index]--; 
//         }
//         else if(location[index]>10&&location[index]<=15)
//         {
//         $(select_team).animate({ left:"-="+distance3 }, "slow" ,function(){
//           currentlocation[index]--;
//           check(select_team,strUser,k,index);k++;

//         });
//         location[index]--; 
//         }
   
//         else if(location[index]>15||location[index]==0)
//         {
//         $(select_team).animate({ 'marginTop':"-="+distance4 }, "slow" ,function(){
//           currentlocation[index]--;
//           check(select_team,strUser,k,index);k++;

//         });
//         location[index]--; 
//         }
//         if(location[index]==-1)
//             location[index]=19;

//     }



// }

//  socket.emit('location', {'locat': location});
             
 
//   var step_on;

//     function check(select_team,steps,now_steps,indexN){
//       var text;
//          if(currentlocation[index]==20)
//             currentlocation[index]=0;
//               if(currentlocation[index]==-1)
//             currentlocation[index]=19;
//        // $("div.butpro.butstyle").each(function(index,object) {
//            // if($(select_team).offset().left>=$(this).offset().left&&$(select_team).offset().left<=($(this).offset().left+distance))
//                // if($(select_team).offset().top>=$(this).offset().top&&$(select_team).offset().top<=($(this).offset().top+distance2))
//               //  {
//                     //$(".displayArea").text($(this).find(".sub").find('h2').text());   
//                    // step_on=$(this).attr('id');
//                    // $(".event").text($(this).find(".sub").find('h2').text());   
//                     //text=$(this).find(".sub").find('h2').text();
//                     //$('#test').text(step_on);
//                     step_on=grid_id[currentlocation[index]];
//                     if(step_on=="grid-1"&&flag==true){
//                        //alert("!!");
//                                 flag=false; 
//                                 var old=16;                               
//                                 var point=10000;                                                                     
//                                        var nowscore=currentscore[indexN];               
//                                        var different= parseInt((point) /20);                                                   
//                                        for (var j=0;j<point;j=j+different)
//                                             {
//                                               var end=point+nowscore;
//                                               var a=indexN+1;
//                                               var b=a-1;
//                                               var now=nowscore; 
//                                               //var offset= parseInt(end-currentscore[i]);       
//                         $('#team-'+a+'-score').find('button').animate({fontSize: '+=1'}, 100, function() {
//                             $('#team-'+a+'-score').find('button').removeClass("btn-success");
//                             $('#team-'+a+'-score').find('button').addClass("btn-danger");
//                             now+=different;
//                             $('#team-'+a+'-score').find('button').html(now);
//                             if(now >= end) {  
//                                 $('#team-'+a+'-score').find('button').html(end);
//                                 $('#team-'+a+'-score').find('button').animate({fontSize: old});
//                                 $('#team-'+a+'-score').find('button').removeClass("btn-danger");
//                                 $('#team-'+a+'-score').find('button').addClass("btn-success");
//                             }
//                         });



//                                           }      
//                                     currentscore[indexN]+= point;
//                                         socket.emit('score', {
//                                           'team': indexN,
//                                           'score':point
//                                            });
                                                                
//                           }

//                // }
//            // });

//         if(steps==now_steps+1)
//            { //flips();
//             //alert(location[index]);
//             //alert(currentlocation[index]);
//              socket.emit('gui',{
//              'ID':step_on,
//              'text':text
//                      });
//            }


//     }

 //  $(".building").click(function()
 //  {
 //  alert($(this).attr('id'));

 // //socket.emit("TEST");

 //  });

    // function scorechange(team,point){
    //       var k=team+1;
    //        var fontSize = $("#"+k).css('font-size');
    //         var j= setInterval(function ()
    //         {
    //           if (currentscore[team] == point)
    //           {
                
    //              $("#"+k).animate({fontSize: '+=1'});
    //              clearInterval(j);
    //           }
    //           else
    //           {
    //             alert("!!");
    //             currentscore[team]++;
    //             $("#"+k).text("team "+k+" : "+currentscore[team]).animate({fontSize: '+=1'}, 100);
    //         }
    //         }, 100);



    // }

    //});
});
