import { createRouter, createWebHistory } from 'vue-router';
import AppMain from '../views/AppMain.vue';
import CityList from '../views/city_list/Main.vue';

const routes = [
  {
    path: '/',
    name: 'AppMain',
    component: AppMain
  },
  {
    path: '/cityList',
    name: 'CityList',
    component: CityList
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
