// src/stores/store.ts

import { makeAutoObservable, action } from "mobx";

class Store {
  currentTime: string = "";
  currentDate: string = "";
  openedApp: string | null = null;

  constructor() {
    makeAutoObservable(this, {
      setTime: action,
      setDate: action,
      setOpenedApp: action,
    });
  }

  setTime = (time: string) => {
    this.currentTime = time;
  };

  setDate = (date: string) => {
    this.currentDate = date;
  };

  setOpenedApp = (app: string | null) => {
    this.openedApp = app;
  };
}

const store = new Store();
export default store;
