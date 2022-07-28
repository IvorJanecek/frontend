import { Component, OnInit } from '@angular/core';
import { MobilnostService } from 'src/app/mobilnost/mobilnost.service';
import { MobilnostModel } from 'src/app/mobilnost/mobilnost-model';

@Component({
  selector: 'app-mobilnost-side-bar',
  templateUrl: './mobilnost-side-bar.component.html',
  styleUrls: ['./mobilnost-side-bar.component.css']
})
export class MobilnostSideBarComponent implements OnInit {
  mobilnosts: Array<MobilnostModel> = [];
  displayViewAll!: boolean;

  constructor(private mobilnostService: MobilnostService) {
    this.mobilnostService.getAllMobilnosts().subscribe(data => {
      if (data.length > 3) {
        this.mobilnosts = data.splice(0, 3);
        this.displayViewAll = true;
      } else {
        this.mobilnosts = data;
      }
    });
  }

  ngOnInit(): void { }

}