import { Component, OnInit } from '@angular/core';
import { MobilnostModel } from '../mobilnost-model';
import { MobilnostService } from '../mobilnost.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-list-mobilnosts',
  templateUrl: './list-mobilnosts.component.html',
  styleUrls: ['./list-mobilnosts.component.css']
})
export class ListMobilnostsComponent implements OnInit {

  mobilnosts!: Array<MobilnostModel>;
  constructor(private mobilnostService: MobilnostService) { }

  ngOnInit() {
    this.mobilnostService.getAllMobilnosts().subscribe(data => {
      this.mobilnosts = data;
    });
  }
}