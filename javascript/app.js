
    var imgHolder = $('#image-holder');
    var $input = $('#input');
    var $submit = $('#submit');
    var apiKey = "g9Ppz9QjUA9a57SESuuFhosLGIrmaUNS";


$(document).ready(function () {

    // FUNCTIONS
    // -------------------------------
    var topics = ["Rupaul", "Kevin Hart", "Tamar Braxton", "French Bulldogs"];
    function renderButtons() {
        $("#image-holder2").empty();
        for (var i = 0; i < topics.length; i++) {
            var a = $("<button>");
            a.addClass("gif");
            a.attr("data-type", topics[i]);
            a.text(topics[i]);
            $("#image-holder2").append(a);
        }
    }

    renderButtons();
    $(document).on("click",'.gif',function(){
        $(this).addClass("test");
        var buttonValue=$(this).attr('data-type');

        var queryURL = "http://api.giphy.com/v1/gifs/search?&q=" + buttonValue + "&limit=10&api_key=" + apiKey;
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        for (var i = 0; i < response.data.length; i++) {
            var gifImgUrl = response.data[i].images.downsized.url;
            var rating = response.data[i].rating;
            createGif(gifImgUrl, rating);
        }
    })
        

    });
    
    
    })

    // suppose to populate gifs of buttons in topics array
    $("#gif-button").on("click", function () {
        $("#imgHolder2").empty();
        var inputVal = $input.val();
        var queryURL = "http://api.giphy.com/v1/gifs/search?&q=" + inputVal + "&limit=10&api_key=" + apiKey;

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            var gifImgUrl = response.data[i].images.downsized.url;
            var topicsImage = $("<img>");
            topicsImage.attr("src", gifImgUrl);
            topicsImage.attr("alt", "cat image");

            $("#imgHolder2").prepend(topicsImage);

        });

    })

    $submit.on('click', function (event) {
        event.preventDefault();
        // var gif = $("#gif-input").val();
        // topics.push(gif);
        imgHolder.empty();
        var inputVal = $input.val();
        var queryURL = "http://api.giphy.com/v1/gifs/search?&q=" + inputVal + "&limit=10&api_key=" + apiKey;
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            for (var i = 0; i < response.data.length; i++) {
                var gifImgUrl = response.data[i].images.downsized.url;
                var rating = response.data[i].rating;
                createGif(gifImgUrl, rating);
            }
        })
        $input.val(' ');
        renderButtons();

    });


    function createGif(gifImg, rating) {
        var $newImg = $('<img>');
        $newImg.attr('src', gifImg);
        var divRating = $("<div>").text("Rating " + rating);
        imgHolder.prepend($newImg);
        imgHolder.prepend(divRating);
    }

    //suppose to pause gif
    imgHolder.on("click", function () {

        var state = $(this).attr("data-state");

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            for (var i = 0; i < response.data.length; i++) {
                var gifImgUrl = response.data[i].images.downsized.url;

                if (state === "still") {
                    $(this).attr("src", $(this).attr("data-animate"));
                    $(this).attr("data-state", "animate");
                } else {
                    $(this).attr("src", $(this).attr("data-still"));
                    $(this).attr("data-state", "still");
                }
            };
        });

    });







