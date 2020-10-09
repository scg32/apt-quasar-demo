<template>
  <div>
    <q-drawer
      v-model="isDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <MenuLinks />
      <!-- <q-list>
        <q-item-label header class="text-grey-8">
          Menu
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list> -->
    </q-drawer>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';

import MenuLinks from './MenuLinks.vue';
@Component({
  name: 'Drawer',
  components: {
    MenuLinks
  }
})
export default class Drawer extends Vue {
  private isDrawerOpen = false;
  @Prop({ required: true, default: false }) drawerOpen!: boolean;
  @Watch('drawerOpen')
  isOpen(newVal: boolean) {
    this.isDrawerOpen = newVal;
  }

  created() {
    //console.log(this);
  }
}
</script>
