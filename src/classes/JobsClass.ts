import { JobsModel, JobLocationModel } from '../interfaces/jobs-model';

export default class JobsClass implements JobsModel {
  id: number | string;
  engineerName: string;
  engineerId: number | string;
  clientName: string;
  clientId: number | string;
  departmentName: string;
  departmentId: number | string;
  jobLocation: JobLocationModel;
  address: string;
  jobDescription: string;
  jobStatusId: number;
  jobObject: object;

  constructor(object: JobsModel) {
    this.id = object.id;
    this.engineerId = object.engineerId;
    this.engineerName = object.engineerName;
    this.clientName = object.clientName;
    this.clientId = object.clientId;
    this.departmentName = object.departmentName;
    this.departmentId = object.departmentId;
    this.address = object.address;
    this.jobDescription = object.jobDescription;
    this.jobStatusId = object.jobStatusId;
    this.jobLocation = object.jobLocation;
    this.jobObject = object;
  }
  getJobLocation() {
    return this.jobLocation;
  }

  getJobObject() {
    return this.jobObject;
  }
}
