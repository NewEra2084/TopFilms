const uuid = require('uuid')
const path = require('path');
const {Film, FilmInfo} = require('../models/models')
const ApiError = require('../error/ApiError');

class FilmController {
    async create(req, res, next) {
        try {
            let {name, rating, brandId, genreId, year, timing, age, description, info} = req.body
            const {img, bgImg, titleImg} = req.files
            let fileNameJpg = uuid.v4() + ".jpg"
            let fileNameBgPng = uuid.v4() + ".png"
            let fileNameTitlePng = uuid.v4() + ".png"
            img.mv(path.resolve(__dirname, '..', 'static', fileNameJpg))
            bgImg.mv(path.resolve(__dirname, '..', 'static', fileNameBgPng))
            titleImg.mv(path.resolve(__dirname, '..', 'static', fileNameTitlePng))
            const film = await Film.create({name, rating, brandId, genreId, year, timing, age, description, img: fileNameJpg, bgImg: fileNameBgPng, titleImg: fileNameTitlePng});

            if (info) {
                info = JSON.parse(info)
                info.forEach(i =>
                    FilmInfo.create({
                        title: i.title,
                        description: i.description,
                        filmId: film.id
                    })
                )
            }

            return res.json(film)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res) {
        let {brandId, genreId, limit, page} = req.query
        page = page || 1
        limit = limit || 28
        let offset = page * limit - limit
        let films;
        if (!brandId && !genreId) {
            films = await Film.findAndCountAll({limit, offset})
        }
        if (brandId && !genreId) {
            films = await Film.findAndCountAll({where:{brandId}, limit, offset})
        }
        if (!brandId && genreId) {
            films = await Film.findAndCountAll({where:{genreId}, limit, offset})
        }
        if (brandId && genreId) {
            films = await Film.findAndCountAll({where:{genreId, brandId}, limit, offset})
        }
        return res.json(films)
    }

    async getOne(req, res) {
        const {id} = req.params
        const film = await Film.findOne(
            {
                where: {id},
                include: [{model: FilmInfo, as: 'info'}]
            },
        )
        return res.json(film)
    }
}

module.exports = new FilmController()
