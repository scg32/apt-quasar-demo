export const JobTableColums = [
  {
    name: 'id',
    required: true,
    label: 'ID',
    align: 'left',
    field: row => row.id,
    format: val => `${val}`,
    sortable: true
  },
  {
    name: 'clientName',
    align: 'center',
    label: 'Client',
    field: 'clientName',
    sortable: true
  },
  {
    name: 'address',
    label: 'Address',
    field: 'address',
    align: 'center'
  },
  {
    name: 'jobDescription',
    label: 'Description',
    field: 'jobDescription',
    align: 'center'
  },
  {
    name: 'jobStatusId',
    label: 'Status',
    field: 'jobStatusId',
    sortable: true,
    align: 'center'
  },
  { name: 'jobLocation', label: 'Location', field: 'jobLocation' },
  {
    name: 'departmentName',
    label: 'Department',
    field: 'departmentName',
    sortable: true,
    align: 'center'
  },
  {
    name: 'departmentId',
    label: 'Department ID',
    field: 'departmentId',
    sortable: true,
    align: 'center'
  },
  {
    name: 'engineerName',
    label: 'Engineer',
    field: 'engineerName',
    sortable: true,
    align: 'center'
  },
  {
    name: 'engineerId',
    label: 'Engineer ID',
    field: 'engineerId',
    sortable: true,
    align: 'center'
  }
];
export const JobTableColumsVisible = [
  'clientName',
  'address',
  'departmentName',
  'jobStatusId',
  'jobLocation',
  'engineerName',
  'jobDescription'
];
