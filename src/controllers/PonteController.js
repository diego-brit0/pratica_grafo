const Controller = require('./Controller.js')
const PonteServices = require('../services/PonteServices.js');

const ponteServices = new PonteServices();

class PonteController extends Controller {

  constructor(){
    super(ponteServices);
  }

}

module.exports = PonteController;