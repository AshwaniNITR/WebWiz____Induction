$(".changecol").click(function(){
    if($("body").hasClass("change1")===true){
        $("body").removeClass("change1").addClass("change2");
        
        setTimeout(function(){alert("Changed Theme successfully")},50);
    }
    else if($("body").hasClass("change2")===true){
        $("body").removeClass("change2").addClass("change3");
        
        setTimeout(function(){alert("Changed Theme successfully")},50);

    }
    else{
        $("body").removeClass("change3").addClass("change1");
       
        setTimeout(function(){alert("Changed Theme successfully")},50);

        }
});

setInterval(function(){
    setTimeout(function(){
    $("#first").addClass("opacity");
},100);
setTimeout(function(){
    $("#second").addClass("opacity");
},200);
setTimeout(function(){
    $("#third").addClass("opacity");
},300);
setTimeout(function(){
    $("#fourth").addClass("opacity");
},400);
setTimeout(function(){
    $("#fifth").addClass("opacity");
},500);
setTimeout(function(){
    $("#sixth").addClass("opacity");
},600);
setTimeout(function(){
    $(".webwiz").addClass("opacity");
},800);
setTimeout(function(){
    $(".common").removeClass("opacity");
    $(".webwiz").removeClass("opacity");
},1000);

},1150);

//slider _first cont
var i=1;
$(".nextf").click(function(){
    i++;
    if(i===4){
        i=1;
    }
    $(".f").attr("src","./animal"+i+".jpeg");
    
   
})

$(".previousf").click(function(){
    i--;
    if (i===0) {
        i = 3;
    }
    $(".f").attr("src", "./animal" +i+ ".jpeg");
     // var j=i-1;
    // if(j===0){
    //     j=3;
    // }
    // $(".one").attr("src","./animal"+j+".jpeg");
})

//second cont
$(".nexts").click(function(){
    i++;
    if(i===4){
        i=1;
    }
    $(".s").attr("src","./forest"+i+".jpeg");
    
   
})

$(".previouss").click(function(){
    i--;
    if (i===0) {
        i = 3;
    }
    $(".s").attr("src", "./forest" +i+ ".jpeg");
});
//third cont
$(".nextt").click(function(){
    i++;
    if(i===4){
        i=1;
    }
    $(".t").attr("src","./volcano"+i+".jpeg");
    
   
})

$(".previoust").click(function(){
    i--;
    if (i===0) {
        i = 3;
    }
    $(".t").attr("src", "./volcano" +i+ ".jpeg");
});
//fourth cont
$(".nextfo").click(function(){
    i++;
    if(i===4){
        i=1;
    }
    $(".fo").attr("src","./beach"+i+".jpeg");
    
   
})

$(".previousfo").click(function(){
    i--;
    if (i===0) {
        i = 3;
    }
    $(".fo").attr("src", "./beach" +i+ ".jpeg");
});
//fifth cont
$(".nextfi").click(function(){
    i++;
    if(i===4){
        i=1;
    }
    $(".fi").attr("src","./glacier"+i+".jpeg");
    
   
})

$(".previousfi").click(function(){
    i--;
    if (i===0) {
        i = 3;
    }
    $(".fi").attr("src", "./glacier" +i+ ".jpeg");
});
//sixth cont
$(".nextsi").click(function(){
    i++;
    if(i===4){
        i=1;
    }
    $(".si").attr("src","./waterfall"+i+".jpeg");
    
   
})

$(".previoussi").click(function(){
    i--;
    if (i===0) {
        i = 3;
    }
    $(".si").attr("src", "./waterfall" +i+ ".jpeg");
});
//clock

function clock(){
    var date=new Date();
    var seconds=date.getSeconds();
   if(seconds<10){
    $(".seconds").text("0"+seconds);
   }
   else{
    $(".seconds").text(seconds);
   }
    var minutes=date.getMinutes();
    if(minutes<10){
        $(".minutes").text("0"+minutes+":");
       }
       else{
        $(".minutes").text(minutes+":");
       }
    var hours=date.getHours();
    if(hours<10){
        $(".hour").text("0"+hours+":");
       }
    else if(hours>=10 && hours<=12 ){
        $(".hour").text(hours+":");
    }
    else if(hours>=12){
        $(".hour").text("0"+(hours-12)+":");
    }
    else if(hours>=22 && hours<=24){
        $(".hour").text((hours-12)+":");
    }
    var cdate=date.getDate();//cdate:-date to be used in clock
    var month=date.getMonth();
    var year=date.getFullYear();
    if(date<10 || month<9){
    $(".date").text("0"+cdate+"- 0"+(month+1)+"-"+year)
    }
    else{
        $(".date").text("0"+cdate+"-"+(month+1)+"-"+year)
    }
    if(hours>=12){
        $(".ampm").text("PM");
    }
    else{
        $(".ampm").text("AM");
    }
    var day=date.getDay();
    if(day===0){
        $(".day").text("Sunday");
    }
    else if(day===1){
        $(".day").text("Monday");
    }
    else if(day===2){
        $(".day").text("Tuesday");
    }
    else if(day===3){
        $(".day").text("Wednesday");
    }
    else if(day===4){
        $(".day").text("Thursday");
    }
    else if(day===5){
        $(".day").text("Friday");
    }
    else if(day===6){
        $(".day").text("Saturday");
    }
    
    
    
}
setInterval(function(){
    clock();
},1000);


