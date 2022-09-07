import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { CreateMobilnostPayload } from './create-mobilnost-payload';
import { MobilnostService } from 'src/app/shared/mobilnost.service';
import { NatjecajService } from 'src/app/mobilnost/natjecaj.service';
import {  NatjecajModel } from 'src/app/mobilnost/natjecaj-model';

@Component({
  selector: 'app-create-mobilnost',
  templateUrl: './create-mobilnost.component.html',
  styleUrls: ['./create-mobilnost.component.css']
})
export class CreateMobilnostComponent implements OnInit {

  createMobilnostForm!: FormGroup;
  mobilnostPayload!: CreateMobilnostPayload;
  natjecajs!: Array<NatjecajModel>;

  constructor(private router: Router, private mobilnostService: MobilnostService,
    private natjecajService: NatjecajService) {
    this.mobilnostPayload = {
      mobilnostName: '',
      url: '',
      description: '',
      natjecajName: ''
    }
  }

  ngOnInit() {
    this.createMobilnostForm = new FormGroup({
      
      mobilnostName: new FormControl('', Validators.required),
      natjecajName: new FormControl('', Validators.required),
      url: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
    this.natjecajService.getAllNatjecajs().subscribe((data) => {
      this.natjecajs = data;
    }, error => {
      throwError(error);
    })
  }

  createMobilnost() {
    this.mobilnostPayload.mobilnostName = this.createMobilnostForm!.get('mobilnostName')?.value;
    this.mobilnostPayload.natjecajName = this.createMobilnostForm!.get('natjecajName')!.value;
    this.mobilnostPayload.url = this.createMobilnostForm!.get('url')?.value;
    this.mobilnostPayload.description = this.createMobilnostForm!.get('description')?.value;

    this.mobilnostService.createMobilnost(this.mobilnostPayload).subscribe((data) => {
      this.router.navigateByUrl('/')
      
    }, error => {
      console.error(error)
    })
  }

  discardMobilnost() {
    this.router.navigateByUrl('/');
  }

}