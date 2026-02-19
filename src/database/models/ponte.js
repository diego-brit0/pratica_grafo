'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ponte extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Ponte.belongsTo(models.No, {
        foreignKey: "esquerda_id"
      })
      Ponte.belongsTo(models.No, {
        foreignKey: "direita_id"
      })
    }
  }
  Ponte.init({
    peso: {
      type: DataTypes.INTEGER,
      validate: {
        
      }
    }
  }, {
    sequelize,
    modelName: 'Ponte',
    tableName: 'pontes',
    paranoid: true,
    // defaultScope: { //criação de scopo padrão trabalhando com filtro de where na consulta de objetos que atende o objeto criado internamente.
    //   where: {ativo:true}
    // }
    scopes: { //criação de scopo criado, trabalhando no lugar do scopo padrão pode ser chamado para trabalhar com filtro de onjetos criado dentro dele.
      todosOsRegistro: {
        where: {}
      }
    }
  });
  return Ponte;
};