$(document).ready(function () {
    // first off I want to be able to generate a button
    // every input from the user
    // should generate the label they enetered
    // push that to the "button area" 
    // displace a clickable button

    // first sample topcs
    // array of strings
    var topics = ["Mickey Mouse", "Goofy", "Donald Duck", "Minnie Mouse"];

    // Function for displaying gif data
    function renderButtons() {
        $('.button-group').empty();

        // Loop through the array of topics, then generate buttons for each topic in the array
        for (var i = 0; i < topics.length; i++) {

            var newButton = $("<button>");
            newButton.addClass("user-input");
            newButton.attr("data-name", topics[i]);
            newButton.text(topics[i]);
            $(".button-group").append(newButton);


        }



    } renderButtons();

    // This function handles events where the add  button is clicked
    $("#add-buttonTopic").on("click", function (event) {
        $('.card-title').hide();
        // event.preventDefault() prevents submit button from trying to send a form.
        // Using a submit button instead of a regular button allows the user to hit
        // "Enter" instead of clicking the button if desired
        event.preventDefault();
        var myDecision = $('#topic-input').val().trim();
        topics.push(myDecision);
        console.log(myDecision);

        // Write code to grab the text the user types into the input field
        // Write code to add the new myDecision into the topics array
        renderButtons();

    });


    //  next we want to be able to pull data from the gif link 
    // using the api key we got from the gif site

    $('.button-group').on("click",'.user-input', function () {
        // all buttons, before the submit 
        // the buttons created after the submit
        var topic = $(this).attr('data-name');
        // URL site
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=XDm1iNZRm06xYQ5dvkNgRfGtXJ6kiIHF&limit=10";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            // once click we want the gif's to print onto the HTML page
            console.log(response);
            var results = response.data;

            for (var i = 0; i < results.length; i++) {
                var gifDiv = $("<div>");

                var rating = results[i].rating;

                var p = $("<p>").text("Rating: " + rating);

                var gifImage = $("<img>");
                gifImage.addClass('test');
                gifImage.attr("src", results[i].images.fixed_height_still.url);
                gifImage.attr('data-state', 'still');
                gifImage.attr('data-animate', results[i].images.fixed_height.url);
                gifImage.attr('data-still', results[i].images.fixed_height_still.url);

                gifDiv.append(p);
                gifDiv.append(gifImage);

                $(".gifs-appear").prepend(gifDiv);

            }
        });


    })
    $('.gifs-appear').on("click",'.test', function (event) {
        event.preventDefault();
        var state = $(this).attr('data-state');
        console.log(state);
        if (state === 'still') {
            $(this).attr('src', $(this).attr('data-animate'));
            $(this).attr('data-state', 'data-animate');
        } else {
            $(this).attr('src', $(this).attr('data-still'));
            $(this).attr('data-state', 'still');
        }
    })



});
