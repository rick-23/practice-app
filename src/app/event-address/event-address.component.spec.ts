import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventAddressComponent } from './event-address.component';

describe('EventAddressComponent', () => {
  let component: EventAddressComponent;
  let fixture: ComponentFixture<EventAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventAddressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
