var $ = require('jquery');
var impress = require('impress.js');

$('#gitUser').on('click', function() {
  getGit($('#gitusername').val());
});

function getGit(user) {
  $.ajax({
    url: 'http://localhost:3000/git',
    type: 'POST',
    cache: 'FALSE',
    data: {user: user},
    complete: function() {
      console.log('sent to /git');
    },
    success: function(data) {
      $('#image').append('<img src="' + data + '" width="200px" height="200px">');
    },
    error: function() {
      console.log('error posting');
    }
  });
}
