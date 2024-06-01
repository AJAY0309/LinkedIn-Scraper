module.exports = (sequelize, DataTypes) => {
    const Profile = sequelize.define('Profile', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        about: {
            type: DataTypes.TEXT,
        },
        bio: {
            type: DataTypes.TEXT,
        },
        location: {
            type: DataTypes.STRING,
        },
        follower_count: {
            type: DataTypes.INTEGER,
        },
        connection_count: {
            type: DataTypes.INTEGER,
        },
    });
    return Profile;
};