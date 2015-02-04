


function getStarWars () {
  var randomnumber=Math.floor(Math.random()*101)

  $.ajax({
   url: 'http://swapi.co/api/people/' + randomnumber + '/',

   type: 'GET',
   datatype: 'JSONP',
   success: function (data) {

     console.log(data);

           $('body').append('<p>' + data.name + '</p>');


 },
     error: function (error) {
     console.log(error);
   }
 })
}

getStarWars();
