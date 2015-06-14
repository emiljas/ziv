var expect = require("chai").expect;
var request = require('supertest');
var loopback = require('loopback');
var DataSource = require('loopback-datasource-juggler').DataSource;
var HTTPStatus = require('http-status');

var app = require('../server/server');

function fakeStorage() {
  var PhotoStorage = loopback.createModel('PhotoStorage', {});
  var dataSource = loopback.createDataSource({
    connector: loopback.Memory
  });
  PhotoStorage.upload = function(req, res, options, cb) {
    cb();
  };
  PhotoStorage.attachTo(dataSource);
  app.model(PhotoStorage);
}

function fakeFailStorage() {
  var PhotoStorage = loopback.createModel('PhotoStorage', {});
  var dataSource = loopback.createDataSource({
    connector: loopback.Memory
  });
  PhotoStorage.upload = function(req, res, options, cb) {
    cb("error");
  };
  PhotoStorage.attachTo(dataSource);
  app.model(PhotoStorage);
}

var memoryDs = new DataSource('memory');
app.models.Photo.attachTo(memoryDs);

describe('Photo', function() {
  describe('upload', function() {

    // it('do not create photo if upload fail', function(done) {
    //   fakeFailStorage();
    //
    //   var isPhotoCreated = false;
    //   app.models.Photo.create = function(data, cb) {
    //     isPhotoCreated = true;
    //     cb();
    //   };
    //
    //   request(app)
    //   .post('/api/Photos/upload')
    //   .attach('img.png', new Buffer(1))
    //   .end(function(err, res) {
    //     expect(isPhotoCreated).to.equal(false);
    //     done(err);
    //   });
    // });

    it('upload', function(done) {
      fakeStorage();

      // var isPhotoCreated = false;
      // app.models.Photo.create = function(data, cb) {
      //   isPhotoCreated = true;
      //   cb();
      // };

      request(app)
      .post('/api/Photos/upload')
      .attach('img.png', new Buffer(1))
      .expect(HTTPStatus.OK)
      .end(function(err, res) {
        var photo = res.body;
        expect(photo.id).to.be.above(0);
        // expect(isPhotoCreated).to.equal(true);
        done(err);
      });
    });
  });

});



// function requestJson(verb, url) {
//   return request(app)[verb](url)
//   .set('Content-Type', 'application/json')
//   .set('Accept', 'application/json')
//   .expect('Content-Type', /json/);
// }

  // it('test', function(done) {
  //   requestJson('post', '/api/Photos')
  //   .send({
  //     url: 'bla bla bla url bla',
  //   })
  //   .expect(HTTPStatus.OK)
  //   .end(function(err, res) {
  //     if(err) done(err);
  //     else {
  //       done();
  //     }
  //   });
  // });
