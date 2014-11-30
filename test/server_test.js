var chai = require('chai');
var chaihttp = require('chai-http');
var expect = chai.expect;
chai.use(chaihttp);
var c = require('../server');

var currentPort = process.env.PORT || 3000;

describe('Testing API', function() {
  it('Able to get user img from Git', function(done) {
    chai.request('http://localhost:' + currentPort)
    .post('/git')
    .send({user: 'ecjs'})
    .end(function(err, res) {
      if (err) return console.log('error sending post');
      expect(res).to.have.status(200);
      done();
    });
  });
});
