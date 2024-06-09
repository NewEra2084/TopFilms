import {makeAutoObservable} from 'mobx';

export default class Favorite{
  constructor(){
    this._favorite = false
    makeAutoObservable(this)
  }

  setFavorite(bool){
    let favoriteButton = document.getElementById('favoriteButton')
    if (this._favorite === false){
      favoriteButton.classList.add('likeButtonIco-Active')
      favoriteButton.classList.remove('likeButtonIco-Unactive')
    }else{
      favoriteButton.classList.add('likeButtonIco-Unactive')
      favoriteButton.classList.remove('likeButtonIco-Active')
    }
    this._favorite = bool
  }

  get favorite(){
    return this._favorite
  }
}