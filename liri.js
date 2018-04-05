// Initial packages
require("dotenv").config();
var request = require("request");
// var spotify = new Spotify(keys.spotify);
var keys = require('./keys');
const Twitter = require('twitter');
var client = new Twitter(keys.twitter);

var inputString = '';
for (i = 3; i < process.argv.length; i++) {
  inputString += process.argv[i] + " ";
}

console.log(inputString);


switch (process.argv[2]) {

  case 'my-tweets':
  //   client.get('search/tweets', { q: 'node.js' }, function (error, tweets, response) {
  //     console.log(tweets);


  //   });


    var params = { screen_name: 'L337LikeMe' };
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
      if (!error) {
        for (i = 0; i < tweets.length; i++){
          
          console.log(tweets[i].created_at);
          console.log(tweets[i].text);
        }
        
      }
    });

    break;
  case 'spotify-this-song':
    console.log('my-tweets');
    break;
  case 'movie-this':

    request("http://www.omdbapi.com/?apikey=" + keys.ombd.key + "&t=" + inputString, function (error, response, body) {

      // If the request was successful...
      if (!error && response.statusCode === 200) {

        //   * Title of the movie.
        //  * Year the movie came out.
        //  * IMDB Rating of the movie.
        //  * Rotten Tomatoes Rating of the movie.
        //  * Country where the movie was produced.
        //  * Language of the movie.
        //  * Plot of the movie.
        //  * Actors in the movie.
        console.log(JSON.parse(body).Title);
        console.log(JSON.parse(body).Year);
        console.log(JSON.parse(body).imdbRating);
        console.log(JSON.parse(body).Ratings[1].Value);
        // if (JSON.parse(body).Ratings[1] in JSON.parse(body)) {
        //   console.log(JSON.parse(body).Ratings[1].Value);
        //   console.log('test');          
        // }

        console.log(JSON.parse(body).Country);
        console.log(JSON.parse(body).Language);
        console.log(JSON.parse(body).Plot);
        console.log(JSON.parse(body).Actors);

      }
    });




    break;
  case 'do-what-it-says':
    console.log('my-tweets');
    break;

}