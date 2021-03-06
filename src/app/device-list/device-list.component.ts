import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceService } from '../device.service';

import { Device } from '../models';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {

  deviceDetails: Device[];
  updatedDevice: Device[];
 

  constructor(
    private router: Router,
    private deviceService: DeviceService
    ) { }

  ngOnInit(): void {
    this.deviceDetails = this.deviceService.getDevices();
  
  }

  addDevice(){
    this.router.navigate(['/add']);
  }
  // deviceDetails : Device []= [
  //   {
  //     id:0,
  //     name: "Device01",
  //     brand: "Dell",
  //     model: "ITZ400",
  //     year:   2021,
  //     serial: "123456try"
  //   },
  //   {
  //     id:1,
  //     name: "Device02",
  //     brand: "NEC",
  //     model: "VersaPro",
  //     year: 2019,
  //     serial: "23456dsf"
  //   },
  //   {
  //     id:2,
  //     name: "Device03",
  //     brand: "Lenovo",
  //     model: "Pro",
  //     year: 2019,
  //     serial: "234dfdg"
  //   }
  // ] 
}
