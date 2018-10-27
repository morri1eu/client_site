var models

module.exports = function (sequelize, DataTypes) {
  var Products = sequelize.define("Products", {
    product_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    product_name: DataTypes.STRING,
    product_price: DataTypes.DECIMAL(10, 2),
    product_description: DataTypes.TEXT,
    product_location: DataTypes.STRING,
    product_img_url: DataTypes.TEXT,
    product_category: DataTypes.STRING,
    createdAt: {
      type:DataTypes.DATE, 
      defaultValue: sequelize.literal('NOW()')},
    updatedAt: {
      type:DataTypes.DATE, 
      defaultValue: sequelize.literal('NOW()')}
  }
    )
  ;
  

  Products.asscociate = function (models) {
    models.products.belongsTo(models.users, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    })
  }
  return Products;
};