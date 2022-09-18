import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MobilnostModel } from '../mobilnost-model';

@Component({
  selector: 'app-mobilnost-tile',
  templateUrl: './mobilnost-tile.component.html',
  styleUrls: ['./mobilnost-tile.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class MobilnostTileComponent implements OnInit {

  @Input() mobilnosti!: MobilnostModel[];

  constructor(private router: Router) {
   
   }

  ngOnInit(): void {
  }

  goToMobilnost(id:number):void {
    this.router.navigateByUrl('/view-mobilnost/' + id);
  }

}
