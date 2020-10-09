import { GetterTree } from 'vuex';
import { StoreInterface } from '../index';
import { MenuInterface } from './state';

const getters: GetterTree<MenuInterface, StoreInterface> = {
  GET_MENU(context) {
    return context.MENU;
  }
};

export default getters;
