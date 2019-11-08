module.exports  = function(main) {

  main.get('/', function(req,res){
    const idAPI = 'db';
    main.app.controllers.Read.listPublicTitles(main, req, res, idAPI);
  });

  main.get('/investments/listpublictitles', function(req,res){
    const idAPI = 'investments/listpublictitles';
    main.infra.connect(idAPI);
    main.app.controllers.Read.listPublicTitles(main, req, res, idAPI);
  });

  main.get('/investments/listpublictitles/:titleCode', function(req,res){
    const idAPI = 'investments/listpublictitles';
    main.infra.connect(idAPI);
    main.app.controllers.Read.listPublicTitlesParam(main, req, res, idAPI);
  });

}