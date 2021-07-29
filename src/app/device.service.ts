import { Injectable } from '@angular/core';
import { Device } from './models';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  id: number;
  
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

  constructor() { }

getDevices(){
  return this.deviceDetails;
}

getDevice(id: number) {
  //the find id that match to the deviceDetails will stores in index variable
  const index = this.deviceDetails.findIndex((device => device.id == id));

  //this will return the data that match to the id stores in index
  return this.deviceDetails[index];
}

  addDevice(device: Device){
    //this will display the added data to the list
    this.deviceDetails.push(device as Device);
  }

  updateDevice(device: Device) {
    //index variables stores the find id that equal to the deviceDetails
    const index = this.deviceDetails.findIndex((obj => obj.id == device.id));
    
    //this code will display the updated data into the list
    return this.deviceDetails[index] = device;

  }

}
