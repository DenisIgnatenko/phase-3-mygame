const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate(models) {
      Question.belongsTo(models.Theme, {
        foreignKey: 'theme_id',

      });
    }
  }
  Question.init({
    question: DataTypes.STRING,
    answer: DataTypes.STRING,
    price: DataTypes.INTEGER,
    theme_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};
