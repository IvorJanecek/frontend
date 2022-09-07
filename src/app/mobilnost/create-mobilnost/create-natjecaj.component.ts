import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {  NatjecajModel } from '../natjecaj-model';
import { Router } from '@angular/router';
import { NatjecajService } from '../natjecaj.service';

@Component({
  selector: 'app-create-natjecaj',
  templateUrl: './create-natjecaj.component.html',
  styleUrls: ['./create-natjecaj.component.css']
})
export class CreateNatjecajComponent implements OnInit {
  createNatjecajForm: FormGroup;
  natjecajModel: NatjecajModel;
  title = new FormControl('');
  description = new FormControl('');

  constructor(private router: Router, private natjecajService: NatjecajService) {
    this.createNatjecajForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
      
    });
    this.natjecajModel = {
      name: '',
      description: ''
    }
  }

  ngOnInit() {
  }

  discard() {
    this.router.navigateByUrl('/');
  }

  createNatjecaj() {
    this.natjecajModel.name = this.createNatjecajForm.get('title')!.value;
    this.natjecajModel.description = this.createNatjecajForm.get('description')!.value;
    this.natjecajService.createNatjecaj(this.natjecajModel).subscribe(data => {
      this.router.navigateByUrl('/list-natjecajs');
    }, error => {
      console.log('Error occurred');
    })
  }
}