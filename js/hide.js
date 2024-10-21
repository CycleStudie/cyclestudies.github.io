// hide-text.js

// Function to hide elements containing specific text
function hideText(text) {
  // Get all elements containing the specified text
  var elements = document.querySelectorAll(`:contains("${text}")`);

  // Loop through each element and remove it
  elements.forEach(function(element) {
    element.parentNode.removeChild(element);
  });
}

// Call the function with the text to hide
hideText("Powered by BroadcastChannel & Sepia");
