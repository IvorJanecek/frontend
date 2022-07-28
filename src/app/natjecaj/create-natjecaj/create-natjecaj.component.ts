import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { CreateNatjecajPayload } from './create-natjecaj-payload';
import { NatjecajService } from 'src/app/shared/natjecaj.service';
import { MobilnostService } from 'src/app/mobilnost/mobilnost.service';
import { MobilnostModel } from 'src/app/mobilnost/mobilnost-model';

@Component({
  selector: 'app-create-natjecaj',
  templateUrl: './create-natjecaj.component.html',
  styleUrls: ['./create-natjecaj.component.css']
})
export class CreateNatjecajComponent implements OnInit {

  createNatjecajForm!: FormGroup;
  natjecajPayload!: CreateNatjecajPayload;
  mobilnosts!: Array<MobilnostModel>;

  constructor(private router: Router, private natjecajService: NatjecajService,
    private mobilnostService: MobilnostService) {
    this.natjecajPayload = {
      natjecajName: '',
      url: '',
      description: '',
      mobilnostName: ''
    }
  }

  ngOnInit() {
    this.createNatjecajForm = new FormGroup({
      natjecajName: new FormControl('', Validators.required),
      mobilnostName: new FormControl('', Validators.required),
      url: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
    this.mobilnostService.getAllMobilnosts().subscribe((data) => {
      this.mobilnosts = data;
    }, error => {
      throwError(error);
    })
  }

  createNatjecaj() {
    this.natjecajPayload.natjecajName = this.createNatjecajForm!.get('natjecajName')!.value;
    this.natjecajPayload.mobilnostName = this.createNatjecajForm!.get('mobilnostName')!.value;
    this.natjecajPayload.url = this.createNatjecajForm!.get('url')?.value;
    this.natjecajPayload.description = this.createNatjecajForm!.get('description')?.value;

    this.natjecajService.createNatjecaj(this.natjecajPayload).subscribe((data) => {
      this.router.navigateByUrl('/')
      
    }, error => {
      console.error(error)
    })
  }

  discardNatjecaj() {
    this.router.navigateByUrl('/');
  }

}