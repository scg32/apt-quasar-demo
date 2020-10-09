<template>
  <q-page>
    <JobDetailsDialog
      v-if="jobDialogShow"
      :jobDialogShow="jobDialogShow"
      :job="getSeletctedJob()"
      :checkJobStatus="checkJobStatus"
    ></JobDetailsDialog>
    <div class="q-pa-md row items-start justify-evenly">
      <q-table
        title="Jobs list"
        :data="data"
        :columns="columns"
        :visible-columns="columnsVisible"
        row-key="id"
        :filter="searchInTable"
        :loading="tableLoader"
        selection="single"
        :selected.sync="selected"
        @selection="selectJob"
      >
        <template v-slot:top>
          <q-select
            v-model="columnsVisible"
            multiple
            outlined
            dense
            options-dense
            :display-value="$q.lang.table.columns"
            emit-value
            map-options
            :options="columns"
            option-value="name"
            options-cover
            style="min-width: 150px"
          />
          <q-space></q-space>
          <q-input
            dense
            debounce="300"
            v-model="searchInTable"
            placeholder="Search"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>
        <template v-slot:body-cell-jobStatusId="props">
          <q-td :props="props">
            <q-badge
              :color="checkJobStatus(props.value, 'color')"
              :label="checkJobStatus(props.value, 'status')"
            />
          </q-td>
        </template>
        <template v-slot:body-cell-jobLocation="props">
          <q-td :props="props">
            <q-icon size="md" :name="checkJobLocation(props.value)" />
          </q-td>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import JobsClass from '../classes/JobsClass';
import { JobsModel } from '../interfaces/jobs-model';
import {
  JobTableColums,
  JobTableColumsVisible
} from '../helpers/jobTableColumns';
import JobDetailsDialog from '../components/JobDetailsDialog.vue';

const jobs = namespace('jobs');

@Component({
  name: 'JobsList',
  components: {
    JobDetailsDialog
  }
})
export default class JobsList extends Vue {
  public data = [];
  public tableLoader = false;
  public columns = JobTableColums;
  public columnsVisible = JobTableColumsVisible;
  public searchInTable = null;
  public selected = [];
  public jobDialogShow = false;
  private selectedJob = null;

  @jobs.Getter
  public GET_JOBS!: [];
  @jobs.Getter
  public GET_JOB_STATUSES!: [];

  public processJobs(): void {
    this.tableLoader = true;
    const jobs: [] = this.GET_JOBS;
    jobs.filter((data: JobsModel) => {
      let createNewObject = {} as never;
      createNewObject = new JobsClass(data) as never;
      if (createNewObject) {
        this.data.push(createNewObject);
      } else {
        //send any notification
      }
    });
  }
  public checkJobStatus(id: number, param: string): string {
    const jobStatus: any = this.GET_JOB_STATUSES;
    const found = jobStatus.find((data: any) => {
      if (data.jobStatusId == id) {
        return data;
      }
    });
    return param == 'color' ? found.color : found.jobStatus;
  }
  public checkJobLocation(params: any): string {
    const locationOn: boolean = params.lat && params.lng ? true : false;
    return locationOn ? 'location_on' : 'location_off';
  }
  public selectJob(detail: any) {
    this.selectedJob = detail.rows[0];
    if (this.selectedJob) {
      this.showJobDialog(true);
    }
  }
  public getSeletctedJob() {
    return this.selectedJob;
  }
  public showJobDialog(param: boolean) {
    this.jobDialogShow = param;
  }
  public runEmit() {
    this.$root.$on('ShowJobDialog', (param: boolean) => {
      this.showJobDialog(param);
    });
  }
  created() {
    this.runEmit();
  }
  mounted() {
    this.processJobs();
    setTimeout(() => {
      this.tableLoader = false;
    }, 2000);
  }
}
</script>

<style></style>
