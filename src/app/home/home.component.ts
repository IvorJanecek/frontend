import { Component, OnInit } from '@angular/core';
import { MobilnostModel } from '../shared/mobilnost-model';
import { MobilnostService} from '../shared/mobilnost.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mobilnosti: Array<MobilnostModel> = [];

  constructor(private mobilnostService: MobilnostService) {
    this.mobilnostService.getAllMobilnosts().subscribe(mobilnosti => {
      this.mobilnosti = mobilnosti;
    }); 
  }

  ngOnInit(): void {
  }

}