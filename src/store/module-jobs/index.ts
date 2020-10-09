import { Module } from 'vuex';
import { StoreInterface } from '../index';
import state, { JobsInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const jobs: Module<JobsInterface, StoreInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default jobs;
