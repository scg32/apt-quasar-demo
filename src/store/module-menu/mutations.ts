import { MutationTree } from 'vuex';
import { MenuInterface } from './state';

const mutation: MutationTree<MenuInterface> = {
  SET_MENU(state: MenuInterface, object: object) {
    state.MENU = object;
  }
};

export default mutation;
