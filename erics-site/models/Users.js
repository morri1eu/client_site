const bcrypt= require("bcrypt-nodejs")
var models
module.exports = function (sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    user_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    createdAt: {
      type:DataTypes.DATE, 
      defaultValue: sequelize.literal('NOW()')},
    updatedAt: {
      type:DataTypes.DATE, 
      defaultValue: sequelize.literal('NOW()')}
  })
  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  Users.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  Users.hook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
    
      
  ;
  

  return Users;
};