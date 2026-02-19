const Services = require('./Services.js')


class PonteServices extends Services {
    constructor() {
        super('Ponte');
    }

    async pegaPontesEscopoTodos() {
        const listPontes = await super.pegaRegistroPorEscopo('todosOsRegistro');
        return listPontes;
    }

    
}

module.exports = PonteServices;