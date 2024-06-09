const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Liked = sequelize.define('liked', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const LikedFilm = sequelize.define('liked_film', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Film = sequelize.define('film', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    rating: {type: DataTypes.STRING, defaultValue: 0},
    year: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
    timing: {type: DataTypes.STRING, allowNull: false},
    age: {type: DataTypes.INTEGER, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
    bgImg: {type: DataTypes.STRING, allowNull: false},
    titleImg: {type: DataTypes.STRING, allowNull: false},
})

const Genre = sequelize.define('genre', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Brand = sequelize.define('brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Rating = sequelize.define('rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.STRING, allowNull: false},
})

const FilmInfo = sequelize.define('film_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
})

const GenreBrand = sequelize.define('genre_brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})


User.hasOne(Liked)
Liked.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Liked.hasMany(LikedFilm)
LikedFilm.belongsTo(Liked)

Genre.hasMany(Film)
Film.belongsTo(Genre)

Brand.hasMany(Film)
Film.belongsTo(Brand)

Film.hasMany(Rating)
Rating.belongsTo(Film)

Film.hasMany(LikedFilm)
LikedFilm.belongsTo(Film)

Film.hasMany(FilmInfo, {as: 'info'});
FilmInfo.belongsTo(Film)

Genre.belongsToMany(Brand, {through: GenreBrand })
Brand.belongsToMany(Genre, {through: GenreBrand })

module.exports = {
    User,
    Liked,
    LikedFilm,
    Film,
    Genre,
    Brand,
    Rating,
    GenreBrand,
    FilmInfo
}





