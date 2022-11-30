const { DataTypes} = require('sequelize')

const db = require('../utils/database')

//* {
//*  id: 1,
//*  author: 'Sahid',
//*  quote: 'Dudas?',
//*  year: 2022
//* }

const Quotes = db.define('quotes', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  author: {
    type: DataTypes.STRING,
  }, 
  quote: {
    type: DataTypes.TEXT,
    allowNull: false, 
    unique: true
  }, 
  year: {
    type: DataTypes.INTEGER
  }
})

module.exports = Quotes