import { Component, OnInit } from '@angular/core';
import { NatjecajModel } from 'src/app/mobilnost/natjecaj-model';
import { NatjecajService } from 'src/app/mobilnost/natjecaj.service';

@Component({
  selector: 'app-lista-natj',
  templateUrl: './lista-natj.component.html',
  styleUrls: ['./lista-natj.component.css']
})
export class ListaNatjComponent implements OnInit {

  natjecajs?: Array<NatjecajModel>;
  constructor(private natjecajService: NatjecajService) { }

  ngOnInit() {
    this.natjecajService.getAllNatjecajs().subscribe(data => {
      this.natjecajs = data;
    });
  }
}