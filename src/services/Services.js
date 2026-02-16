const { where } = require('sequelize');
const database = require('../models');
const no = require('../models/no');

class Services {

    constructor(nomeDoModel){
        this.model = nomeDoModel;
    }

    async pegaTodosOsRegistros() {
        return database[this.model].findAll();
    };

    async pegaUmRegistroPorId(id) {
        return database[this.model].findByPk(id);
    }

    async criarRegistro(dadosCriacao) {
        return database[this.model].create(dadosCriacao);
    }

    async atualizaRegistro(dadosAtualizados, id) {
        const listaDeRegistroAtualizados = database[this.model].update(dadosAtualizados, {
            where: {id: id}
        });
        if (listaDeRegistroAtualizados[0] === 0) {
            return false;
        }
        return true;
    }

    // exclusão logica
    async deletaRegistro(id) {

        const registroDeletado = database[this.model].destroy({
            where: {id: id}
        });
        if (registroDeletado[0] === 0) {
            return false;
        }
        return true;
    }

}

module.exports = Services;