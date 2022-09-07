import { Component, OnInit } from '@angular/core';
import { NatjecajService } from 'src/app/mobilnost/natjecaj.service';
import {  NatjecajModel } from 'src/app/mobilnost/natjecaj-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-natjecaj-side-bar',
  templateUrl: './natjecaj-side-bar.component.html',
  styleUrls: ['./natjecaj-side-bar.component.css']
})
export class NatjecajSideBarComponent implements OnInit {
  natjecajs!: Array<NatjecajModel> ;
  displayViewAll!: boolean;

  constructor(private natjecajService: NatjecajService, private router: Router) {
    this.natjecajService.getAllNatjecajs().subscribe(data => {
      if (data.length > 3) {
        this.natjecajs = data.splice(0, 3);
        this.displayViewAll = true;
      } else {
        this.natjecajs = data;
      }
    });
  }

  ngOnInit(): void { }

  goToNatjecaj(id:number):void {
    this.router.navigateByUrl('/view-natjecaj/' + id);
  }

}