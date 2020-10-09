import { ActionTree } from 'vuex';
import { StoreInterface } from '../index';
import { JobsInterface } from './state';

import { JobItems } from '../../api-data/jobItems';
import { JobStatuses } from '../../api-data/jobStatuses';

const actions: ActionTree<JobsInterface, StoreInterface> = {
  SET_JOBS(context, payload: object) {
    context.commit('SET_JOBS', payload);
    return true;
  },
  SET_JOB_STATUSES(context, payload: object) {
    context.commit('SET_JOB_STATUSES', payload);
    return true;
  },

  SET_JOBS_API(context, payload: object) {
    //temporary from file
    const inStore = context.getters.GET_JOBS;
    if (inStore) return;
    return context.dispatch('SET_JOBS', JobItems).then(response => {
      return response;
    });
  },
  SET_JOB_STATUSES_API(context, payload: object) {
    //temporary from file
    return context.dispatch('SET_JOB_STATUSES', JobStatuses).then(response => {
      return response;
    });
  }
};

export default actions;
