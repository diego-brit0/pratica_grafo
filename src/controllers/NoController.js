const Controller = require('./Controller.js')
const NoServices = require('../services/NoServices.js');

const noServices = new NoServices();

class NoController extends Controller {

  constructor(){
    super(noServices);
  }

  async pegaPontes(req, res) {
    const { noId } = req.params;
    try {

      const listaPontes = await noServices.pegaPontesPorNo(Number(noId))
      return res.status(200).json(listaPontes);
      
    } catch(erro){
      return res.status(500).json({ erro: erro.message });
    }
  }

}

module.exports = NoController;