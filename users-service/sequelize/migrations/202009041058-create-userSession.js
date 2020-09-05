module.exports.up = (queryInterface, DataTypes) => {
  return queryInterface.createTable(
    "userSession",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER.UUID,
      },

      userId: {
        allowNull: false,
        references: {
          key: "id",
          model: "users",
        },
        type: DataTypes.UUID,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      passwordHash: {
        allowNull: false,
        type: DataTypes.CHAR(64),
      },
      expiresAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      charset: "utf8",
    }
  );
};

module.exports.down = (queryInterface) =>
  queryInterface.dropTable("userSession");
