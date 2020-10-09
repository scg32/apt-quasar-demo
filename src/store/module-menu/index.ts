import { Module } from 'vuex';
import { StoreInterface } from '../index';
import state, { MenuInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const menu: Module<MenuInterface, StoreInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default menu;
