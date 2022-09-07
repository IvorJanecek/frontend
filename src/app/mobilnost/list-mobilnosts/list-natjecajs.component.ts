import { Component, OnInit } from '@angular/core';
import {  NatjecajModel } from '../natjecaj-model';
import {  NatjecajService } from '../natjecaj.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-list-natjecajs',
  templateUrl: './list-natjecajs.component.html',
  styleUrls: ['./list-natjecajs.component.css']
})
export class ListNatjecajsComponent implements OnInit {

  natjecajs!: Array<NatjecajModel>;
  constructor(private natjecajService: NatjecajService) { }

  ngOnInit() {
    this.natjecajService.getAllNatjecajs().subscribe(data => {
      this.natjecajs = data;
    });
  }
}