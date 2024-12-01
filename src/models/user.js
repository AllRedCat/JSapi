module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(64),
            allowNull: false,
            unique: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        passwordHash: {
            type: DataTypes.STRING(65),
            allowNull: false,
        },
        rule: {
            type: DataTypes.STRING(64),
            allowNull: false,
        },
    }, {
        tableName: 'users',
        timestamps: false,
    });
}