var models

module.exports = function (sequelize, DataTypes) {
  var Sessions = sequelize.define("Sessions", {
    session_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    session_name: DataTypes.STRING,
    session_email: DataTypes.STRING,
    session_level: DataTypes.STRING,
    date: DataTypes.STRING,
    Number_of_Athletes: DataTypes.STRING,
    createdAt: {
      type:DataTypes.DATE, 
      defaultValue: sequelize.literal('NOW()')},
    updatedAt: {
      type:DataTypes.DATE, 
      defaultValue: sequelize.literal('NOW()')}
  }
    )
  ;
  

  return Sessions;
};