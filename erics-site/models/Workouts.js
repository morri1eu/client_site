var models

module.exports = function (sequelize, DataTypes) {
  var Workouts = sequelize.define("Workouts", {
    workout_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    workout_name: DataTypes.STRING,
    workout_sets: DataTypes.INTEGER,
    workout_reps: DataTypes.INTEGER,
    workout_description: {
        type:DataTypes.TEXT,
        allowNull: true},
    workout_category: DataTypes.STRING,
    workout_order: DataTypes.INTEGER,
    workout_level: DataTypes.STRING,
    createdAt: {
      type:DataTypes.DATE, 
      defaultValue: sequelize.literal('NOW()')},
    updatedAt: {
      type:DataTypes.DATE, 
      defaultValue: sequelize.literal('NOW()')}
  }
    )
  ;
  

  return Workouts;
};