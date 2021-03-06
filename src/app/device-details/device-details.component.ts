import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { Device } from './../models';
import { DeviceService } from '../device.service';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.css']
})
export class DeviceDetailsComponent implements OnInit {

  @Input() deviceDetail: Device;

  @Output() updateDetails:EventEmitter<any> = new EventEmitter();

 
  
  constructor(
    private router: Router,
    private deviceService: DeviceService
    ) { }


  ngOnInit(): void {
  }

  updateDevice(){
    this.deviceService.id = this.deviceDetail.id;
    this.router.navigate(['/update'])
    // this.updateDetails.emit(true);
  }

 

}
