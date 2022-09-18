import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { throwError } from 'rxjs';
import { NatjecajModel } from 'src/app/mobilnost/natjecaj-model';
import { NatjecajService } from 'src/app/mobilnost/natjecaj.service';
import { PrijavaPayload } from 'src/app/prijava/prijava-payload';
import { PrijavaService } from 'src/app/prijava/prijava.service';

@Component({
  selector: 'app-list-prijave',
  templateUrl: './list-prijave.component.html',
  styleUrls: ['./list-prijave.component.css']
})
export class ListPrijaveComponent implements OnInit {

  natjecajId!: number;
  prijave!: PrijavaPayload[];
  natjecaj!: NatjecajModel;

  constructor(private natjecajService: NatjecajService, private activateRoute: ActivatedRoute,  private prijavaService: PrijavaService,
    private router: Router) { 
      this.natjecajId = this.activateRoute.snapshot.params['id'];
    }

  ngOnInit(): void {
    this.getNatjecaj();
    this.getAllPrijaveForNatjecaj();
  }

  private getNatjecaj() {
    this.natjecajService.getNatjecaj(this.natjecajId).subscribe(data => {
      this.natjecaj = data;
    }); 
  }
    private getAllPrijaveForNatjecaj() {
      this.prijavaService.getAllPrijaveForNatjecaj(this.natjecajId).subscribe(data => {
        this.prijave = data;
      }, error => {
        throwError(error);
      });
    }
  

}
