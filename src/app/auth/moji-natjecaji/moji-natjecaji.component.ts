import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MobilnostModel } from 'src/app/shared/mobilnost-model';
import { MobilnostService } from 'src/app/shared/mobilnost.service';


@Component({
  selector: 'app-moji-natjecaji',
  templateUrl: './moji-natjecaji.component.html',
  styleUrls: ['./moji-natjecaji.component.css']
})
export class MojiNatjecajiComponent implements OnInit {
  name: string;
  mobilnosts!: MobilnostModel[];
  natjecajLength?: number;
  

  constructor(private activatedRoute: ActivatedRoute, private mobilnostService: MobilnostService,) {
    this.name = this.activatedRoute.snapshot.params['name'];

    this.mobilnostService.getAllMobilnostsByUser(this.name).subscribe(data => {
      this.mobilnosts = data;
      this.natjecajLength = data.length;
    });
    
  }

  ngOnInit(): void {
  }

}