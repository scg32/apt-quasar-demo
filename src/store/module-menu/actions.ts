import { ActionTree } from 'vuex';
import { StoreInterface } from '../index';
import { MenuInterface } from './state';

import { MenuItems } from '../../api-data/menuItems';

const actions: ActionTree<MenuInterface, StoreInterface> = {
  SET_MENU(context, payload: object) {
    context.commit('SET_MENU', payload);
    return true;
  },

  SET_MENU_API(context, payload: object) {
    //temporary from file
    return context.dispatch('SET_MENU', MenuItems).then(response => {
      return response;
    });
  }
};

export default actions;
