import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { throwError } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NatjecajService } from 'src/app/shared/natjecaj.service';
import { NatjecajModel } from 'src/app/shared/natjecaj-model';

@Component({
  selector: 'app-view-natjecaj',
  templateUrl: './view-natjecaj.component.html',
  styleUrls: ['./view-natjecaj.component.css']
})
export class ViewNatjecajComponent implements OnInit {

  natjecajId: number;
  natjecaj!: NatjecajModel;

  constructor(private natjecajService: NatjecajService, private activateRoute: ActivatedRoute,
    private router: Router) {
    this.natjecajId = this.activateRoute.snapshot.params['id'];

    }

  ngOnInit(): void {
    this.getNatjecajById();
  }


  private getNatjecajById() {
    this.natjecajService.getNatjecaj(this.natjecajId).subscribe(data => {
      this.natjecaj = data;
    }); 


}
}