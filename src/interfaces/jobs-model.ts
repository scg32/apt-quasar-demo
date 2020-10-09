export interface JobLocationModel {
  lat: number;
  lng: number;
}

export interface JobsModel {
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

  getJobLocation: () => void;

  getJobObject: () => void;
}
