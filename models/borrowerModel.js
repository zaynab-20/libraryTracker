'use strict';
const {
  Model
} = require('sequelize');
const bookstable = require('./bookModel');
const { FOREIGNKEYS } = require('sequelize/lib/query-types');
module.exports = (sequelize, DataTypes) => {
  class BorrowersTable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      BorrowersTable.associate=(models) =>{
      BorrowersTable.belongsTo(models.bookstable,{foreignKey:"BookID", as:"bookstable"})
      }   
     }
  }
  BorrowersTable.init({
    BookID: {type:DataTypes.STRING,references:{model:"bookstable",key:"id"}},
    BorrowerName: DataTypes.STRING,
    BorrowDate: DataTypes.STRING,
    ReturnDate: DataTypes.STRING,
    PhoneNumber: DataTypes.STRING(11)
  }, {
    sequelize,
    modelName: 'BorrowersTable',
  });
  return BorrowersTable;
};