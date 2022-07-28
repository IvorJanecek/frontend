import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NatjecajService } from 'src/app/shared/natjecaj.service';
import { NatjecajModel } from 'src/app/shared/natjecaj-model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  name: string;
  natjecajs?: NatjecajModel[];
  natjecajLength!: number;

  constructor(private activatedRoute: ActivatedRoute, private natjecajService: NatjecajService) {
    this.name = this.activatedRoute.snapshot.params['name'];

    this.natjecajService.getAllNatjecajsByUser(this.name).subscribe(data => {
      this.natjecajs = data;
      this.natjecajLength = data.length;
    });
    
  }

  ngOnInit(): void {
  }

}