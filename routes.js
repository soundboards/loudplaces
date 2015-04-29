//boilerplate
//
//var SampleController= require('./controllers/samplecontroller.js');)
//
module.exports = function(app){
  app.get('/', function(req, res){
    res.render('index', {title:"test",
               redir: req.query.redir});
  });

  SampleController.add_routes(app);
};
