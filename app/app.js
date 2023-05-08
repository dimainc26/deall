import Vue from 'nativescript-vue'

// import Onboard from './views/Onboard'

import Onboard from './views/Skills'

import Home from './views/Home'
import { ApplicationSettings } from '@nativescript/core';

import BottomNavigationBar from '@nativescript-community/ui-material-bottomnavigationbar/vue';

Vue.use(BottomNavigationBar);

import BottomSheetPlugin from '@nativescript-community/ui-material-bottomsheet/vue';
import { install } from "@nativescript-community/ui-material-bottomsheet";
install();


Vue.use(BottomSheetPlugin);


Vue.registerElement("DropDown", () => require("nativescript-drop-down/drop-down").DropDown)
Vue.registerElement('Carousel', () => require('@nstudio/nativescript-carousel').Carousel);
Vue.registerElement('CarouselItem', () => require('@nstudio/nativescript-carousel').CarouselItem);
Vue.registerElement('Fab', () => require('@nstudio/nativescript-floatingactionbutton').Fab);

Vue.config.silent = true;

new Vue({
  render: (h) => h('frame', [h(ApplicationSettings.hasKey("first") ? Home : Home)]),
}).$start()
