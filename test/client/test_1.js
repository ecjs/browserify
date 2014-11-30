'use strict';
var expect = require('chai').expect;
var $ = require('jquery');
var some_func = require('../../app/js/some_func');

describe('some test', function() {

  it('should also be true', function(done) {
    $.ajax({
      url: 'http://localhost:3000/git',
      type: 'POST',
      cache: 'FALSE',
      data: {user: 'ecjs'},
      complete: function() {
        console.log('sent to /git');
      },
      success: function(data, textStatus, xhr) {
        console.log(xhr.status);
        expect(xhr.status).to.eql(200);
        done();
      },
      error: function() {
        console.log('error posting');
      }
    });
  });
});
