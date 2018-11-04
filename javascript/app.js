$(document).ready(function () {

    // VARIABLES
    // -----------------------------
    var $input = $('#input');
    var $submit = $('#submit');
    var apiKey = "g9Ppz9QjUA9a57SESuuFhosLGIrmaUNS";
    var $imgHolder = $('.image-holder');
    var topics = ["Rupaul", "Kevin Hart", "Tamar Braxton"];
    var queryURL = "http://api.giphy.com/v1/gifs/search?&q=" + topics + "&limit=10&api_key=" + apiKey;



    // FUNCTIONS
    // -------------------------------

    // Prepopulated buttons
    function gifButtons() {
        $("#gif-button").empty();

        for (var i = 0; i < topics.length; i++) {
            var a = $("<button>");
            a.addClass("gif");
            a.attr("data-name", topics[i]);
            a.text(topics[i]);
            $("#gif-button").append(a);
        }
    };

    // Show gifs of prepopulated buttons
    function getTopic() {
        var gif = $(this).attr("data-name")
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            var rating = data.data[i].rating;
            var divRating = $("<div>").text("Rating " + rating);

        });
    }

    function createTopic() {
// gets gifs from prepopulated buttons
    }

    // need to make still and animated


    // User adds gify function - followed a step by step youtube video to get the user's input 
    $submit.on('click', function (event) {
        event.preventDefault();
        $imgHolder.empty();
        var inputVal = $input.val();
        getGiphy(inputVal);
        $input.val(' ');
    });

    function getGiphy(inputVal) {
        $.get("http://api.giphy.com/v1/gifs/search?&q=" + inputVal + "&limit=10&api_key=" + apiKey)
            .done(function (data) {
                for (var i = 0; i < 10; i++) {
                    var gifImg = data.data[i].images.downsized.url;
                    createGif(gifImg);

                }

            });
    };

    function createGif(gifImg) {
        var $newImg = $('<img>');
        $newImg.attr('src', gifImg);
        var rating = data.data[i].rating;
        var divRating = $("<div>").text("Rating " + rating);

        $imgHolder.prepend($newImg);
    }

    var queryURL = "http://api.giphy.com/v1/gifs/search?&q=" + topics + "&limit=10&api_key=g9Ppz9QjUA9a57SESuuFhosLGIrmaUNS";

    //        
    // $.ajax({
    //     url: queryURL,
    //     method: "GET"
    // }).then(function (response) {
    //     console.log(response);
    // })

    // LOGIC
    // -------------------------------
    gifButtons();

}); //End code



// console.log($(document.body));
   // // Variables


    //     // Functions
    //     function getGiphy() {

    //         var topic = $(this).attr("data-name");
    //        

    //             var gifDiv = $("<div class='gif'>")
    //             var rating = response.Rating;

    //             var pOne = $("<p>").text("Rating: " + rating);
    //             gifDiv.append(pOne);


    //         })
    //     }


  // function gotData(giphy) {
  //   for (var i = 0; i <giphy.data.length; i++)
  //   creatImg(data.data[i].images.original.url);
  // }



    // gifButtons();

  // make buttons with jquery for each topic
  // each button will populate their respective 