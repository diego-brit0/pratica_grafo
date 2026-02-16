const Service = require('../services/Services.js');

class Controller {

    constructor(entidadeService) {
        this.entidadeService = entidadeService;
    }

    async criarRegistro(req, res) {
        
        const dadosParaCriacao = req.body;
        try {
            const NovoRegistro = await this.entidadeService.criarRegistro(dadosParaCriacao);
            return res.status(200).json(NovoRegistro);

        } catch(erro) {
            return res.status(500).json({ erro: erro.message })
        }    
    }

    async pegaTodos(req, res) {
        try {
            const listaDeRegistro = await this.entidadeService.pegaTodosOsRegistros();
            return res.status(200).json(listaDeRegistro);
        } catch ( erro ) {
            return res.status(500).json({erro: erro.message })
        }
    }

    async pegaUmPorId(req, res) {
        const { id } = req.params;
        
        try {
            const registro = await this.entidadeService.pegaUmRegistroPorId(Number(id));

            if (! registro) {
                return res.status(200).json({registro});
            } else {
                return res.status(200).json({
                    mensagem: `registro não foi encontrado` 
                });    
            }
        } catch (erro) {
            return res.status(400).json({ erro: erro.mensage });
        }
    }

    async atualiza(req, res) {
        const { id } = req.params;
        const dadosAtualizado = req.body;

        try{
            // isUpdated
            const foiAtualizado = await this.entidadeService.atualizaRegistro(dadosAtualizado, Number(id));
            if(!foiAtualizado) {
                return res.status(400).json({
                    mensagem: `registro não foi atualizado` 
                });
            }
            return res.status(200).json({
                    mensagem: `Atualizado com sucesso` 
                });
        } catch (erro) {
            return res.status(400).json({ erro: erro.mensage });
        }
    }

    async deleta(req, res) {

        const { id } = req.params;
        
        try {

            const foiDeletado = await this.entidadeService.deletaRegistro(Number(id));
            if(! foiDeletado) {
                return res.status(400).json({
                    mensagem: `registro não foi deletado` 
                });
            }
            return res.status(200).json({
                    mensagem: `registro foi deletado com sucesso` 
            });

        } catch (erro) {
            return res.status(500).json({ erro: erro.mensage });
        }
    }

}

module.exports = Controller;