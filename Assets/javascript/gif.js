// first off I want to be able to generate a button
// every input from the user
// should generate the label they enetered
// push that to the "button area" 
// displace a clickable button

// first sample topcs
// array of strings
var topics = ["nemo", "bunny", "dog", "bald eagle"];

// Function for displaying gif data
function renderButtons() {
    $('.button-group').empty();

    for (var i=0; i < topics.length; i++) {
      
       var a = $("<button>");
       a.addClass("animal");
       a.attr("data-name", topics[i]);
       a.text(topics[i]);
       $(".button-group").append(a);
      

    }
    // Delete the content inside the button-group div prior to adding new button
    // (this is necessary otherwise you will have repeat buttons)

    // Loop through the array of topics, then generate buttons for each topic in the array

  }renderButtons();

  // This function handles events where the add  button is clicked
  $("#add-animal").on("click", function(event) {
    // event.preventDefault() prevents submit button from trying to send a form.
    // Using a submit button instead of a regular button allows the user to hit
    // "Enter" instead of clicking the button if desired
    event.preventDefault();
    var animal = $('#animal-input').val().trim();
    topics.push(animal);
    console.log(animal);

    // Write code to grab the text the user types into the input field
    // Write code to add the new animal into the topics array

    // The renderButtons function is called, rendering the list of animals buttons
    renderButtons();
  });

  // Calling the renderButtons function to display the initial list of animals
  renderButtons();

//   next we want to be able to pull data from the gif link 
