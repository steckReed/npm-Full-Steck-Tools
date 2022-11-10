/*

*/

import $ from "jquery";

if (typeof window !== 'undefined') {
  $(document).ready(function () {
    let rgbColors = new Object();
    let textColour;

    // Button Hover Color Effect
      $('.btn').hover(
        // Btn on hover
        function () {
          // Get parent containers background color
            let color = null;
            let i     = 0;

            do {
              color = $(this).parents().eq(i).css("background-color");
              i++;
            } while (i < 10 && (color == null || color == undefined || color == 'rgba(0, 0, 0, 0)'));

            // If hit max (10 loops), set to black as background presumably white
            if (color == null || color == undefined || color == 'rgba(0, 0, 0, 0)') {
              color = '#ffffff';
            }
          // Get parent containers background color

          // HEX to RGB converter
            if (color[0] == 'r') {
              color = color.substring(color.indexOf('(') + 1, color.indexOf(')'));
              rgbColors = color.split(',', 3);

              rgbColors[0] = parseInt(rgbColors[0]); // redValue
              rgbColors[1] = parseInt(rgbColors[1]); // greenValue
              rgbColors[2] = parseInt(rgbColors[2]); // blueValue

            } else if (color.substring(0, 1) == "#") {
              rgbColors[0] = color.substring(1, 3); // redValue
              rgbColors[1] = color.substring(3, 5); // greenValue
              rgbColors[2] = color.substring(5, 7); // blueValue

              rgbColors[0] = parseInt(rgbColors[0], 16);
              rgbColors[1] = parseInt(rgbColors[1], 16);
              rgbColors[2] = parseInt(rgbColors[2], 16);
            }
          // HEX to RGB converter

          // Check color contrast
            const brightness = Math.round((
              (parseInt(rgbColors[0]) * 299) +
              (parseInt(rgbColors[1]) * 587) +
              (parseInt(rgbColors[2]) * 114) ) / 1000);

            textColour = (brightness > 125) ? 'black' : 'white';
          // Check color contrast

          // Set text & border color
            let tmpthis = this;
          $(tmpthis).addClass("color-" + textColour + "-important");
          // Set text & border color
        },

        // Btn off hover
        function () {
          let tmpthis = this;
          $(tmpthis).removeClass("color-" + textColour + "-important");
        }
      );
    // Button Hover Color Effect

  });
}