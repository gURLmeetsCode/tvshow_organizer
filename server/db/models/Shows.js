const Sequelize = require('sequelize');
const db = require('../_db');


const Show = db.define('show', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  episode: {
    type: Sequelize.STRING,
    allowNull: false
  },
  premiered: {
    type: Sequelize.INTEGER,
    validate: {
       isAfter: "1990-01-01"
    }
  },
  genre: {
    type: Sequelize.ARRAY,
    validate: {
      isIn: [["Drama", "Crime", "Western", "Thriller", "Adventure", "Fantasy", "Comedy", "Science-Fiction"]],
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "image"
  },
  summary: {
    type: Sequelize.TEXT
  }
});




module.exports = Show
