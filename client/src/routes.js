import AdminPage from './pages/AdminPage'
import LikedPage from './pages/LikedPage'
import CatalogPage from './pages/CatalogPage'
import FilmPage from './pages/FilmPage'
import AuthPage from './pages/AuthPage'
import MoviePage from './pages/MoviePage'

import { ADMIN_ROUTE, LIKED_ROUTE, CATALOG_ROUTE, FILM_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, MOVIE_ROUTE } from './utils/consts'

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: AdminPage
  },
  {
    path: LIKED_ROUTE,
    Component: LikedPage
  }
]

export const publicRoutes = [
  {
    path: CATALOG_ROUTE,
    Component: CatalogPage
  },
  {
    path: FILM_ROUTE + '/:id',
    Component: FilmPage
  },
  {
    path: LOGIN_ROUTE,
    Component: AuthPage
  }, 
  {
    path: REGISTRATION_ROUTE,
    Component: AuthPage
  },
  {
    path: MOVIE_ROUTE,
    Component: MoviePage
  }
]