import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MobilnostModel } from '../mobilnost-model';
import { Router } from '@angular/router';
import { MobilnostService } from '../mobilnost.service';

@Component({
  selector: 'app-create-mobilnost',
  templateUrl: './create-mobilnost.component.html',
  styleUrls: ['./create-mobilnost.component.css']
})
export class CreateMobilnostComponent implements OnInit {
  createMobilnostForm: FormGroup;
  mobilnostModel: MobilnostModel;
  title = new FormControl('');
  description = new FormControl('');

  constructor(private router: Router, private mobilnostService: MobilnostService) {
    this.createMobilnostForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
    this.mobilnostModel = {
      name: '',
      description: ''
    }
  }

  ngOnInit() {
  }

  discard() {
    this.router.navigateByUrl('/');
  }

  createMobilnost() {
    this.mobilnostModel.name = this.createMobilnostForm.get('title')!.value;
    this.mobilnostModel.description = this.createMobilnostForm.get('description')!.value;
    this.mobilnostService.createMobilnost(this.mobilnostModel).subscribe(data => {
      this.router.navigateByUrl('/list-mobilnosts');
    }, error => {
      console.log('Error occurred');
    })
  }
}