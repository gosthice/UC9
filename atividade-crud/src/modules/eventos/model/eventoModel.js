const { DataTypes } = require("sequelize");
const { sequelize } = require("../../../config/configDB");

const Evento = sequelize.define(
   "Evento",
   {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         allowNull: false,
      },
      nome: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      descricao: {
         type: DataTypes.STRING(110),
         allowNull: true,
      },
      data: {
         type: DataTypes.DATE,
         allowNull: false,
      },
      local: {
         type: DataTypes.STRING(120),
         allowNull: false
      }
   },
   {
      tableName: "evento",
      createdAt: "criado_em",
      updatedAt: "atualizado_em",
   }
);

module.exports = Evento;