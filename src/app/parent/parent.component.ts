import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.sass',
})
export class ParentComponent {
  @ViewChild(ChildComponent) childComponent!: ChildComponent;
  currentCounter = 0;

  handleEvent(counter: number) {
    this.currentCounter = counter;
  }

  handleStop() {
    this.childComponent.stopTimer();
  }
}
