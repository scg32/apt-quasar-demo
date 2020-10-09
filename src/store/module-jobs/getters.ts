import { GetterTree } from 'vuex';
import { StoreInterface } from '../index';
import { JobsInterface } from './state';

const getters: GetterTree<JobsInterface, StoreInterface> = {
  GET_JOBS(context) {
    return context.JOBS;
  },
  GET_JOB_STATUSES(context) {
    return context.JOB_STATUSES;
  }
};

export default getters;
