import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  storage: Storage;

  constructor() {
    this.storage = window.localStorage;
  }

  set(key: string, value: string): void {
    this.storage[key] = value;
  }

  get(key: string): string {
    return this.storage[key] || false;
  }

  set
}
