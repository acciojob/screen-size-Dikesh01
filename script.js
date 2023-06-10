//your JS code here. If required.
    function updateSizeText() {
      var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      var sizeText = "Width: " + width + " and Height: " + height ;
      document.getElementById("sizeText").textContent = sizeText;
    }

    // Update size text on window resize
    window.addEventListener("resize", updateSizeText);

    // Initial call to update size text
    updateSizeText();