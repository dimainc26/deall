import Vue from 'nativescript-vue'

// import Onboard from './views/Onboard'

import Onboard from './views/Skills'

import Home from './components/Home'
import { ApplicationSettings } from '@nativescript/core';

Vue.registerElement('Carousel', () => require('@nstudio/nativescript-carousel').Carousel);
Vue.registerElement('CarouselItem', () => require('@nstudio/nativescript-carousel').CarouselItem);

Vue.config.silent = false;

new Vue({
  render: (h) => h('frame', [h(ApplicationSettings.hasKey("first")? Home: Onboard)]),
}).$start()
