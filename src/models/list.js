module.exports = (sequelize, DataTypes) => {
    return sequelize.define('List', {
        listId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        userID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
        },
        name: {
            type: DataTypes.STRING(64),
            allowNull: false,
            unique: true,
        },
    }, {
        tableName: 'lists',
        timestamps: false,
    });
}