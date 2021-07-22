import { Component } from '@angular/core';
import { Device } from './models';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'This is my first Angular project';

  device: Device = {
    name: "Device01",
    brand: "Dell",
    model: "Latitude 201"
  }

  devices : Device []= [
    {
      name: "Device01",
      brand: "Dell",
      model: "Latitude 201"
    },
    {
      name: "Device01",
      brand: "Dell",
      model: "Latitude 201"
    }
  ]

  



  appMessage = '';


  appEvent(event:any){
    this.appMessage = event;
  }

  appMessageArray = ['hi', 'hello', 'goodbye', 'go'];

  showComponent = true;

  showHide() {
    this.showComponent = !this.showComponent;
  }

  appNumberArray=['1', '2', '3', '4', '5'];
}
