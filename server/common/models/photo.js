module.exports = function(Photo) {

  Photo.uploadFile = function(ctx, query, cb) {
    var options = {
      container: 'qwe'
    };

    console.log("HERE", Photo.app.models.PhotoStorage);

    cb();
    // try {
      // Photo.app.models.PhotoStorage.upload(ctx.req, ctx.res, options, function (err, fileObj) {
      //   console.log("after upload");
      //   cb();
      // });
    // }
    // catch(err) {
    //   console.log("catch", err);
    // }
  };

  Photo.remoteMethod(
    'uploadFile',
    {
      accepts: [
        { arg: 'ctx', type: 'object', http: { source: 'context' } },
        { arg: 'query', type: 'object', http: { source: 'query' } }
      ],
      http: { verb: 'post' }
    }
  );

};
