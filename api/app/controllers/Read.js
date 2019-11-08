module.exports.listPublicTitles = function(main, req, res, idAPI){
  var connection = main.infra.connect;
  var publicTitles = new main.app.models.ReadDAO(connection, idAPI);
  var result = publicTitles.list();
  res.json(result);
}

module.exports.listPublicTitlesParam = function(main, req, res, idAPI){
  var connection = main.infra.connect;
  var publicTitles = new main.app.models.ReadDAO(connection, idAPI);
  var result = publicTitles.listPublicTitlesParam(req.params);
  res.json(result);
}