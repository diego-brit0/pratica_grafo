const Controller = require('./Controller.js')
const PonteServices = require('../services/PonteServices.js');

const ponteServices = new PonteServices();

class PonteController extends Controller {

  constructor(){
    super(ponteServices);
  }

  async pegaTodasAsPontes(req, res) {
    try{
      const listaTodosAsPontes = await ponteServices.pegaPontesEscopoTodos();
      return res.status(200).json(listaTodosAsPontes);
    }catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }

}

module.exports = PonteController;