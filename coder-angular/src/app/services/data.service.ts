import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Them vao bien toan cuc
}) /// Dependency Injection // Design pattern
export class DataService {
  private _textFromHello: string;

  get textFromHello(): string {
    return this._textFromHello;
  }

  set textFromHello(text: string) {
    this._textFromHello = text;
  }

}
