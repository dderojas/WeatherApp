//Work in progress

$(document).ready(function(){
   var long;
  var lat;
  var url;
  
  navigator.geolocation.getCurrentPosition(function(position){
  long= position.coords.longitude;
  lat= position.coords.latitude;
    
  
  
    
    var url= 'https://crossorigin.me/https://api.darksky.net/forecast/aa5f9f5e09574a85406a684cafdeabe2/'+lat+','+long;  
  
  
  $.getJSON(url, function(info){
    var fTemp= info.currently.temperature;
    var cTemp= (fTemp-32)*5/9;
    var type= info.currently.icon;
    $("#weatherType").html(info.currently.icon);
    $("#temperature").html(info.currently.temperature + ' (F)');
    $("#gust").html(info.currently.windSpeed +' mph');
    
    //Click to convert to celsius
    $("#cel").on("click",function(){
      $("#temperature").html(cTemp.toFixed(1) + ' (C)');
    });
    
    //Click to convert to fahrenheit
    $("#far").on("click",function(){
      $("#temperature").html(fTemp.toFixed(1) + ' (F)');
    });
    
    if(type=='clear-day'){
      $('body').css({'background-image':'url(https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Weather_Icons_-_skc.svg/2000px-Weather_Icons_-_skc.svg.png)','background-repeat':'no-repeat','background-position':'center'})
      }
    
    else if(type==='rain'){
      $('body').css({'background-image':'url(https://png.icons8.com/rainy-weather/win8/1600)','background-position':'center','background-repeat': 'no-repeat'})
    }
    
    else if(type==='partly-cloudy-day')
      $('body').css({'background-image':'url(https://cdn2.iconfinder.com/data/icons/pix-glyph-set/50/520546-cloud-512.png)','background-position':'center','background-size':'900px','background-repeat':'no-repeat'})
  }); 
    }); 
  
  
    });
  
  

