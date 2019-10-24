// Wait until the DOM is loaded and then begin:
window.addEventListener("DOMContentLoaded", function(){

  // Get a reference to the button which is clicked (not submit button)
  var clickButton = document.getElementById("clickButton");

  // Get references to the divs that need to be shown/hidden
  var divs = document.querySelectorAll("#login, #remember, #password, #submitButton");

  // Set up a click event handler for the button:
  clickButton.addEventListener("click", toggle_display);

  // Function that will run when the link has been clicked
  function toggle_display(evt){
    // Prevent the native behavior of the button
    evt.preventDefault();

    // Cancel the event from bubbling to other elements
    evt.stopPropagation();

    // Toggle the divs by looping through the group
    divs.forEach(function(div){

      // hide click button
      clickButton.style.display = "none"

      // Change the display of all the other divs based on what it is now.
      div.style.display = (window.getComputedStyle(div).display === "none") ? "block" : "none";

    });

  }

});
