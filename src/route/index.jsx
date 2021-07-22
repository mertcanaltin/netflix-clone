import MovieList from '../pages/movie-list/index';


import Home from '../pages/home'

export const adminRoutes = [
    { path:'/pages/list',Component:MovieList},

]

export const routes = [
    { path:'/landing',Component:Home},
]
