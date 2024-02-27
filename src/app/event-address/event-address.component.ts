import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-address',
  templateUrl: './event-address.component.html',
  styleUrl: './event-address.component.sass',
})
export class EventAddressComponent implements OnInit {
  @Input() inputData: any;

  constructor() {}

  ngOnInit(): void {
    console.log(this.inputData);
  }
}
