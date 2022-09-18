import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NatjecajModel } from 'src/app/mobilnost/natjecaj-model';

@Component({
  selector: 'app-natjecaj-tile',
  templateUrl: './natjecaj-tile.component.html',
  styleUrls: ['./natjecaj-tile.component.css']
})
export class NatjecajTileComponent implements OnInit {

  @Input() natjecaji!: NatjecajModel[];

  constructor(private router: Router) {
   
   }

  ngOnInit(): void {
  }

  goToNatjecaj(id?:number):void {
    this.router.navigateByUrl('/view-natjecaj/' + id);
  }

}

