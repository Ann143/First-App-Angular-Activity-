import { Component, Output, EventEmitter } from '@angular/core';
import { Device } from './models';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // @Output() appEvent= new EventEmitter();

  title = 'This is my first Angular Project!';

  //This is for activity number 5:
  // deviceDetail;

  showUpdate = false;
  selectedDevice ;

  deviceDetails : Device []= [
    {
      id:0,
      name: "Device01",
      brand: "Dell",
      model: "ITZ400",
      year:   2021,
      serial: "123456try"
    },
    {
      id:1,
      name: "Device02",
      brand: "NEC",
      model: "VersaPro",
      year: 2019,
      serial: "23456dsf"
    },
    {
      id:2,
      name: "Device03",
      brand: "Lenovo",
      model: "Pro",
      year: 2019,
      serial: "234dfdg"
    }
  ]

   updateDevice(event,id){
    this.showUpdate = event;
    this.selectedDevice = this.deviceDetails.find(device=> device.id === id);
  }

  updateDisplay(event){

    this.deviceDetails.forEach(device => {

       if(device.id === event.value.id){
        device.name = event.value.name;
        device.brand = event.value.brand;
        device.model = event.value.model;
        device.year = event.value.year;
        device.serial = event.value.serial;
       }

    });

    this.showUpdate = false;
  }

 // addDevice(device: Device) {
   
  //   this.deviceDetails.push(device as Device);
    
  // }


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
