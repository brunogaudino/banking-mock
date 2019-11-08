function ReadDAO(connection, reqUrl){
  this._connection = connection(reqUrl);
}

ReadDAO.prototype.list = function(){
  var dbAccess = this._connection;
  return dbAccess.dblow.filter().write();
}

ReadDAO.prototype.listPublicTitlesParam = function(params){
  var dbAccess = this._connection;
  return dbAccess.dblow.filter({titleCode: params.titleCode}).write();
}

module.exports = function(){
  return ReadDAO;
}