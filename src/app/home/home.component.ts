import { Component, OnInit } from '@angular/core';
import { NatjecajModel } from '../mobilnost/natjecaj-model';
import { NatjecajService } from '../mobilnost/natjecaj.service';
import { MobilnostModel } from '../shared/mobilnost-model';
import { MobilnostService} from '../shared/mobilnost.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  natjecaji: Array<NatjecajModel> = [];

  constructor(private natjecajService: NatjecajService) {
    this.natjecajService.getAllNatjecajs().subscribe(natjecaji => {
      this.natjecaji = natjecaji;
    }); 
  }

  ngOnInit(): void {
  }

}