const Services = require('./Services.js')


class NoServices extends Services {
    constructor() {
        super('No');
    }

    async pegaPontesPorNo(id) {

        const No = await super.pegaUmRegistroPorId(id);
        const listaPontes = await No.getEsquerdaId();
        return listaPontes;
        
    }

}

module.exports = NoServices;