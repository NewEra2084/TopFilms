import { $authHost, $host } from "./index";

export const createGenre = async (genre) => {
  const {data} = await $authHost.post('api/genre', genre)
  return data
}

export const fetchGenres = async () => {
  const {data} = await $host.get('api/genre')
  return data
}

export const createBrand = async (brand) => {
  const {data} = await $authHost.post('api/brand', brand)
  return data
}

export const fetchBrands = async () => {
  const {data} = await $host.get('api/brand')
  return data
}

export const createFilm = async (film) => {
  const {data} = await $authHost.post('api/film', film)
  return data
}

export const fetchFilms = async (genreId, brandId, page, limit = 5) => {
  const {data} = await $host.get('api/film', { params: {
    genreId, brandId, page, limit
  }})
  return data
}

export const fetchOneFilm = async (id) => {
  const {data} = await $host.get('api/film/' + id)
  return data
}
