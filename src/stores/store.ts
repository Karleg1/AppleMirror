// src/stores/store.ts
import { observable, action, makeAutoObservable } from "mobx";

class Store {
  @observable currentTime: string = "";
  @observable currentDate: string = "";
  @observable openedApp: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  @action setTime(time: string) {
    this.currentTime = time;
  }

  @action setDate(date: string) {
    this.currentDate = date;
  }

  @action setOpenedApp(app: string | null) {
    this.openedApp = app;
  }
}

const store = new Store();
export default store;
