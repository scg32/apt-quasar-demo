export interface JobsInterface {
  JOBS: object | boolean;
  JOB_STATUSES: object | boolean;
}

const state: JobsInterface = {
  JOBS: false,
  JOB_STATUSES: false
};

export default state;
