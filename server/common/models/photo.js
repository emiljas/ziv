var uuid = require('uuid');

module.exports = function(Photo) {

  Photo.upload = function(ctx, query, cb) {
    var options = {
      container: 'qwe'
    };

    Photo.app.models.PhotoStorage.upload(ctx.req, ctx.res, options, function (err, fileObj) {
      console.log(options);
      if(err) {
        cb();
      }
      else {
        var data = { url: 'e' };
        Photo.create(data, cb);
      }
    });
  };

  Photo.remoteMethod(
    'upload',
    {
      http: { verb: 'post' },
      accepts: [
        { arg: 'ctx', type: 'object', http: { source: 'context' } },
        { arg: 'query', type: 'object', http: { source: 'query' } }
      ],
      returns: { root: 'true', type: 'object' }
    }
  );

};
