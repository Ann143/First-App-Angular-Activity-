import { Component, Output, EventEmitter } from '@angular/core';
import { Device } from './models';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Output() appEvent= new EventEmitter();
  
  title = 'This is my first Angular Project!';

  devices : Device []= [
    {
      name: "Device01",
      brand: "Dell",
      model: "ITZ400",
      year:   2021,
      serial: "123456try"
    },
    {
      name: "Device02",
      brand: "NEC",
      model: "VersaPro",
      year: 2019,
      serial: "23456dsf"
    },
    {
      name: "Device03",
      brand: "Acer",
      model: "Latitude",
      year: 2018,
      serial: "23456dsds"
    }
  ]





  // number=0;

  // addEvent() {
  //   this.appEvent.emit(this.number++);
  // }

  // subEvent() {
  //   this.appEvent.emit(this.number--);
  // }

  // device: Device = {
  //   name: "Device01",
  //   brand: "Dell",
  //   model: "Latitude 201"
  // }


  // appMessage = '';


  // appEvent(event:any){
  //   this.appMessage = event;
  // }

  // appMessageArray = ['hi', 'hello', 'goodbye', 'go'];

  // showComponent = true;

  // showHide() {
  //   this.showComponent = !this.showComponent;
  // }

 

}
