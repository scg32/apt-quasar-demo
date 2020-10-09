import { store } from 'quasar/wrappers';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';
import menu from './module-menu';
import jobs from './module-jobs';


export interface StoreInterface {
  // Define your own store structure, using submodules if needed
  // example: ExampleStateInterface;
  // Declared as unknown to avoid linting issue. Best to strongly type as per the line above.
  menu: object;
  jobs: object;
}

export default store(function({ Vue }) {
  Vue.use(Vuex);
  const vuexLocal = new VuexPersistence<StoreInterface>({
    storage: window.localStorage
  });
  const Store = new Vuex.Store<StoreInterface>({
    modules: {
      menu,
      jobs
    },
    plugins: [vuexLocal.plugin],

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: !!process.env.DEV
  });

  return Store;
});
