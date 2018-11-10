var imgHolder = $('#image-holder');
var $input = $('#input');
var $submit = $('#submit');
var apiKey = "g9Ppz9QjUA9a57SESuuFhosLGIrmaUNS";

$(document).ready(function () {
    var apiKey = "g9Ppz9QjUA9a57SESuuFhosLGIrmaUNS";

    // FUNCTIONS
    // -------------------------------
    var topics = ["Rupaul", "Kevin Hart", "Tamar Braxton", "French Bulldogs", "French Fries"];
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
    $(document).on("click", '.gif', function () {
        $(this).addClass("test");
        var buttonValue = $(this).attr('data-type');

        var queryURL = "https://api.giphy.com/v1/gifs/search?&q=" + buttonValue + "&limit=10&api_key=" + apiKey;

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            for (var i = 0; i < response.data.length; i++) {
                createGif(response.data[i])
            }
        })
    });
})


$("#gif-button").on("click", function () {
    $("#imgHolder2").empty();
    var inputVal = $input.val();
    var queryURL = "https://api.giphy.com/v1/gifs/search?&q=" + inputVal + "&limit=10&api_key=" + apiKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

    });

})

$submit.on('click', function (event) {
    event.preventDefault();
    // not sure why this is not pushing to make a new button
    // var gif = $("#gif-input").val();
    // topics.push(gif);
    imgHolder.empty();
    var inputVal = $input.val();
    var queryURL = "https://api.giphy.com/v1/gifs/search?&q=" + inputVal + "&limit=10&api_key=" + apiKey;
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


function createGif(data) {
    var gifImgUrl = data.images.downsized.url;
    var topicsImage = $("<img>");
    topicsImage.attr("src", gifImgUrl);
    topicsImage.attr("alt", "cat image");
    topicsImage.attr('data-still', data.images.fixed_height_still.url);
    topicsImage.attr('data-animate', gifImgUrl);
    topicsImage.addClass('gify');

    imgHolder.prepend(topicsImage)
}


$(document).on("click", ".gify", function () {
    var state = $(this).attr("data-state");

    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
});