import { Component, OnInit } from '@angular/core';
import { FirstService } from './first-service.service';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.sass',
})
export class FirstComponent implements OnInit {
  jsonData: any;
  constructor(private firstService: FirstService) {}

  ngOnInit(): void {
    this.firstService.getData().subscribe((data) => {
      this.jsonData = data;
    });
  }
}
