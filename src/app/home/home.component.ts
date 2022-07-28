import { Component, OnInit } from '@angular/core';
import { NatjecajModel } from '../shared/natjecaj-model';
import { NatjecajService } from '../shared/natjecaj.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  natjecajs: Array<NatjecajModel> = [];

  constructor(private natjecajService: NatjecajService) {
    this.natjecajService.getAllNatjecajs().subscribe(natjecaj => {
      this.natjecajs = natjecaj;
    });
  }

  ngOnInit(): void {
  }

}