module.exports = function(app) {
  app.dataSources.memoryDb.automigrate('Photo', function(err) {
    if(err) throw err;
  });
};
