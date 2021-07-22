import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  // @Input() firstMessage = "";

//This is for actvity number 3:
  @Output() firstEvent = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

//This is for activity number 3:
  clickEvent() {
    this.firstEvent.emit('new message');
  }

}
