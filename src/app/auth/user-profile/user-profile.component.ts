import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MobilnostService } from 'src/app/shared/mobilnost.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  name: string;
  username!: string;

  constructor(private activatedRoute: ActivatedRoute, private mobilnostService: MobilnostService,) {
    this.name = this.activatedRoute.snapshot.params['name'];

      
    
  }

  ngOnInit(): void {
    
  }

}