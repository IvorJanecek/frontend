import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { throwError } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MobilnostService } from 'src/app/shared/mobilnost.service';
import { MobilnostModel } from 'src/app/shared/mobilnost-model';

@Component({
  selector: 'app-view-mobilnost',
  templateUrl: './view-mobilnost.component.html',
  styleUrls: ['./view-mobilnost.component.css']
})
export class ViewMobilnostComponent implements OnInit {

  mobilnostId: number;
  mobilnost!: MobilnostModel;

  constructor(private mobilnostService: MobilnostService, private activateRoute: ActivatedRoute,
    private router: Router) {
    this.mobilnostId = this.activateRoute.snapshot.params['id'];

    }

  ngOnInit(): void {
    this.getMobilnostById();
  }


  private getMobilnostById() {
    this.mobilnostService.getMobilnost(this.mobilnostId).subscribe(data => {
      this.mobilnost = data;
    }); 


}
}