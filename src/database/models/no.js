'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class No extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      No.hasMany(models.Ponte , {
        foreignKey:'esquerda_id',
        as: 'EsquerdaId'
      });
      No.hasMany(models.Ponte , {
        foreignKey:'direita_id',
      });
    }
  }
  No.init({
    nome: {
      type: DataTypes.STRING,
      validate: { //criação de validação para campo do objeto
        len: {
          args: [1,10],
          msg: 'O campo nome deve ter no minimo 3 caracteres'
        }
      },
    }
  }, {
    sequelize,
    modelName: 'No',
    tableName: 'nos',
    paranoid: true,
  });
  return No;
};