


function getWeather () {
  $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?q=London,uk',
        type: 'GET',
        dataType: 'JSONP',
        success: function (data) {
          console.log(data);
          _.each(data, function(weather, idx, arr) {
            _.each(weather, function(description, idx, arr) {
            $("body").append('<p>' + description + '</p>');
          });
});
        },
        error: function (error) {
          console.log(error);
        }
      });
    }

getWeather();
