import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  @Input() firstMessage = "";

  @Output() firstEvent = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }


  clickEvent() {
    this.firstEvent.emit('new message');
  }

}
