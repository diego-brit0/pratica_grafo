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
    peso: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Ponte',
    tableName: 'pontes'
  });
  return Ponte;
};