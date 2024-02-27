import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.sass',
})
export class ChildComponent implements OnInit {
  @Output() outputEvent: EventEmitter<number> = new EventEmitter();
  protected counter = 0;
  protected stopped = false;
  protected intervalId: any;

  ngOnInit() {
    this.startTimer();
  }

  startTimer() {
    if (!this.intervalId) {
      this.intervalId = setInterval(() => {
        this.counter++;
      }, 1000);
    }
  }

  buttonClicked() {
    this.outputEvent.emit(this.counter);
  }

  stopTimer() {
    clearInterval(this.intervalId);
    this.stopped = true;
  }
}
