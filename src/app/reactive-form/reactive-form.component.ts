import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Device } from "../models";
import { DeviceService } from '../device.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {


    device: Device = {
    id: null,
    name:'',
    brand: '',
    model: '',
    year: null,
    serial: ''
  }

  @Output() update:EventEmitter<any> = new EventEmitter();

  updateForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    brand: new FormControl(''),
    model: new FormControl(''),
    year: new FormControl(''),
    serial: new FormControl('')
  })

  constructor(
    private router: Router,
    private deviceService: DeviceService
    ) { }

  ngOnInit(): void {
    this.device = this.deviceService.getDevice(this.deviceService.id);

    this.updateForm = new FormGroup({
      id: new FormControl(this.device.id),
      name: new FormControl(this.device.name),
      brand: new FormControl(this.device.brand),
      model: new FormControl(this.device.model),
      year: new FormControl(this.device.year),
      serial: new FormControl(this.device.serial)
    }) 
  }

  updateDevice(){
    this.deviceService.updateDevice(this.updateForm.value)
    this.router.navigate(['/list']);
    console.log(this.updateForm.value);
    // this.update.emit(this.updateForm);
    
  }

}
