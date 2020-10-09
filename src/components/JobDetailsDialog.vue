/* eslint-disable vue/no-parsing-error */
<template>
  <div>
    <q-dialog v-model="jobDialogShow">
      <q-card class="jobCard">
        <q-toolbar>
          <q-toolbar-title
            ><span class="text-weight-bold">Job</span> Details</q-toolbar-title
          >

          <q-btn flat round dense icon="close" @click="closeDialog()" />
        </q-toolbar>
        <q-img src="~assets/map-here.png">
          <div class="absolute-bottom text-subtitle1 text-center">
            {{ job.jobLocation }}
          </div>
        </q-img>
        <q-card-section>
          <div class="q-pa-xs">
            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis">ID:{{ job.id }}</div>
              <div class="col text-h6 ellipsis">
                Status:
                <q-badge
                  class="text-h6 ellipsis"
                  :color="checkJobStatus(job.jobStatusId, 'color')"
                  :label="checkJobStatus(job.jobStatusId, 'status')"
                />
              </div>
            </div>
            <div class="row items-start q-pa-xs">
              <div class="col q-pa-sm">
                <q-field outlined label="Client" stack-label dense>
                  <template v-slot:control>
                    <div class="self-center full-width no-outline" tabindex="0">
                      {{ job.clientName }}
                    </div>
                  </template>
                </q-field>
              </div>
              <div class="col q-pa-sm">
                <q-field outlined label="Address" stack-label dense>
                  <template v-slot:control>
                    <div class="self-center full-width no-outline" tabindex="0">
                      {{ job.address }}
                    </div>
                  </template>
                </q-field>
              </div>
            </div>
            <div class="row no-wrap items-start q-pa-xs">
              <div class="col q-pa-sm">
                <q-field outlined label="Engineer" stack-label dense>
                  <template v-slot:control>
                    <div class="self-center full-width no-outline" tabindex="0">
                      {{ job.engineerName }}
                    </div>
                  </template>
                </q-field>
              </div>
              <div class="col q-pa-sm">
                <q-field outlined label="Department" stack-label dense>
                  <template v-slot:control>
                    <div class="self-center full-width no-outline" tabindex="0">
                      {{ job.departmentName }}
                    </div>
                  </template>
                </q-field>
              </div>
            </div>
            <div class="row no-wrap items-start q-pa-xs">
              <div class="col q-pa-sm">
                <q-field outlined label="Description" stack-label dense>
                  <template v-slot:control>
                    <div class="self-center full-width no-outline" tabindex="0">
                      {{ job.jobDescription }}
                    </div>
                  </template>
                </q-field>
              </div>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
  name: 'JobDetailsDialog'
})
export default class ClassComponent extends Vue {
  @Prop({ type: Boolean, required: true }) jobDialogShow!: boolean;
  @Prop({ type: Function }) checkJobStatus!: object;
  @Prop({ type: Object, default: {}, required: true }) job!: object;

  public closeDialog() {
    this.$root.$emit('ShowJobDialog', false);
  }
  mounted() {
    //console.log(this);
  }
}
</script>
<style lang="sass" scoped>
.jobCard
  width: 100%
  max-width: 500px
</style>
