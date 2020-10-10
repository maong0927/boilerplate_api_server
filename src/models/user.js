module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "user",
    {
      email: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
