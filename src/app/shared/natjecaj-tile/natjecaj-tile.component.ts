import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { NatjecajModel } from '../natjecaj-model';

@Component({
  selector: 'app-natjecaj-tile',
  templateUrl: './natjecaj-tile.component.html',
  styleUrls: ['./natjecaj-tile.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class NatjecajTileComponent implements OnInit {

  @Input() natjecajs!: NatjecajModel[];

  constructor(private router: Router) {
   
   }

  ngOnInit(): void {
  }

  goToNatjecaj(id:number):void {
    this.router.navigateByUrl('/view-natjecaj/' + id);
  }

}
