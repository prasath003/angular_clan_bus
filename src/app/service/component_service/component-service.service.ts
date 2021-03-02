import {EventEmitter, Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ComponentServiceService {
  // Event subject based on the trigger in run time
  private subject = new Subject<any>();

  // Sharing data via observable
  private messageSource = new BehaviorSubject('NAN');

  // Method for Receiving data in the component
  currentMessage = this.messageSource.asObservable();

  //  use this in the component
  // this.data.currentMessage.subscribe(message => this.messagefromservice = message);

  constructor() {
  }

  // Method for sending data to this service
  changeMessage(message) {
    this.messageSource.next(message);
  }

  // Method for emitting the event on runtime
  newEvent(event) {
    this.subject.next(event);
  }

  // Method for getting the emitted event on run time
  get event$() {
    return this.subject.asObservable();
  }


}
