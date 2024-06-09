import {makeAutoObservable} from 'mobx';

export default class DarkMode{
  constructor(){
    this._darkMode = false
    makeAutoObservable(this)
  }

  setDarkMode(bool){
    let bgColor = document.getElementById('body')
    if (this._darkMode === false){
      bgColor.classList.add('blackMode')
      bgColor.classList.remove('whiteMode')
    }else{
      bgColor.classList.add('whiteMode')
      bgColor.classList.remove('blackMode')
    }
    this._darkMode = bool
  }

  get darkMode(){
    return this._darkMode
  }
}