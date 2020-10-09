import { MutationTree } from 'vuex';
import { JobsInterface } from './state';

const mutation: MutationTree<JobsInterface> = {
  SET_JOBS(state: JobsInterface, object: object) {
    state.JOBS = object;
  },
  SET_JOB_STATUSES(state: JobsInterface, object: object) {
    state.JOB_STATUSES = object;
  }
};

export default mutation;
