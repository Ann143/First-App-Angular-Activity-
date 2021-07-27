import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { Device } from './../models';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.css']
})
export class DeviceDetailsComponent implements OnInit {

  @Input() deviceDetail: Device;

  @Output() updateDetails:EventEmitter<any> = new EventEmitter();

  updateDevice(){
    this.router.navigate(['/update'])
    // this.updateDetails.emit(true);
  }
  
  constructor(private router: Router) { }


  ngOnInit(): void {
  }


}
