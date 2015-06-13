var expect = require("chai").expect;
var request = require('supertest');
var app = require('../server/server');
var DataSource = require('loopback-datasource-juggler').DataSource;
var HTTPStatus = require('http-status');

var memoryDs = new DataSource('memory');
app.models.Photo.attachTo(memoryDs);

function requestJson(verb, url) {
  return request(app)[verb](url)
  .set('Content-Type', 'application/json')
  .set('Accept', 'application/json')
  .expect('Content-Type', /json/);
}

describe('Photo', function() {
  it('test', function(done) {
    requestJson('post', '/api/Photos')
    .send({
      url: 'bla bla bla url bla',
    })
    .expect(HTTPStatus.OK)
    .end(function(err, res) {
      if(err) done(err);
      else {
        done();
      }
    });
  });

  it('uploadFile', function(done) {
    app.models.PhotoStorage = {};
    request(app)
    .post('/api/Photos/uploadFile')
    .field('name', 'my awesome avatar')
    .attach('img.png', new Buffer(1))
    .end(function(err, res) {
      done(err);
    });
  });

});
