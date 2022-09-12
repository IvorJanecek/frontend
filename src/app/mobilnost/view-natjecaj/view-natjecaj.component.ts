import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NatjecajModel } from '../natjecaj-model';
import { NatjecajService } from '../natjecaj.service';

@Component({
  selector: 'app-view-natjecaj',
  templateUrl: './view-natjecaj.component.html',
  styleUrls: ['./view-natjecaj.component.css']
})
export class ViewNatjecajComponent implements OnInit {

  natjecajId!: number;
  natjecaj!: NatjecajModel;

  constructor(private natjecajService: NatjecajService, private activateRoute: ActivatedRoute,
    private router: Router) {
    this.natjecajId = this.activateRoute.snapshot.params['id'];

    }

  ngOnInit() {
    this.getNatjecaj();
  }


  private getNatjecaj() {
    this.natjecajService.getNatjecaj(this.natjecajId).subscribe(data => {
      this.natjecaj = data;
    }); 


}
}
