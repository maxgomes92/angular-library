import { Injectable } from '@angular/core';
import * as moment from 'moment'

@Injectable({
  providedIn: 'root'
})
export class MyLibService {

  constructor() { }

  getTime () {
    return moment().toISOString()
  }
}
