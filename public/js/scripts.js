$(document).ready(function() {
  // Runs when button is pressed on virtual remote interface
  $('.remote-button').click(function(e) {
    e.preventDefault();

    var command = $(this).data('command');

    // Send POST request to commands API
    $.ajax({
      method: 'POST',
      url: '/api/remote/command',
      data: {
        api_key: apiKey,
        command: command
      }
    })
    .done(function(result) {
      if (result.status === 'ok') {
        alert(result.response);
      } else {
        alert(result.response);
        response.errors.forEach(function(error) {
          console.log(error);
        });
      }
    });
  });
});
