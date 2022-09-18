import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { throwError } from 'rxjs';
import { PrijavaPayload } from 'src/app/prijava/prijava-payload';
import { PrijavaService } from 'src/app/prijava/prijava.service';
import { NatjecajModel } from '../natjecaj-model';
import { NatjecajService } from '../natjecaj.service';

@Component({
  selector: 'app-view-natjecaj',
  templateUrl: './view-natjecaj.component.html',
  styleUrls: ['./view-natjecaj.component.css']
})
export class ViewNatjecajComponent implements OnInit {

  natjecajId!: number;
  prijavaId!: number;
  natjecaj!: NatjecajModel;
  prijavaForm: FormGroup;
  prijavaPayload: PrijavaPayload;
  prijave!: PrijavaPayload[];

  constructor(private natjecajService: NatjecajService, private activateRoute: ActivatedRoute,  private prijavaService: PrijavaService,
    private router: Router) {
    this.natjecajId = this.activateRoute.snapshot.params['id'];

    this.prijavaForm = new FormGroup({
      prijavaName: new FormControl('', Validators.required)
    });
    this.prijavaPayload = {
      prijavaId: this.prijavaId,
      prijavaName: '',
      natjecajId: this.natjecajId
    };

    }

  ngOnInit() {
    this.getNatjecaj();
    this.getAllPrijaveForNatjecaj();
  }

  postPrijava() {
    this.prijavaPayload.prijavaName = this.prijavaForm.get('prijavaName')!.value;
    this.prijavaService.postPrijava(this.prijavaPayload).subscribe(data => {
      this.prijavaForm.get('prijavaName')!.setValue('');
      this.getAllPrijaveForNatjecaj();
     
    }, error => {
      throwError(error);
    })
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
