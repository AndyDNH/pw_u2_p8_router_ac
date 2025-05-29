import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EstudianteView from '../views/EstudianteView.vue'
import PreguntaView from '../views/PreguntaView.vue'
import HolaMundoView from '../views/HolaMundoView.vue'


const routes = [
  // configuracion de las dos rutas 
  // el primero involucra que desde el inicio tenemos que importar la pagina web
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    // uso de path variable
    path: '/estudiante/:cedula',
    name: 'estudianteView',
    component: EstudianteView
  },
  {
    path: '/pregunta',
    name: 'preguntaView',
    component: PreguntaView
  },
  {
    path: '/hola',
    name: 'holaView',
    component: HolaMundoView
  },
  // involucra una carga bajo demanda
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/contador/numeros',
    name: 'contadorView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "contadorView" */ '../views/ContadorView.vue')
  },
  {
    path: '/rover',
    name: 'roverView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "roverView" */ '../views/MarsRoverView.vue')
  },
  {
    path: '/tabla',
    name: 'tablaView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "tablaView" */ '../views/EstudianteTablaView.vue')
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
