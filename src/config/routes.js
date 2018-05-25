module.exports = (app)=>{
  app.get('/cadastrar', (req,res)=>  app.src.controllers.PaginaController.cadastrar(req,res));
  app.get('/entrar',    (req,res)=>  app.src.controllers.PaginaController.entrar(req,res));
  app.get('/sair',      (req,res)=>  app.src.controllers.PaginaController.sair(req,res));
}