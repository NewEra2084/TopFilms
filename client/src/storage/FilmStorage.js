import {makeAutoObservable} from 'mobx';

export default class FilmStorage{
  constructor(){
    this._genres = []
    this._brands = []
    this._films = []
    this._selectedGenre = ''
    this._selectedBrand = ''
    this._rating = 0
    this._page = 1
    this._totalCount = 0
    this._limit = 2
    
    makeAutoObservable(this)
  }

  setGenres(genres){
    this._genres = genres
  }
  setBrands(brands){
    this._brands = brands
  }
  setFilms(films){
    this._films = films
  }
  setSelectedGenre(Genre){
    this.setPage(1)
    this._selectedGenre = Genre
  }
  setSelectedBrand(Brand){
    this.setPage(1)
    this._selectedBrand = Brand
  }
  removeSelectedGenre(){
    this._selectedGenre = ''
  }
  removeSelectedBrand(){
    this._selectedBrand = ''
  }
  setRating(Rating){
    this._rating = Rating
  }
  setPage(page){
    this._page = page
  }
  setTotalCount(totalCount){
    this._totalCount = totalCount
  }
  setLimit(limit){
    this._limit = limit
  }
  
  get genres(){
    return this._genres
  }
  get brands(){
    return this._brands
  }
  get films(){
    return this._films
  }
  get rating(){
    return this._rating
  }
  get page(){
    return this._page
  }
  get totalCount(){
    return this._totalCount
  }
  get limit(){
    return this._limit
  }
  get selectedGenre(){
    return this._selectedGenre
  }
  get selectedBrand(){
    return this._selectedBrand
  }
}