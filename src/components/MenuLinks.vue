<template>
  <q-list v-if="showMenu">
    <q-item-label header class="text-grey-8">
      Menu
    </q-item-label>
    <q-item
      v-for="item in menuItemsArray"
      :key="item.id"
      clickable
      tag="a"
      :to="item.link"
    >
      <q-item-section avatar>
        <q-icon :name="item.icon" />
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ item.title }}</q-item-label>
        <q-item-label caption>
          {{ item.caption }}
        </q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import MenuClass from '../classes/MenuClass';
import { MenuModel } from '../interfaces/menu-model';
const menu = namespace('menu');

@Component({
  name: 'MenuLinks'
})
export default class MenuLinks extends Vue {
  private menuItemsArray = [] as any; //declare is depend from tsconfig settings
  public showMenu = false;
  @menu.Getter
  public GET_MENU!: [];

  public processMenu(): void {
    const menuItems: [] = this.GET_MENU;
    menuItems.filter(data => {
      const object: MenuModel = data;
      let createNewObject = {} as MenuClass; //declare object as Class object
      createNewObject = new MenuClass(object);
      this.menuItemsArray.push(createNewObject);
      this.showMenu = true;
    });
  }
  mounted() {
    this.processMenu();
    //console.log(this);
  }
}
</script>
