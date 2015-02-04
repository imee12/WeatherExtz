


function getWeather () {
  $.ajax({
   url: 'http://swapi.co/api/people/1/',

   type: 'GET',
   datatype: 'JSONP',
   success: function (data) {
     //console.log(instaPage.memeConfig.baseurl + "_Select_ByTrending";
     console.log(data);
     //_.each(data, function(item, idx, arr) {
      //_.each(item, function (currentItem, index, array) {
           $('body').append('<p>' + data.name + '</p>');
//  });
//});
 },
     error: function (error) {
     console.log(error);
   }
 })
}

getWeather();
