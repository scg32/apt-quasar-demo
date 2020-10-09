import { MenuModel } from '../interfaces/menu-model';

export default class MenuClass implements MenuModel {
  id: number | string;
  title: string;
  caption: string;
  link: string;
  icon: string;
  active: boolean;

  constructor(object: MenuModel) {
    this.id = object.id;
    this.title = object.title;
    this.caption = object.caption;
    this.link = object.link;
    this.icon = object.icon;
    this.active = object.active;
  }
}
