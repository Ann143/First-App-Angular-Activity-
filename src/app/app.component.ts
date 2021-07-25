import { Component, Output, EventEmitter } from '@angular/core';
import { Device } from './models';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // @Output() appEvent= new EventEmitter();

  // title = 'This is my first Angular Project!';

  //This is for activity number 5:
  deviceDetails : Device []= [
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
    }
  ]

  addDevice(device: Device) {
    console.log(device);
    this.deviceDetails.push(device as Device);
    console.log(this.deviceDetails);
  }

//This is for activity number 4:
  // number=0;

  // addEvent() {
  //   this.appEvent.emit(this.number++);
  // }

  // subEvent() {
  //   this.appEvent.emit(this.number--);
  // }



//This is for activity number 3:
  // appMessage = '';

  // appEvent(event:any){
  //   this.appMessage = event;
  // }


//This is for the Sir Junrey Demo:
  // appMessageArray = ['hi', 'hello', 'goodbye', 'go'];

  // showComponent = true;

  // showHide() {
  //   this.showComponent = !this.showComponent;
  // }

 

}
