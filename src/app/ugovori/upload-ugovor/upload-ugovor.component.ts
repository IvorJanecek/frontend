import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UploadUgovorService } from '../upload-ugovor.service';

@Component({
  selector: 'app-upload-ugovor',
  templateUrl: './upload-ugovor.component.html',
  styleUrls: ['./upload-ugovor.component.css']
})
export class UploadUgovorComponent implements OnInit {

  selectedUgovor?: FileList;
  progressInfos: any[] = [];
  message: string[] = [];
  ugovorInfos?: Observable<any>;
  constructor(private uploadUgovorService: UploadUgovorService) { }

  selectFiles(event:any): void {
    this.message = [];
    this.progressInfos = [];
    this.selectedUgovor = event.target.files;
  }
  
  uploadFiles(): void {
    this.message = [];
    if (this.selectedUgovor) {
      for (let i = 0; i < this.selectedUgovor.length; i++) {
        this.upload(i, this.selectedUgovor[i]);
      }
    }
  }

  upload(idx: number, ugovor: File): void {
    this.progressInfos[idx] = { value: 0, fileName: ugovor.name };
    if (ugovor) {
      this.uploadUgovorService.upload(ugovor).subscribe({
        next: (event: any) => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progressInfos[idx].value = Math.round(100 * event.loaded / event.total);
          } else if (event instanceof HttpResponse) {
            const msg = 'Uploaded the file successfully: ' + ugovor.name;
            this.message.push(msg);
            this.ugovorInfos = this.uploadUgovorService.getUgovori();
          }
        },
        error: (err: any) => {
          this.progressInfos[idx].value = 0;
          const msg = 'Could not upload the file: ' + ugovor.name;
          this.message.push(msg);
          this.ugovorInfos = this.uploadUgovorService.getUgovori();
        }
      });
    }
  }
  
  ngOnInit(): void {
    this.ugovorInfos = this.uploadUgovorService.getUgovori();
  }
}